import { test, expect } from '@playwright/test';

const githubRoute = 'https://api.github.com/users/ThauanLK/repos?*';
const repositories = [
  { id: 2, name: 'backend-demo', description: 'API para organizar tarefas.', language: 'Java', html_url: 'https://github.com/ThauanLK/backend-demo', homepage: 'https://example.com/demo' },
  { id: 1, name: 'Portfolio', description: 'Descrição original do GitHub', language: 'JavaScript', html_url: 'https://github.com/ThauanLK/Portfolio', homepage: '' },
  { id: 3, name: 'sem-descricao', description: null, language: null, html_url: 'https://github.com/ThauanLK/sem-descricao', homepage: 'javascript:alert(1)' },
];

test.beforeEach(async ({ page }) => {
  // Mantém os testes determinísticos, sem depender de fontes ou serviços externos.
  await page.route('https://fonts.googleapis.com/**', (route) => route.abort());
  await page.route('https://fonts.gstatic.com/**', (route) => route.abort());
  await page.route(githubRoute, (route) => route.fulfill({ json: repositories }));
});

test('renderiza a página sem erros e sem rolagem horizontal', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Thauan Corrêa', level: 1 })).toBeVisible();
  await expect(page.locator('#projetos article')).toHaveCount(3);
  await expect(page.locator('header img')).toBeVisible();
  await expect.poll(() => page.locator('header img').evaluate((img) => img.complete && img.naturalWidth > 0)).toBe(true);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(1);
  expect(errors).toEqual([]);
});

test('navega pelas seções e atualiza o menu ao rolar manualmente', async ({ page }) => {
  await page.goto('/');
  const navigation = page.getByRole('navigation', { name: 'Navegação principal' });
  for (const [name, id] of [['Sobre', 'sobre'], ['Currículo', 'curriculo'], ['Projetos', 'projetos'], ['Contato', 'contato']]) {
    const link = navigation.getByRole('link', { name, exact: true });
    await link.click();
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
    await expect(link).toHaveAttribute('aria-current', 'location');
    await expect.poll(async () => {
      const top = await page.locator(`#${id}`).evaluate((element) => element.getBoundingClientRect().top);
      const headerBottom = await page.locator('header').evaluate((element) => element.getBoundingClientRect().bottom);
      const atEnd = await page.evaluate(() => window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2);
      return top >= headerBottom - 1 && (top < 200 || (atEnd && top < page.viewportSize().height / 2));
    }).toBe(true);
  }
  await page.locator('#curriculo').evaluate((section) => section.scrollIntoView({ behavior: 'instant' }));
  await expect(navigation.getByRole('link', { name: 'Currículo', exact: true })).toHaveAttribute('aria-current', 'location');
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await expect(navigation.locator('[aria-current]')).toHaveCount(0);
});

test('abre uma âncora diretamente e mantém a seção ativa após recarregar', async ({ page }) => {
  await page.goto('/#curriculo');
  const link = page.getByRole('navigation').getByRole('link', { name: 'Currículo', exact: true });
  await expect(link).toHaveAttribute('aria-current', 'location');
  await page.reload();
  await expect(link).toHaveAttribute('aria-current', 'location');
});

test('tooltip da logo funciona com mouse, teclado e Escape', async ({ page }) => {
  await page.goto('/');
  const brand = page.getByRole('link', { name: 'Thauan Corrêa — início' });
  await expect(page.getByRole('tooltip')).toHaveCount(0);
  await brand.hover();
  await expect(page.getByRole('tooltip')).toHaveText('Thauan Corrêa');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('tooltip')).toHaveCount(0);
  await page.mouse.move(0, 0);
  await page.keyboard.press('Tab');
  await expect(brand).toBeFocused();
  await expect(page.getByRole('tooltip')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('tooltip')).toHaveCount(0);
});

test('expande e recolhe os detalhes de uma experiência pelo teclado', async ({ page }) => {
  await page.goto('/');
  const details = page.locator('#curriculo details').first();
  const summary = details.locator('summary');
  await expect(details.locator('ul')).not.toBeVisible();
  await summary.focus();
  await page.keyboard.press('Enter');
  await expect(details).toHaveAttribute('open', '');
  await expect(details.locator('ul')).toBeVisible();
  expect(await details.locator('ul li').count()).toBeGreaterThan(0);
  await expect(summary).toContainText('Ocultar detalhes');
  await page.keyboard.press('Space');
  await expect(details).not.toHaveAttribute('open');
});

