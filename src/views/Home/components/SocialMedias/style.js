import { styled } from 'styled-components';

export const Link = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  color: var(--heading);
  &:hover, &:focus-visible { color: var(--accent); background: var(--background); }
  &:hover .octo-arm, &:focus-visible .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
  @keyframes octocat-wave {
    0%, 100% { transform: rotate(0); }
    20%, 60% { transform: rotate(-25deg); }
    40%, 80% { transform: rotate(10deg); }
  }
`;
export const Main = styled.aside`
  position: fixed;
  right: max(16px, env(safe-area-inset-right));
  bottom: max(16px, env(safe-area-inset-bottom));
  z-index: 10;
  padding: 6px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
  box-shadow: 0 4px 20px rgb(15 23 42 / 8%);
`;
export const Positing = styled.div`display: flex; gap: 4px;`;
