# Personalizar os projetos

Edite `src/data/projects.js`. Cada chave deve ser o nome exato de um repositório retornado pelo GitHub (respeitando maiúsculas/minúsculas). A configuração personaliza repositórios existentes; ela não cria projetos novos e depende do carregamento da API.

Sugestão: destacar de três a seis projetos representativos. Para cada um, escrever o problema resolvido, sua contribuição e um resultado concreto. Não preencher resultados ou métricas sem evidência.

| Campo | O que editar |
| --- | --- |
| `title` | Nome legível para o visitante |
| `description` | Problema, público e solução em duas frases |
| `technologies` | Lista das tecnologias realmente usadas |
| `role` | Sua participação, especialmente em trabalhos em equipe |
| `result` | Resultado real, aprendizado ou melhoria comprovada |
| `image` | Caminho da captura de tela, por exemplo `/projects/exemplo.webp` |
| `imageAlt` | Descrição breve da captura |
| `demoUrl` | URL pública da aplicação; use `''` para ocultar o link |
| `featured` | `true` para selo e prioridade na lista |
| `order` | Ordem dentro do grupo (destacados ou demais); menor vem antes |
| `hidden` | `true` para ocultar exercícios ou repositórios pouco relevantes |

Coloque capturas em `public/projects/`. Prefira WebP em aproximadamente 1200 × 525 pixels, pois a capa usa proporção 16:7 e recorta imagens para preencher o espaço. Sem imagem, o card apresenta um símbolo de código.

Exemplo (substitua a chave e o conteúdo por um projeto real):

```js
'NomeExatoNoGitHub': {
  title: 'Nome do projeto',
  description: 'Qual problema ele resolve e para quem foi desenvolvido.',
  technologies: ['Java', 'Spring Boot'],
  role: 'Desenvolvimento da API e dos testes',
  result: 'Descreva uma entrega ou aprendizado real.',
  image: '/projects/exemplo.webp',
  imageAlt: 'Tela principal do projeto',
  demoUrl: 'https://exemplo.com',
  featured: true,
  order: 2,
},
```

Sem personalização, nome, descrição, linguagem e link de demonstração são obtidos do GitHub. O link do código sempre vem do repositório. Projetos destacados aparecem primeiro; os demais mantêm a ordem de atualização do GitHub, a menos que `order` seja definido.
