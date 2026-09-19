import { styled } from 'styled-components';

export const GroupTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 36px 0 24px;
  color: var(--heading);
  font-weight: 600;
  font-size: 1.1rem;
  svg { color: var(--accent); flex-shrink: 0; }
`;
export const Timeline = styled.ol`
  margin-left: 9px;
  border-left: 2px solid #BDD7D1;
  padding: 0 0 0 28px;
  @media (max-width: 600px) { padding-left: 18px; }
`;
export const Entry = styled.li`
  position: relative;
  padding-bottom: 20px;
  &:last-child { padding-bottom: 0; }
`;
export const Marker = styled.span`
  position: absolute;
  left: -36px;
  top: 27px;
  width: 14px;
  height: 14px;
  border: 3px solid var(--background);
  border-radius: 50%;
  background: var(--petroleum);
  box-shadow: 0 0 0 1px #BDD7D1;
  @media (max-width: 600px) { left: -26px; }
`;
export const Card = styled.div`
  padding: 24px;
  border: 1px solid #CCD8E4;
  border-radius: 12px;
  background: var(--tint-blue);
  transition: transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease;
  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgb(15 23 42 / 8%);
      border-color: var(--petroleum);
    }
  }
  @media (prefers-reduced-motion: reduce) { &:hover { transform: none; } }
  @media (max-width: 600px) { padding: 20px; }
`;
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  @media (max-width: 850px) { flex-direction: column; gap: 12px; }
`;
export const Heading = styled.h4`
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.5;
  color: var(--heading);
`;
export const Organization = styled.p`
  margin-top: 5px;
  color: var(--accent-hover);
  font-size: 0.9rem;
  line-height: 1.6;
`;
export const Period = styled.p`
  flex-shrink: 0;
  max-width: 100%;
  padding: 5px 10px;
  border: 1px solid #CCD8E4;
  border-radius: 6px;
  background: var(--surface);
  color: var(--text);
  font-size: 0.75rem;
  line-height: 1.5;
`;
export const Responsibilities = styled.ul`
  margin-top: 20px;
  padding-left: 18px;
  color: var(--text);
  font-size: 0.95rem;
  line-height: 1.8;
  li { list-style: disc; margin-bottom: 6px; }
  li::marker { color: var(--petroleum); }
`;
export const Technologies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
  li {
    padding: 4px 10px;
    border-radius: 5px;
    background: var(--tint-green);
    border: 1px solid #BDD7D1;
    color: var(--accent-hover);
    font-size: 0.75rem;
  }
`;
