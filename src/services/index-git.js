export async function getRepo({ signal } = {}) {
  const response = await fetch(
    'https://api.github.com/users/ThauanLK/repos?sort=updated&per_page=100',
    { signal, headers: { Accept: 'application/vnd.github+json' } },
  );
  if (!response.ok) throw new Error('Não foi possível carregar os projetos. Tente novamente mais tarde.');
  return response.json();
}
