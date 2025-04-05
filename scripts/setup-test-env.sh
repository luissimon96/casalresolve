#!/bin/bash

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Configurando ambiente de testes...${NC}"

# Criar diretórios necessários
echo -e "Criando diretórios para testes e evidências..."
mkdir -p test-results/artifacts test-results/html-report test-evidence

# Verificar se o servidor está rodando
echo -e "Verificando se o servidor de desenvolvimento está rodando..."
curl -s http://localhost:3000 > /dev/null
if [ $? -eq 0 ]; then
  echo -e "${GREEN}Servidor já está rodando na porta 3000.${NC}"
else
  echo -e "${YELLOW}Servidor não está rodando. Iniciando servidor de desenvolvimento...${NC}"
  # Iniciar o servidor em segundo plano
  npm run dev &
  # Salvar o PID do servidor
  SERVER_PID=$!
  echo -e "Servidor iniciado com PID: ${SERVER_PID}"
  
  # Aguardar o servidor iniciar
  echo -e "Aguardando o servidor iniciar..."
  for i in {1..30}; do
    curl -s http://localhost:3000 > /dev/null
    if [ $? -eq 0 ]; then
      echo -e "${GREEN}Servidor iniciado com sucesso!${NC}"
      break
    fi
    echo -n "."
    sleep 1
  done
  
  # Verificar se o servidor iniciou
  curl -s http://localhost:3000 > /dev/null
  if [ $? -ne 0 ]; then
    echo -e "${RED}Falha ao iniciar o servidor. Verifique os logs.${NC}"
    exit 1
  fi
fi

echo -e "${GREEN}Ambiente de testes configurado com sucesso!${NC}"
