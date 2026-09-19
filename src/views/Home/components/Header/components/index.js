import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 5;
`;
export const Container = styled.div`
  width: min(100%, 1080px);
  margin: 0 auto;
  padding: 12px 24px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  @media (max-width: 560px) { flex-direction: column; gap: 8px; }
`;
export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--heading);
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
`;
export const Logo = styled.img`
  width: 56px;
  height: 56px;
  object-fit: contain;
`;
export const LinksContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px 20px;
  @media (max-width: 560px) { gap: 4px 14px; }
`;
export const LinkHeader = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  color: var(--text);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  &:hover { color: var(--accent); }
`;
