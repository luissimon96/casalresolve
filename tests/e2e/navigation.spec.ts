import { test, expect } from '@playwright/test';

test.describe('Navegação básica', () => {
  test('deve navegar para a página inicial', async ({ page }) => {
    await page.goto('/');

    // Verificar se o título da página está correto
    await expect(page).toHaveTitle(/CasalResolve/);

    // Verificar se o conteúdo principal está presente
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();

    // Capturar evidência
    await page.screenshot({ path: 'test-evidence/home-page.png', fullPage: true });
  });

  test('deve navegar para a página de preços', async ({ page }) => {
    await page.goto('/');

    // Clicar no link de preços na barra de navegação
    await page.click('text=Preços');

    // Verificar se estamos na página de preços
    await expect(page).toHaveURL(/pricing/);

    // Verificar se o conteúdo da página de preços está presente
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();

    // Capturar evidência
    await page.screenshot({ path: 'test-evidence/pricing-page.png', fullPage: true });
  });

  test('deve navegar para a página Como Funciona', async ({ page }) => {
    await page.goto('/');

    // Clicar no link Como Funciona na barra de navegação
    await page.click('text=Como Funciona');

    // Verificar se estamos na página Como Funciona
    await expect(page).toHaveURL(/how-it-works/);

    // Verificar se o conteúdo da página está presente
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();

    // Capturar evidência
    await page.screenshot({ path: 'test-evidence/how-it-works-page.png', fullPage: true });
  });

  test('deve navegar para a página Sobre', async ({ page }) => {
    await page.goto('/');

    // Clicar no link Sobre na barra de navegação
    await page.click('text=Sobre');

    // Verificar se estamos na página Sobre
    await expect(page).toHaveURL(/about/);

    // Verificar se o conteúdo da página está presente
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();

    // Capturar evidência
    await page.screenshot({ path: 'test-evidence/about-page.png', fullPage: true });
  });
});
