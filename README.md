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
npm test
npm run build
npm run preview
npm audit
```

Os testes usam o runner nativo do Node e cobrem a integração com GitHub sem depender da rede. O build gera `dist/`. A CI executa instalação reproduzível, testes, build e auditoria das dependências de produção.

## Organização

- `src/index.jsx`: inicialização do React e rotas.
- `src/views/Home/`: página principal, estilos e componentes locais.
- `src/data/profile.js`: biografia, formação e experiência; revisar as datas antigas antes de publicar.
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
