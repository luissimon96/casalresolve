import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import { createBrowserClient } from '@supabase/ssr';
import { createMockAuthClient } from '../auth/mock-auth';
import { createMockDbClient } from '../db/mock-db';

// Verificar se estamos em modo de desenvolvimento
const isDevelopmentMode = process.env.SUPABASE_DEV_MODE === 'true';

// Criar cliente Supabase personalizado
export const createCustomClient = () => {
  // Se estamos em modo de desenvolvimento, usar mocks
  if (isDevelopmentMode) {
    console.log('Usando cliente Supabase simulado para desenvolvimento');
    const mockAuthClient = createMockAuthClient();
    const mockDbClient = createMockDbClient();
    
    // Combinar os clientes
    return {
      ...mockAuthClient,
      ...mockDbClient
    };
  }
  
  // Caso contrário, usar cliente Supabase real
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
};
