# Testes End-to-End (E2E) - CasalResolve

Este diretório contém os testes end-to-end para o projeto CasalResolve, utilizando o Playwright.

## Estrutura de Diretórios

```
tests/
├── e2e/                  # Testes end-to-end
│   ├── auth.spec.ts      # Testes de autenticação
│   ├── navigation.spec.ts # Testes de navegação
│   ├── pricing.spec.ts   # Testes da página de preços
│   └── responsive.spec.ts # Testes de responsividade
├── README.md             # Esta documentação
```

## Diretórios de Resultados e Evidências

```
test-results/             # Resultados dos testes (não versionado)
├── artifacts/            # Artefatos gerados durante os testes
└── html-report/          # Relatório HTML gerado pelo Playwright

test-evidence/            # Capturas de tela e outras evidências (não versionado)
└── evidence-report.html  # Relatório de evidências gerado pelo script
```

## Como Executar os Testes

### Pré-requisitos

- Node.js instalado
- Projeto configurado e dependências instaladas

### Comandos Disponíveis

```bash
# Executar todos os testes e2e
npm run test:e2e

# Executar testes com interface gráfica
npm run test:e2e:ui

# Executar testes em modo debug
npm run test:e2e:debug

# Visualizar relatório HTML dos testes
npm run test:e2e:report

# Gerar relatório de evidências
npm run test:evidence
```

## Evidências de Testes

Durante a execução dos testes, são capturadas evidências (screenshots) que são salvas no diretório `test-evidence/`. Estas evidências são úteis para:

1. Documentar o comportamento da aplicação
2. Verificar visualmente os resultados dos testes
3. Identificar problemas de UI/UX
4. Fornecer documentação para stakeholders

### Relatório de Evidências

Após executar os testes, você pode gerar um relatório HTML com todas as evidências capturadas:

```bash
npm run test:evidence
```

O relatório será gerado em `test-evidence/evidence-report.html` e pode ser aberto em qualquer navegador.

## Configuração

A configuração dos testes está no arquivo `playwright.config.ts` na raiz do projeto. Principais configurações:

- **Navegadores**: Chrome, Firefox, Safari e versões mobile
- **URL Base**: http://localhost:3000
- **Timeout**: 30 segundos por teste
- **Screenshots**: Capturados apenas em caso de falha
- **Relatórios**: HTML e JSON
- **Servidor Web**: Inicia automaticamente o servidor de desenvolvimento

## Boas Práticas

1. **Mantenha os testes independentes**: Cada teste deve poder ser executado isoladamente
2. **Use seletores estáveis**: Prefira seletores baseados em roles, text ou test-id
3. **Capture evidências**: Use screenshots para documentar o comportamento da aplicação
4. **Teste em múltiplos navegadores**: Garanta que a aplicação funcione em diferentes ambientes
5. **Teste a responsividade**: Verifique o comportamento em diferentes tamanhos de tela
