import React from 'react';
import { styled } from 'styled-components';
import ProgramLanguages from './ProgramLanguages';

const Skills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const Skill = styled.li`
  padding: 8px 14px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--tint-green);
  color: var(--accent-hover);
  font-size: 0.875rem;
  line-height: 1.5;
`;

export function EachLine() {
  return <Skills aria-label="Conhecimentos">
    {ProgramLanguages.map(({ name }) => <Skill key={name}>{name}</Skill>)}
  </Skills>;
}
