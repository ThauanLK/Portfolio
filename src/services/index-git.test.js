import { test, afterEach, mock } from 'node:test';
import assert from 'node:assert/strict';
import { getRepo } from './index-git.js';

afterEach(() => mock.restoreAll());

test('carrega repositórios ordenados e repassa o sinal de cancelamento', async () => {
  const repos = [{ id: 1, name: 'portfolio' }];
  const controller = new AbortController();
  mock.method(globalThis, 'fetch', async (url, options) => {
    assert.equal(new URL(url).searchParams.get('sort'), 'updated');
    assert.equal(options.signal, controller.signal);
    return { ok: true, json: async () => repos };
  });
  assert.deepEqual(await getRepo({ signal: controller.signal }), repos);
});

test('rejeita erros HTTP, incluindo limite da API', async () => {
  mock.method(globalThis, 'fetch', async () => ({ ok: false, status: 403 }));
  await assert.rejects(getRepo(), /Não foi possível carregar/);
});

test('propaga falhas de rede', async () => {
  mock.method(globalThis, 'fetch', async () => { throw new TypeError('offline'); });
  await assert.rejects(getRepo(), /offline/);
});

test('aceita lista vazia', async () => {
  mock.method(globalThis, 'fetch', async () => ({ ok: true, json: async () => [] }));
  assert.deepEqual(await getRepo(), []);
});
