# Portfólio — Thauan Corrêa

Portfólio pessoal em React, com experiência profissional, currículo e projetos públicos do GitHub. Hospedagem na Vercel.

## Desenvolvimento

Use Node 24 (arquivo `.nvmrc`) e npm. Não misture npm e Yarn: o lockfile oficial é `package-lock.json`.

```sh
nvm use
npm ci
npm run dev
```

O endereço local aparece no terminal. Comandos de validação:

```sh
npm run test:unit
npm run build
npm run preview
npm audit
```

O build gera `dist/`. A CI executa instalação reproduzível, testes unitários e testes de navegador sobre o build de produção, além da auditoria das dependências de produção.

## Testes automatizados

Na primeira execução, instale o navegador do Playwright:

```sh
npx playwright install chromium
# Em Linux/CI, se faltarem bibliotecas de sistema:
npx playwright install --with-deps chromium
```

```sh
npm test                # Unitários + navegador (desktop e celular)
npm run test:unit       # Testes rápidos, sem navegador
npm run test:e2e        # Build de produção + testes no Chromium
npm run test:e2e:ui     # Interface interativa do Playwright
npm run test:report     # Relatório HTML da última execução
```

O Playwright inicia e encerra seu próprio servidor em `http://127.0.0.1:4174`; deixe essa porta livre. O servidor de desenvolvimento habitual pode continuar rodando em outra porta.

- **Unitários:** seleção da seção ativa e consulta ao GitHub (sucesso, erro HTTP, falha de rede e lista vazia).
- **Navegador:** renderização, largura responsiva, menu e âncoras, tooltip, detalhes das experiências pelo teclado, download real do PDF, cards de projetos, carregamento e erros da API, redes fixas, preferência por movimento reduzido e página 404.
- **Ambientes:** Chromium desktop e emulação de celular Pixel 7. Não substituem validação em dispositivos físicos, Safari ou Firefox.

Os testes usam respostas simuladas do GitHub e bloqueiam fontes externas para não depender desses serviços. Eles verificam o comportamento da aplicação, não a disponibilidade do GitHub, LinkedIn ou Vercel. O PDF e os demais assets locais são servidos pelo build real.

Em caso de falha, capturas de tela e traces ficam em `test-results/`; o relatório fica em `playwright-report/`. A CI anexa esses arquivos por sete dias. Esses diretórios não são versionados.

Referência: [servidor de testes do Playwright](https://playwright.dev/docs/test-webserver).

## Organização

- `src/index.jsx`: inicialização do React e rotas.
- `src/views/Home/`: página principal, estilos e componentes locais.
- `src/data/profile.js`: biografia, formação e experiência. Veja [como adicionar atividades acadêmicas](docs/formacao.md).
- `src/services/index-git.js`: consulta ao GitHub, com tratamento de erro e cancelamento.
- `src/documents/`: currículo em PDF; substituir pela versão atual.
- `src/constants/`: estilos globais e cores.
- `public/`: arquivos estáticos.

O contato usa o LinkedIn. O formulário anterior não enviava mensagens; foi removido. Uma futura integração de envio precisa de backend/provedor, validação, proteção contra abuso e feedback de sucesso/erro. Segredos não devem ficar em variáveis `VITE_*`, pois elas são públicas no navegador.

## Vercel e domínio próprio

`vercel.json` configura Vite, saída `dist` e fallback para rotas da SPA, incluindo acesso direto a `/lucas`. No painel do projeto, use Node 24 e confira se não há configuração antiga de Create React App ou saída `build` sobrescrevendo o projeto. Valide primeiro um Preview Deployment.

Para usar domínio próprio, registre o domínio, adicione-o em **Settings → Domains** do projeto e configure no registrador os registros DNS indicados pela Vercel. Escolha um endereço principal e redirecione a variante com/sem `www`. Não é necessário trocar a hospedagem.

Referências: [Vite na Vercel](https://vercel.com/docs/frameworks/frontend/vite) e [configuração de domínio](https://vercel.com/docs/domains/working-with-domains/add-a-domain).

## Manutenção

O Dependabot agrupa atualizações minor/patch semanalmente; mudanças major continuam separadas para revisão. Consulte [o diagnóstico e próximos passos](docs/modernizacao.md) para tratar os PRs antigos e evoluir o conteúdo.
