import { before, after, test } from 'node:test';
import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';

let server;
let AcademicActivities;
before(async () => {
  server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false } });
  ({ AcademicActivities } = await server.ssrLoadModule('/src/views/Home/components/ResumeTimeline/index.jsx'));
});
after(async () => { await server?.close(); });

const render = (props) => renderToStaticMarkup(createElement(AcademicActivities, props));

test('formações sem atividades não exibem uma lista vazia', () => {
  assert.equal(render({}), '');
  assert.equal(render({ activities: [] }), '');
});

test('exibe atividades com descrição opcional e preserva a ordem', () => {
  const html = render({ activities: [
    { title: 'Monitoria', description: 'Apoio às aulas de programação.' },
    { title: 'Projeto de extensão', featured: false },
  ] });
  assert.ok(html.includes('Apoio às aulas de programação.'));
  assert.ok(html.indexOf('Monitoria') < html.indexOf('Projeto de extensão'));
  assert.ok(!html.includes('Em destaque'));
});

test('destaca apenas atividades explicitamente marcadas', () => {
  const html = render({ activities: [
    { title: 'Pesquisa', featured: true },
    { title: 'Monitoria' },
  ] });
  assert.equal(html.match(/Em destaque/g)?.length, 1);
  assert.ok(!html.includes('$featured'));
});
