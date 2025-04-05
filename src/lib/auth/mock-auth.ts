// Mock de autenticação para desenvolvimento
import { User } from '@supabase/supabase-js';

// Armazenamento local de usuários
const users: Record<string, { user: User; password: string }> = {};

// Armazenamento de sessão
let currentSession: { user: User } | null = null;

// Verificar se há uma sessão salva no localStorage
const initSession = () => {
  if (typeof window !== 'undefined') {
    const savedSession = localStorage.getItem('mockAuthSession');
    if (savedSession) {
      try {
        currentSession = JSON.parse(savedSession);
      } catch (e) {
        console.error('Erro ao carregar sessão:', e);
        localStorage.removeItem('mockAuthSession');
      }
    }
  }
};

// Inicializar sessão
initSession();

export const mockAuth = {
  // Obter sessão atual
  getSession: async () => {
    return { data: { session: currentSession } };
  },

  // Cadastrar novo usuário
  signUp: async ({ email, password, options }: { email: string; password: string; options?: any }) => {
    // Verificar se o email já existe
    if (users[email]) {
      return { error: { message: 'Email já cadastrado' } };
    }

    // Criar novo usuário
    const user: User = {
      id: `user_${Date.now()}`,
      app_metadata: {},
      user_metadata: options?.data || {},
      aud: 'authenticated',
      created_at: new Date().toISOString(),
      email,
      email_confirmed_at: new Date().toISOString(),
      phone: '',
      confirmed_at: new Date().toISOString(),
      last_sign_in_at: new Date().toISOString(),
      role: 'authenticated',
      updated_at: new Date().toISOString(),
    };

    // Salvar usuário
    users[email] = { user, password };

    // Criar sessão
    currentSession = { user };

    // Salvar sessão no localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('mockAuthSession', JSON.stringify(currentSession));
    }

    return { data: { user, session: currentSession }, error: null };
  },

  // Login com email e senha
  signInWithPassword: async ({ email, password }: { email: string; password: string }) => {
    // Verificar se o usuário existe
    const userData = users[email];
    if (!userData) {
      return { error: { message: 'Email não cadastrado' } };
    }

    // Verificar senha
    if (userData.password !== password) {
      return { error: { message: 'Senha incorreta' } };
    }

    // Criar sessão
    currentSession = { user: userData.user };

    // Salvar sessão no localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('mockAuthSession', JSON.stringify(currentSession));
    }

    return { data: { user: userData.user, session: currentSession }, error: null };
  },

  // Login com OAuth
  signInWithOAuth: async ({ provider, options }: { provider: string; options?: any }) => {
    // Simular login OAuth bem-sucedido
    console.log(`Login OAuth com ${provider}`);
    
    // Em um ambiente real, redirecionaria para o provedor OAuth
    // Aqui, apenas simulamos um usuário OAuth
    const email = `${provider}_user@example.com`;
    
    // Criar usuário se não existir
    if (!users[email]) {
      const user: User = {
        id: `user_oauth_${Date.now()}`,
        app_metadata: {},
        user_metadata: { provider },
        aud: 'authenticated',
        created_at: new Date().toISOString(),
        email,
        email_confirmed_at: new Date().toISOString(),
        phone: '',
        confirmed_at: new Date().toISOString(),
        last_sign_in_at: new Date().toISOString(),
        role: 'authenticated',
        updated_at: new Date().toISOString(),
      };
      
      users[email] = { user, password: 'oauth_password' };
    }
    
    // Criar sessão
    currentSession = { user: users[email].user };
    
    // Salvar sessão no localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('mockAuthSession', JSON.stringify(currentSession));
    }
    
    // Redirecionar para a URL de callback
    if (options?.redirectTo && typeof window !== 'undefined') {
      window.location.href = options.redirectTo;
    }
    
    return { error: null };
  },

  // Logout
  signOut: async () => {
    currentSession = null;
    
    // Remover sessão do localStorage
    if (typeof window !== 'undefined') {
      localStorage.removeItem('mockAuthSession');
    }
    
    return { error: null };
  },

  // Trocar código por sessão (para OAuth)
  exchangeCodeForSession: async (code: string) => {
    console.log('Código OAuth:', code);
    return { error: null };
  }
};

// Função para criar um cliente de autenticação simulado
export const createMockAuthClient = () => {
  return {
    auth: mockAuth
  };
};
