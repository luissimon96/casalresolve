# CasalResolve - Plataforma de Resolução de Conflitos para Casais com IA

## Visão Geral

CasalResolve é uma plataforma inovadora que utiliza Inteligência Artificial para ajudar casais a resolverem seus conflitos e acordos informais, como DRs (Discussões de Relacionamento) ou casos matrimoniais. A plataforma oferece um ambiente seguro e estruturado para que os casais possam documentar, discutir e resolver seus problemas com a ajuda de ferramentas baseadas em IA.

## Funcionalidades Principais

- **Mediação Assistida por IA**: Algoritmos de IA que ajudam a identificar padrões de comunicação e sugerem abordagens para resolução de conflitos
- **Documentação de Acordos**: Ferramentas para documentar e acompanhar acordos entre casais
- **Histórico de Discussões**: Registro organizado de discussões anteriores para referência
- **Planos de Assinatura**: Diferentes níveis de acesso com recursos específicos
- **Autenticação Segura**: Sistema robusto de autenticação para proteger dados sensíveis

## Tecnologias Utilizadas

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Radix UI
- React Hook Form + Zod

### Backend
- Next.js API Routes
- Supabase (Autenticação e Banco de Dados)
- Stripe (Processamento de Pagamentos)

### Documentação
- Swagger/OpenAPI

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
└── (arquivos de configuração)
```

## API e Integrações

O projeto inclui uma API RESTful documentada com Swagger, permitindo integrações futuras com:
- Aplicativos móveis
- Assistentes virtuais
- Outras plataformas de relacionamento

## Começando

### Pré-requisitos

- Node.js 18.0.0 ou superior
- Conta no Supabase
- Conta no Stripe (para processamento de pagamentos)

### Instalação

1. Clone o repositório
   ```bash
   git clone https://github.com/seu-usuario/casalresolve.git
   cd casalresolve
   ```

2. Instale as dependências
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente
   ```bash
   cp .env.example .env.local
   # Edite .env.local com suas credenciais
   ```

4. Inicie o servidor de desenvolvimento
   ```bash
   npm run dev
   ```

5. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador

## Contribuição

Contribuições são bem-vindas! Por favor, leia as diretrizes de contribuição antes de enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.
