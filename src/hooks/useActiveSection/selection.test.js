import { test } from 'node:test';
import assert from 'node:assert/strict';
import { selectActiveSection } from './selection.js';

test('não destaca um item do menu enquanto a apresentação está em foco', () => {
  assert.equal(selectActiveSection([{ id: 'sobre', top: 500 }], 180), null);
});

test('mantém a seção atual durante seções longas e muda na linha de ativação', () => {
  const sections = [{ id: 'sobre', top: -900 }, { id: 'curriculo', top: -300 }, { id: 'projetos', top: 181 }];
  assert.equal(selectActiveSection(sections, 180), 'curriculo');
  sections[2].top = 180;
  assert.equal(selectActiveSection(sections, 180), 'projetos');
  sections[2].top = 190;
  assert.equal(selectActiveSection(sections, 180), 'curriculo');
});

test('destaca contato no fim da página mesmo quando a última seção é curta', () => {
  assert.equal(selectActiveSection([{ id: 'projetos', top: -800 }, { id: 'contato', top: 400 }], 180, true), 'contato');
});

test('não seleciona seções inexistentes em outras rotas', () => {
  assert.equal(selectActiveSection([], 180, true), null);
});
