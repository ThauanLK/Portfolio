import { styled } from 'styled-components';

export const ContactSection = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  align-items: center;
  gap: 48px;
  margin-top: 48px;
  padding: 48px;
  background: var(--tint-green);
  border: 1px solid #BDD7D1;
  border-top: 4px solid var(--petroleum);
  border-radius: 18px;
  @media (max-width: 800px) { grid-template-columns: 1fr; gap: 28px; padding: 32px; }
  @media (max-width: 480px) { padding: 28px 20px; }
`;
export const Intro = styled.div`min-width: 0;`;
export const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--petroleum);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  &::before { content: ''; width: 24px; height: 2px; background: currentColor; }
`;
export const Heading = styled.h2`
  margin: 16px 0;
  color: var(--heading);
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  letter-spacing: -0.035em;
  font-weight: 600;
  line-height: 1.2;
`;
export const Description = styled.p`
  max-width: 45ch;
  color: var(--text);
  line-height: 1.8;
  font-size: 0.95rem;
`;
export const ContactCard = styled.div`
  min-width: 0;
  padding: 28px;
  background: var(--surface);
  border: 1px solid #BDD7D1;
  border-radius: 12px;
  @media (max-width: 480px) { padding: 20px; }
`;
export const Channel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
  color: var(--petroleum);
  font-size: 0.85rem;
  font-weight: 600;
`;
export const ChannelIcon = styled.span`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid #BDD7D1;
  border-radius: 8px;
`;
export const CardTitle = styled.h3`
  color: var(--navy);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 6px;
`;
export const CardText = styled.p`
  color: var(--text);
  font-size: 0.85rem;
  line-height: 1.7;
`;
export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 48px;
  margin-top: 24px;
  padding: 12px 16px;
  background: var(--petroleum);
  color: #FFFFFF;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 350ms ease, transform 350ms ease, box-shadow 350ms ease;
  svg { flex-shrink: 0; }
  &:hover, &:focus-visible {
    background: var(--accent-hover);
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgb(15 118 110 / 16%);
  }
  &:active { transform: translateY(0); box-shadow: none; }
  @media (prefers-reduced-motion: reduce) { &:hover, &:focus-visible { transform: none; } }
`;
