const fs = require('fs');
const path = require('path');

// Função para criar o relatório HTML
function generateEvidenceReport() {
  const evidenceDir = path.join(__dirname, '..', 'test-evidence');
  const outputFile = path.join(evidenceDir, 'evidence-report.html');
  
  // Verificar se o diretório de evidências existe
  if (!fs.existsSync(evidenceDir)) {
    console.error('Diretório de evidências não encontrado!');
    return;
  }
  
  // Obter a lista de arquivos de evidência
  const files = fs.readdirSync(evidenceDir)
    .filter(file => file.endsWith('.png'))
    .sort();
  
  if (files.length === 0) {
    console.error('Nenhuma evidência encontrada!');
    return;
  }
  
  // Agrupar as evidências por categoria
  const categories = {};
  
  files.forEach(file => {
    const category = file.split('-')[0];
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(file);
  });
  
  // Gerar o HTML
  let html = `
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relatório de Evidências de Testes - CasalResolve</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 20px;
        color: #333;
      }
      h1 {
        color: #8b5cf6;
        text-align: center;
        margin-bottom: 30px;
      }
      h2 {
        color: #6d28d9;
        border-bottom: 2px solid #e5e7eb;
        padding-bottom: 10px;
        margin-top: 30px;
      }
      .evidence-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
        margin-top: 20px;
      }
      .evidence-item {
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .evidence-item img {
        width: 100%;
        height: auto;
        display: block;
      }
      .evidence-caption {
        padding: 10px;
        background-color: #f9fafb;
        font-size: 14px;
      }
      .timestamp {
        text-align: center;
        margin-top: 40px;
        color: #6b7280;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <h1>Relatório de Evidências de Testes - CasalResolve</h1>
    <p>Este relatório contém capturas de tela dos testes end-to-end realizados na aplicação CasalResolve.</p>
  `;
  
  // Adicionar cada categoria e suas evidências
  Object.keys(categories).sort().forEach(category => {
    html += `
    <h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2>
    <div class="evidence-container">
    `;
    
    categories[category].forEach(file => {
      const caption = file.replace('.png', '').replace(/-/g, ' ');
      html += `
      <div class="evidence-item">
        <img src="${file}" alt="${caption}">
        <div class="evidence-caption">${caption}</div>
      </div>
      `;
    });
    
    html += `</div>`;
  });
  
  // Adicionar timestamp
  const now = new Date();
  html += `
    <div class="timestamp">
      Relatório gerado em: ${now.toLocaleDateString()} às ${now.toLocaleTimeString()}
    </div>
  </body>
  </html>
  `;
  
  // Salvar o arquivo HTML
  fs.writeFileSync(outputFile, html);
  console.log(`Relatório de evidências gerado em: ${outputFile}`);
}

// Executar a função
generateEvidenceReport();