test('baixa um PDF válido a partir da apresentação', async ({ page, request }) => {
  await page.goto('/');
  const link = page.locator('#apresentacao').getByRole('link', { name: 'Baixar currículo' });
  const pdf = await request.get(await link.getAttribute('href'));
  expect(pdf.ok()).toBe(true);
  expect((await pdf.body()).subarray(0, 5).toString()).toBe('%PDF-');
  const downloadPromise = page.waitForEvent('download');
  await link.click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('Curriculo-Thauan.pdf');
  expect(await download.failure()).toBeNull();
});

test('exibe projetos personalizados, links e descrição alternativa', async ({ page }) => {
  await page.goto('/');
  const cards = page.locator('#projetos article');
  await expect(cards).toHaveCount(3);
  await expect(cards.first()).toContainText('Portfólio pessoal');
  await expect(cards.first()).toContainText('Em destaque');
  await expect(cards.first()).not.toContainText('Descrição original do GitHub');
  const api = cards.filter({ has: page.getByRole('heading', { name: 'backend-demo', exact: true }) });
  await expect(api).toContainText('Java');
  await expect(api.getByRole('link', { name: 'Abrir projeto backend-demo' })).toHaveAttribute('href', 'https://example.com/demo');
  const fallback = cards.filter({ has: page.getByRole('heading', { name: 'sem-descricao', exact: true }) });
  await expect(fallback).toContainText('Código e documentação disponíveis no repositório.');
  await expect(fallback.getByRole('link')).toHaveCount(1);
});

test('mostra carregamento enquanto aguarda a API', async ({ page }) => {
  let release;
  const pending = new Promise((resolve) => { release = resolve; });
  await page.route(githubRoute, async (route) => {
    await pending;
    await route.fulfill({ json: repositories });
  });
  try {
    await page.goto('/');
    await expect(page.getByRole('status')).toHaveText('Carregando projetos…');
  } finally { release(); }
  await expect(page.locator('#projetos article')).toHaveCount(3);
  await expect(page.getByRole('status')).toHaveCount(0);
});

test('informa quando não há repositórios públicos', async ({ page }) => {
  await page.route(githubRoute, (route) => route.fulfill({ json: [] }));
  await page.goto('/');
  await expect(page.locator('#projetos')).toContainText('Nenhum projeto público encontrado.');
  await expect(page.locator('#projetos article')).toHaveCount(0);
});

for (const failure of ['http', 'network']) {
  test(`mantém a página utilizável em caso de falha ${failure} do GitHub`, async ({ page }) => {
    await page.route(githubRoute, (route) => failure === 'http'
      ? route.fulfill({ status: 403, json: { message: 'API rate limit exceeded' } })
      : route.abort('failed'));
    await page.goto('/');
    await expect(page.getByRole('alert')).toContainText('Não foi possível carregar os projetos');
    await expect(page.locator('#projetos').getByRole('link')).toHaveAttribute('href', 'https://github.com/ThauanLK');
    await expect(page.locator('#contato').getByRole('link')).toHaveAttribute('href', /linkedin\.com/);
  });
}

test('mantém redes fixas e links externos protegidos', async ({ page }) => {
  await page.goto('/');
  const social = page.getByRole('complementary', { name: 'Redes sociais' });
  await expect(social).toHaveCSS('position', 'fixed');
  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' }));
  await expect(social).toBeInViewport();
  const box = await social.boundingBox();
  const viewport = page.viewportSize();
  expect(viewport.width - box.x - box.width).toBeLessThanOrEqual(24);
  expect(viewport.height - box.y - box.height).toBeLessThanOrEqual(24);
  for (const link of await page.locator('a[target="_blank"]').all()) {
    await expect(link).toHaveAttribute('rel', /noopener/);
    await expect(link).toHaveAttribute('rel', /noreferrer/);
  }
});

test('respeita preferência por movimento reduzido', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.locator('html')).toHaveCSS('scroll-behavior', 'auto');
  const socialLink = page.getByRole('link', { name: 'LinkedIn de Thauan', exact: true });
  await socialLink.focus();
  await expect(socialLink.locator('.linkedin-dot')).toHaveCSS('animation-name', 'none');
  const button = page.getByRole('link', { name: 'Explorar projetos' });
  await button.focus();
  await expect(button).toHaveCSS('transform', 'none');
});

test('mostra página não encontrada e permite voltar ao início', async ({ page }) => {
  await page.goto('/pagina-inexistente');
  await expect(page.getByRole('heading', { name: 'Página não encontrada' })).toBeVisible();
  await page.getByRole('link', { name: 'Voltar ao início' }).click();
  await expect(page.getByRole('heading', { name: 'Thauan Corrêa', level: 1 })).toBeVisible();
});
