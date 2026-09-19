import React from 'react';
import { styled } from 'styled-components';
import { currentStack, skillGroups } from '../../../../data/skills';

const CurrentFocus = styled.div`
  padding: 24px;
  margin-bottom: 28px;
  border: 1px solid #BDD7D1;
  border-left: 3px solid var(--petroleum);
  border-radius: 10px;
  background: var(--tint-green);
`;
const GroupTitle = styled.h4`
  color: var(--heading);
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 12px;
`;
const Caption = styled.p`
  color: var(--text);
  font-size: 0.875rem;
  margin-bottom: 16px;
`;
const Groups = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  @media (max-width: 800px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`;
const Group = styled.div`
  padding-top: 16px;
  border-top: 1px solid #CBD5E1;
  min-width: 0;
`;
const Skills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
const Skill = styled.li`
  padding: 7px 12px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--tint-blue);
  color: var(--heading);
  font-size: 0.875rem;
  line-height: 1.5;
`;
const CurrentSkill = styled(Skill)`
  background: var(--petroleum);
  border-color: var(--petroleum);
  color: #FFFFFF;
  font-weight: 500;
`;

export function EachLine() {
  return <>
    <CurrentFocus>
      <GroupTitle>Backend · foco atual</GroupTitle>
      <Skills aria-label="Tecnologias utilizadas atualmente">
        {currentStack.map((name) => <CurrentSkill key={name}>{name}</CurrentSkill>)}
      </Skills>
    </CurrentFocus>
    <Caption>Outros conhecimentos da minha trajetória</Caption>
    <Groups>
      {skillGroups.map(({ id, title, items }) => <Group key={id}>
        <GroupTitle id={`skills-${id}`}>{title}</GroupTitle>
        <Skills aria-labelledby={`skills-${id}`}>
          {items.map((name) => <Skill key={name}>{name}</Skill>)}
        </Skills>
      </Group>)}
    </Groups>
  </>;
}
