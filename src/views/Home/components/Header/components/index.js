import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  background: var(--surface);
  border-bottom: 2px solid var(--petroleum);
  box-shadow: 0 4px 16px rgb(15 23 42 / 8%);
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
  position: relative;
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
export const LogoTooltip = styled.span`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  padding: 8px 12px;
  border-radius: 6px;
  background: var(--navy);
  color: #FFFFFF;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.5;
  box-shadow: 0 4px 12px rgb(15 23 42 / 15%);
  @media (max-width: 560px) { left: 50%; transform: translateX(-50%); }
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
  position: relative;
  padding: 0 6px;
  border-radius: 6px;
  transition: color 300ms ease, background-color 300ms ease, transform 300ms ease;

  &::after {
    content: '';
    position: absolute;
    left: 6px;
    right: 6px;
    bottom: 3px;
    height: 2px;
    border-radius: 2px;
    background: var(--accent);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 300ms ease;
  }
  &:hover, &:focus-visible {
    color: var(--accent);
    background: var(--tint-green);
  }
  &:hover::after, &:focus-visible::after { transform: scaleX(1); }
  &[aria-current='location'] {
    color: var(--accent-hover);
    background: var(--tint-green);
    transform: scale(1.04);
  }
  &[aria-current='location']::after { transform: scaleX(1); }
`;
