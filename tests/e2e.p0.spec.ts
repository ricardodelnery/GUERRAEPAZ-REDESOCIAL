import { test, expect } from '@playwright/test';

test('Home 200 e links principais', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Guerra/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /entrar/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /dashboard/i })).toBeVisible();
});

test('/entrar e /dashboard respondem HTML', async ({ page }) => {
  await page.goto('/entrar');
  await expect(page).toHaveTitle(/Guerra|Entrar/i);
  await page.goto('/dashboard');
  await expect(page).toHaveTitle(/Guerra|Dashboard/i);
});

test('API /api/dossie retorna JSON', async ({ request }) => {
  const res = await request.get('/api/dossie?limit=2');
  expect(res.ok()).toBeTruthy();
  const data = await res.json();
  expect(data).toHaveProperty('ok', true);
  expect(Array.isArray(data.items)).toBeTruthy();
});
