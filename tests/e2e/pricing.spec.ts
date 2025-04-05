import { test, expect } from '@playwright/test';

test.describe('Página de Preços', () => {
  test('deve exibir todos os planos de preços', async ({ page }) => {
    await page.goto('/pricing');
    
    // Verificar se o título da página está presente
    const heading = page.locator('h1:has-text("Preços")');
    await expect(heading).toBeVisible();
    
    // Verificar se todos os planos estão presentes
    const freePlan = page.locator('h3:has-text("Gratuito")');
    const essentialPlan = page.locator('h3:has-text("Essencial")');
    const premiumPlan = page.locator('h3:has-text("Premium")');
    
    await expect(freePlan).toBeVisible();
    await expect(essentialPlan).toBeVisible();
    await expect(premiumPlan).toBeVisible();
    
    // Capturar evidência
    await page.screenshot({ path: 'test-evidence/pricing-plans.png', fullPage: true });
  });

  test('deve mostrar os preços corretos para cada plano', async ({ page }) => {
    await page.goto('/pricing');
    
    // Verificar os preços dos planos
    const freePlanPrice = page.locator('text=R$ 0');
    const essentialPlanPrice = page.locator('text=R$ 29,90');
    const premiumPlanPrice = page.locator('text=R$ 49,90');
    
    await expect(freePlanPrice).toBeVisible();
    await expect(essentialPlanPrice).toBeVisible();
    await expect(premiumPlanPrice).toBeVisible();
    
    // Capturar evidência
    await page.screenshot({ path: 'test-evidence/pricing-values.png' });
  });

  test('deve mostrar os recursos de cada plano', async ({ page }) => {
    await page.goto('/pricing');
    
    // Verificar os recursos do plano gratuito
    const freePlanFeatures = page.locator('h3:has-text("Gratuito")').locator('xpath=../..').locator('li');
    await expect(freePlanFeatures).toHaveCount(3);
    
    // Verificar os recursos do plano essencial
    const essentialPlanFeatures = page.locator('h3:has-text("Essencial")').locator('xpath=../..').locator('li');
    await expect(essentialPlanFeatures).toHaveCount(5);
    
    // Verificar os recursos do plano premium
    const premiumPlanFeatures = page.locator('h3:has-text("Premium")').locator('xpath=../..').locator('li');
    await expect(premiumPlanFeatures).toHaveCount(7);
    
    // Capturar evidência
    await page.screenshot({ path: 'test-evidence/pricing-features.png', fullPage: true });
  });

  test('deve redirecionar para a página de cadastro ao clicar em "Começar Agora"', async ({ page }) => {
    await page.goto('/pricing');
    
    // Clicar no botão "Começar Agora" do plano gratuito
    await page.click('h3:has-text("Gratuito")').locator('xpath=../..').locator('a:has-text("Começar Agora")');
    
    // Verificar se fomos redirecionados para a página de cadastro
    await expect(page).toHaveURL(/signup/);
    
    // Capturar evidência
    await page.screenshot({ path: 'test-evidence/pricing-to-signup.png' });
  });
});
