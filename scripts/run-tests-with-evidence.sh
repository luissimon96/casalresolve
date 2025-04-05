#!/bin/bash

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Iniciando testes end-to-end com geração de evidências...${NC}"

# Configurar ambiente de testes
./scripts/setup-test-env.sh

# Limpar diretório de evidências
echo -e "${YELLOW}Limpando diretório de evidências anteriores...${NC}"
rm -f test-evidence/*.png
rm -f test-evidence/evidence-report.html

# Executar os testes
echo -e "${YELLOW}Executando testes...${NC}"
npx playwright test

# Verificar se os testes foram executados com sucesso
if [ $? -eq 0 ]; then
  echo -e "${GREEN}Testes executados com sucesso!${NC}"
else
  echo -e "${RED}Alguns testes falharam. Verifique o relatório para mais detalhes.${NC}"
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
