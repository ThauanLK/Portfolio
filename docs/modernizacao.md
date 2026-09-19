# Diagnóstico e evolução

## O que foi encontrado

A base usava React 16, Create React App 3, Material UI 4 e dois lockfiles. Havia pacotes não utilizados (download e PDF, por exemplo), um README genérico e ausência de CI. O formulário só registrava dados no console e limpava os campos. A consulta ao GitHub criava uma Promise que nunca concluía e não comunicava falhas ao visitante. A comparação `repos === []` nunca identificava uma lista vazia.

## Mudanças desta migração

- React 19 com `createRoot`, React Router 7, styled-components 6 e Vite 8.
- Remoção do CRA e dependências sem uso. Fetch nativo substitui Axios; um elemento `meter` substitui a dependência de Material UI usada apenas para notas.
- Apresentação estática substitui a biblioteca antiga de digitação.
- Arquivos com JSX usam extensão `.jsx`. Dados profissionais ficam em `src/data/profile.js`.
- Projetos com links, estado de carregamento, erro e lista vazia; cancelamento ao desmontar a página.
- Contato por LinkedIn, metadados em português, foco visível, respeito à preferência por movimento reduzido e ajustes de largura para telas menores.
- Configuração Vercel, CI e Dependabot; testes da consulta ao GitHub.

A migração mantém a maior parte da organização visual original. Não equivale a um redesign completo nem a uma atualização de todas as informações profissionais.

## PRs abertos

Consulta à API pública do GitHub em 19/09/2026: 20 PRs, todos com títulos de atualização de dependências.

| PR | Pacote(s) |
| --- | --- |
| #26 | json5 |
| #25 | express |
| #24 | qs |
| #23 | decode-uri-component |
| #22 | loader-utils / react-scripts |
| #21 | terser |
| #20 | eventsource |
| #19 | async |
| #18 | url-parse |
| #16 | follow-redirects |
| #15 | ajv |
| #12 | tmpl |
| #11 | path-parse |
| #10 | merge-deep |
| #9 | dns-packet |
| #8 | hosted-git-info |
| #6 | ssri |
| #5 | elliptic |
| #4 | ini |
| #3 | http-proxy |

[Lista de PRs](https://github.com/ThauanLK/Portfolio/pulls).

Conferência do novo `package-lock.json`: nenhum dos pacotes listados acima permanece instalado. Portanto, os 20 PRs ficam superados por esta migração quando ela for integrada.

Não aplicar esses PRs em lote sobre o lockfile novo. Depois de integrar e validar a migração na branch principal, conferir a árvore instalada e fechar os PRs cujo pacote foi removido ou cuja correção já está incorporada, citando a migração. Nenhum PR foi alterado ou fechado nesta revisão local.

## Prioridades para o portfólio de analista

1. **Conteúdo atual:** confirmar cargo preferido (júnior/pleno), empresas, datas, responsabilidades, formação e PDF. Os períodos “Atualmente” herdados não foram confirmados.
2. **Projetos selecionados:** destacar de três a seis trabalhos com problema, sua contribuição, decisões técnicas, resultado e demonstração. A lista automática do GitHub é um complemento; não substitui estudos de caso.
3. **Conhecimentos com evidência:** substituir notas subjetivas por exemplos de uso das tecnologias. Hospedar ícones localmente para evitar URLs antigas quebradas.
4. **Componentes por seção:** conforme o conteúdo crescer, extrair Apresentação, Experiência, Projetos e Contato da Home. Manter componentes exclusivos junto da página e compartilhar apenas os realmente reutilizados.
5. **Revisão visual e acessibilidade:** validar em celular e desktop, teclado, contraste, imagens e currículo. Decidir se a rota experimental `/lucas` ainda faz sentido.
6. **Domínio e apresentação social:** após escolher o domínio, configurar canonical, Open Graph e imagem de compartilhamento com a URL definitiva.

TypeScript pode ser introduzido gradualmente quando houver modelos de dados mais ricos. Não é requisito para publicar esta migração.

## Validação local

- Build de produção concluído com Vite 8.
- Quatro cenários da integração GitHub aprovados: sucesso, erro HTTP, falha de rede e lista vazia.
- Renderização da Home verificada com React no servidor, incluindo título profissional, carregamento, contato e download.
- `npm audit`: nenhuma vulnerabilidade reportada na árvore atual, incluindo ferramentas de desenvolvimento.
- Não foi feita inspeção visual em navegador nem deploy na Vercel. Validar responsividade, navegação direta e links no Preview Deployment antes da produção.
