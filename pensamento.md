# Pensamento de Desenvolvimento - CasalResolve

## Visão Geral do Projeto

O CasalResolve é uma plataforma que utiliza IA para ajudar casais a resolverem seus conflitos e acordos informais, como DRs (Discussões de Relacionamento) ou casos matrimoniais. A plataforma oferece um ambiente seguro e estruturado para que os casais possam documentar, discutir e resolver seus problemas com a ajuda de ferramentas baseadas em IA.

## Decisões Técnicas

### Arquitetura

Decidi usar uma arquitetura moderna baseada em Next.js com App Router, que oferece:
- Renderização híbrida (SSR, SSG, ISR)
- Roteamento baseado em sistema de arquivos
- API routes para backend
- Suporte a TypeScript
- Otimização de imagens e fontes

### Frontend

- **Next.js**: Framework React moderno com recursos avançados
- **Tailwind CSS**: Para estilização rápida e responsiva
- **Radix UI**: Componentes acessíveis e customizáveis
- **React Hook Form**: Para gerenciamento de formulários
- **Zod**: Para validação de dados

### Backend

- **Next.js API Routes**: Para criar endpoints de API
- **Supabase**: Para autenticação e banco de dados
- **Stripe**: Para processamento de pagamentos e assinaturas
- **Swagger**: Para documentação da API

### Banco de Dados

- **Supabase (PostgreSQL)**: Banco de dados relacional com recursos avançados
- Estrutura de dados para armazenar:
  - Informações de usuários
  - Dados de casais
  - Histórico de discussões
  - Acordos e resoluções
  - Planos de assinatura

### Autenticação

- **Supabase Auth**: Sistema de autenticação completo
- Suporte para:
  - Email/senha
  - OAuth (Google, Facebook)
  - Magic links

### Pagamentos

- **Stripe**: Para processamento de pagamentos e gerenciamento de assinaturas
- Diferentes planos de assinatura com recursos específicos

## Estrutura do Projeto

```
/
├── src/
│   ├── app/                  # App Router do Next.js
│   │   ├── api/              # API Routes (Backend)
│   │   ├── auth/             # Páginas de autenticação
│   │   ├── dashboard/        # Dashboard do usuário
│   │   ├── pricing/          # Planos e preços
│   │   └── (...)             # Outras rotas
│   ├── components/           # Componentes reutilizáveis
│   │   ├── ui/               # Componentes de UI básicos
│   │   ├── forms/            # Componentes de formulário
│   │   └── layout/           # Componentes de layout
│   ├── lib/                  # Bibliotecas e utilitários
│   │   ├── supabase/         # Cliente e helpers do Supabase
│   │   ├── stripe/           # Configuração do Stripe
│   │   ├── ai/               # Integrações com IA
│   │   └── utils/            # Funções utilitárias
│   ├── types/                # Definições de tipos TypeScript
│   └── middleware.ts         # Middleware do Next.js
├── public/                   # Arquivos estáticos
├── docs/                     # Documentação
└── (arquivos de configuração)
```

## Fluxo de Usuário

1. **Onboarding**:
   - Usuário acessa a landing page
   - Aprende sobre os benefícios da plataforma
   - Cria uma conta ou faz login

2. **Configuração**:
   - Completa perfil
   - Convida parceiro(a)
   - Escolhe plano de assinatura

3. **Utilização**:
   - Inicia discussões
   - Documenta acordos
   - Recebe sugestões da IA
   - Acompanha progresso

## Próximos Passos

1. Configurar estrutura básica do projeto
2. Implementar autenticação com Supabase
3. Criar componentes de UI principais
4. Desenvolver fluxo de onboarding
5. Implementar sistema de assinaturas
6. Desenvolver funcionalidades de IA para resolução de conflitos
7. Criar documentação da API
8. Testes e otimizações
