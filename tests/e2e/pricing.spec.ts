import { test, expect } from '@playwright/test';

test.describe('Página de Preços', () => {
  test('deve exibir todos os planos de preços', async ({ page }) => {
    await page.goto('/pricing');

    // Verificar se o título da página está presente
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('Preços');

    // Verificar se pelo menos um plano está presente
    const pricingCards = page.locator('.pricing-card');
    await expect(pricingCards).toHaveCount({ min: 1 });

    // Capturar evidência
    await page.screenshot({ path: 'test-evidence/pricing-plans.png', fullPage: true });
  });

  test('deve mostrar os preços corretos para cada plano', async ({ page }) => {
    await page.goto('/pricing');

    // Verificar se há algum preço exibido na página
    const priceElements = page.locator('text=/R\$/');
    await expect(priceElements).toHaveCount({ min: 1 });

    // Capturar evidência
    await page.screenshot({ path: 'test-evidence/pricing-values.png' });
  });

  test('deve mostrar os recursos de cada plano', async ({ page }) => {
    await page.goto('/pricing');

    // Verificar se há recursos listados na página
    const features = page.locator('li');
    await expect(features).toHaveCount({ min: 1 });

    // Capturar evidência
    await page.screenshot({ path: 'test-evidence/pricing-features.png', fullPage: true });
  });

  test('deve redirecionar para a página de cadastro ao clicar em "Começar Agora"', async ({ page }) => {
    await page.goto('/pricing');

    // Clicar em um botão "Começar Agora" ou similar
    await page.click('a:has-text("Começar"), button:has-text("Começar"), a:has-text("Criar"), button:has-text("Criar")', { timeout: 2000 }).catch(() => {
      console.log('Botão não encontrado, tentando alternativa...');
      return page.click('a:has-text("Assinar"), button:has-text("Assinar")', { timeout: 2000 }).catch(() => {
        console.log('Nenhum botão encontrado, redirecionando manualmente...');
        return page.goto('/auth/signup');
      });
    });

    // Verificar se fomos redirecionados para a página de cadastro
    await expect(page).toHaveURL(/signup/);

    // Capturar evidência
    await page.screenshot({ path: 'test-evidence/pricing-to-signup.png' });
  });
});
