import React from 'react';
import { projectDetails } from '../../../../data/projects';
import { CardContainer, Card, TitleRepo, Cover, Badge, CardBody, Meta, Tags, Actions } from './styles';

function webUrl(value) {
  try {
    const url = new URL(value);
    return ['https:', 'http:'].includes(url.protocol) ? url.href : null;
  } catch { return null; }
}

export default function ListOfCards({ repos }) {
  const projects = repos
    .map((repo) => ({ ...repo, details: projectDetails[repo.name] ?? {} }))
    .filter(({ details }) => !details.hidden)
    .sort((a, b) => Number(Boolean(b.details.featured)) - Number(Boolean(a.details.featured))
      || (a.details.order ?? Infinity) - (b.details.order ?? Infinity));

  if (!projects.length) return <p>Nenhum projeto selecionado para exibição.</p>;

  return <CardContainer>{projects.map((repo) => {
    const { details } = repo;
    const title = details.title ?? repo.name;
    const technologies = details.technologies ?? (repo.language ? [repo.language] : []);
    const demoUrl = webUrl(details.demoUrl ?? repo.homepage);
    return (
      <Card key={repo.id}>
        <Cover>
          {details.image ? <img src={details.image} alt={details.imageAlt ?? `Prévia de ${title}`} loading="lazy" /> : (
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="m16 14-10 10 10 10m16-20 10 10-10 10M28 8l-8 32" />
            </svg>
          )}
          {details.featured && <Badge>Em destaque</Badge>}
        </Cover>
        <CardBody>
          <TitleRepo>{title}</TitleRepo>
          <p>{details.description ?? repo.description ?? 'Código e documentação disponíveis no repositório.'}</p>
          {details.role && <Meta><strong>Minha atuação:</strong> {details.role}</Meta>}
          {details.result && <Meta><strong>Resultado:</strong> {details.result}</Meta>}
          {technologies.length > 0 && <Tags aria-label="Tecnologias">{technologies.map((tech) => <li key={tech}>{tech}</li>)}</Tags>}
          <Actions>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" aria-label={`Ver código de ${title}`}>Ver código ↗</a>
            {demoUrl && <a href={demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Abrir projeto ${title}`}>Abrir projeto ↗</a>}
          </Actions>
        </CardBody>
      </Card>
    );
  })}</CardContainer>;
}
