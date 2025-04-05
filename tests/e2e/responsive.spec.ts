import { test, expect } from '@playwright/test';

test.describe('Responsividade', () => {
  test('deve exibir o menu mobile em telas pequenas', async ({ page }) => {
    // Definir o tamanho da tela para mobile
    await page.setViewportSize({ width: 375, height: 667 });

    await page.goto('/');

    // Verificar se o botão do menu mobile está visível
    const menuButton = page.locator('button >> svg').first();
    await expect(menuButton).toBeVisible();

    // Capturar evidência
    await page.screenshot({ path: 'test-evidence/mobile-menu-closed.png' });

    // Clicar no botão do menu
    await menuButton.click();

    // Aguardar um momento para o menu expandir
    await page.waitForTimeout(500);

    // Verificar se algum elemento do menu expandido está visível
    const expandedMenu = page.locator('text=Preços, text=Sobre, text=Como Funciona').first();
    await expect(expandedMenu).toBeVisible();

    // Capturar evidência
    await page.screenshot({ path: 'test-evidence/mobile-menu-open.png' });
  });

  test('deve exibir o layout desktop em telas grandes', async ({ page }) => {
    // Definir o tamanho da tela para desktop
    await page.setViewportSize({ width: 1280, height: 800 });

    await page.goto('/');

    // Verificar se a navegação desktop está visível
    const desktopNav = page.locator('text=Preços').first();
    await expect(desktopNav).toBeVisible();

    // Verificar se o botão do menu mobile está oculto ou não visível
    // Usamos uma abordagem diferente, verificando se o elemento com a classe md:hidden está presente
    const mobileMenuVisible = await page.locator('.md\\:hidden button').isVisible();
    expect(mobileMenuVisible).toBeFalsy();

    // Capturar evidência
    await page.screenshot({ path: 'test-evidence/desktop-layout.png' });
  });

  test('deve adaptar o layout da página inicial para diferentes tamanhos de tela', async ({ page }) => {
    // Testar em tamanho mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.screenshot({ path: 'test-evidence/home-mobile.png', fullPage: true });

    // Testar em tamanho tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    await page.screenshot({ path: 'test-evidence/home-tablet.png', fullPage: true });

    // Testar em tamanho desktop
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    await page.screenshot({ path: 'test-evidence/home-desktop.png', fullPage: true });
  });

  test('deve adaptar o layout da página de preços para diferentes tamanhos de tela', async ({ page }) => {
    // Testar em tamanho mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/pricing');
    await page.screenshot({ path: 'test-evidence/pricing-mobile.png', fullPage: true });

    // Testar em tamanho tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/pricing');
    await page.screenshot({ path: 'test-evidence/pricing-tablet.png', fullPage: true });

    // Testar em tamanho desktop
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/pricing');
    await page.screenshot({ path: 'test-evidence/pricing-desktop.png', fullPage: true });
  });
});
