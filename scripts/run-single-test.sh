#!/bin/bash

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verificar se foi fornecido um arquivo de teste
if [ -z "$1" ]; then
  echo -e "${RED}Erro: Nenhum arquivo de teste especificado.${NC}"
  echo -e "Uso: ./scripts/run-single-test.sh <arquivo-de-teste> [navegador]"
  echo -e "Exemplo: ./scripts/run-single-test.sh tests/e2e/navigation.spec.ts chromium"
  exit 1
fi

# Definir o arquivo de teste
TEST_FILE=$1

# Definir o navegador (padrão: chromium)
BROWSER=${2:-chromium}

echo -e "${YELLOW}Executando teste: ${TEST_FILE} no navegador: ${BROWSER}${NC}"

# Configurar ambiente de testes
./scripts/setup-test-env.sh

# Executar o teste específico
npx playwright test ${TEST_FILE} --project=${BROWSER} --headed

# Verificar se o teste foi executado com sucesso
if [ $? -eq 0 ]; then
  echo -e "${GREEN}Teste executado com sucesso!${NC}"
else
  echo -e "${RED}O teste falhou. Verifique o relatório para mais detalhes.${NC}"
fi

# Gerar relatório de evidências
echo -e "${YELLOW}Gerando relatório de evidências...${NC}"
node scripts/generate-evidence-report.js

# Verificar se o relatório foi gerado
if [ -f "test-evidence/evidence-report.html" ]; then
  echo -e "${GREEN}Relatório de evidências gerado com sucesso em test-evidence/evidence-report.html${NC}"
else
  echo -e "${RED}Falha ao gerar relatório de evidências.${NC}"
fi

echo -e "${YELLOW}Abrindo relatório de testes...${NC}"
npx playwright show-report test-results/html-report

echo -e "${GREEN}Processo concluído!${NC}"
