import { styled } from 'styled-components';

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  @media (max-width: 680px) { grid-template-columns: 1fr; }
`;
export const Card = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid #BDD7D1;
  background: var(--surface);
  color: var(--text);
  overflow-wrap: anywhere;
  line-height: 1.65;
  &:focus-within { border-color: var(--accent); }
`;
export const Cover = styled.div`
  aspect-ratio: 16 / 7;
  background: var(--tint-green);
  border-bottom: 1px solid #BDD7D1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: var(--petroleum);
  img { width: 100%; height: 100%; object-fit: cover; }
  svg { width: 44px; height: 44px; }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 24px;
    height: 3px;
    width: 48px;
    background: var(--petroleum);
  }
`;
export const Badge = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 3px 10px;
  border-radius: 4px;
  background: var(--navy);
  color: #FFFFFF;
  font-size: 0.75rem;
  font-weight: 600;
`;
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 14px;
  padding: 24px;
`;
export const TitleRepo = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--heading);
`;
export const Meta = styled.p`
  font-size: 0.85rem;
  strong { color: var(--heading); font-weight: 600; }
`;
export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  li {
    font-size: 0.75rem;
    padding: 3px 9px;
    border-radius: 4px;
    background: var(--tint-blue);
    color: var(--navy);
  }
`;
export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid var(--border);
  a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    color: var(--accent);
    font-size: 0.875rem;
    font-weight: 600;
    text-underline-offset: 4px;
  }
  a:hover { color: var(--accent-hover); }
`;
