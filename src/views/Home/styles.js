import { styled } from 'styled-components';
import '../../constants/colors.css';

export const Container = styled.div`max-width: 720px;`;
export const ContentContainer = styled.div`
  width: min(100%, 1080px);
  margin: 0 auto;
  padding: 0 24px;
`;
export const Text = styled.p`
  color: var(--text);
  line-height: 1.8;
  max-width: 72ch;
`;
export const Section = styled.section`
  padding: 64px 0;
  &#apresentacao {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 220px;
    align-items: center;
    gap: 48px;
    padding: 80px 0;
  }
  &#contato {
    --heading: #FFFFFF;
    --text: #FFFFFF;
    --accent: #FFFFFF;
    --accent-hover: #CCFBF1;
    margin-top: 48px;
    padding: 40px 48px;
    border-radius: 16px;
    background: var(--petroleum);
  }
  @media (max-width: 600px) {
    padding: 40px 0;
    &#apresentacao { padding: 48px 0; grid-template-columns: 1fr; gap: 0; }
    &#contato { padding: 32px 24px; }
  }
`;
export const Git = styled.p`
  margin-top: 28px;
  color: var(--text);
  font-size: 0.9rem;
  line-height: 1.7;
  overflow-wrap: anywhere;
`;
export const Link = styled.a`
  color: var(--accent);
  text-underline-offset: 4px;
  &:hover { color: var(--accent-hover); }
`;
export const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #64748B;
  margin: 0;
`;
export const Title = styled.h2`
  color: var(--heading);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 650;
  letter-spacing: -0.035em;
  margin-bottom: 28px;
  &::before {
    content: '';
    display: block;
    width: 36px;
    height: 3px;
    background: var(--accent);
    margin-bottom: 16px;
    border-radius: 2px;
  }
`;
export const Subtitle = styled.h3`
  color: var(--heading);
  font-size: 1rem;
  font-weight: 600;
  margin: 32px 0 20px;
`;
export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 12px 22px;
  border: 1px solid var(--accent);
  border-radius: 8px;
  background: var(--accent);
  color: var(--on-accent);
  font: inherit;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.5;
  text-decoration: none;
  cursor: pointer;
  &:hover { background: var(--accent-hover); border-color: var(--accent-hover); }
`;
export const ButtonContainer = styled.div`margin-top: 32px;`;
export const BoldText = styled.h4`
  color: var(--heading);
  font-weight: 600;
  margin-bottom: 8px;
  line-height: 1.5;
`;
export const ItalicText = styled.p`
  color: var(--text);
  font-size: 0.85rem;
  line-height: 1.6;
  margin-bottom: 12px;
`;
export const ApresentationText = styled.p`
  color: var(--text);
  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.8;
  max-width: 58ch;
  &:first-child { color: var(--accent); font-weight: 600; }
`;
export const Developer = styled.h1`
  color: var(--heading);
  font-size: clamp(2.4rem, 5.5vw, 4rem);
  font-weight: 650;
  letter-spacing: -0.055em;
  line-height: 1.12;
  margin: 12px 0 16px;
`;
export const Li = styled.li`
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--tint-blue);
  border-left: 3px solid var(--navy);
  margin-bottom: 16px;
`;

export const Role = styled.p`
  color: var(--accent);
  font-size: clamp(1.15rem, 2.5vw, 1.5rem);
  font-weight: 500;
  margin-bottom: 20px;
`;
export const HeroMark = styled.div`
  display: grid;
  place-items: center;
  padding: 24px;
  aspect-ratio: 1;
  background: var(--tint-green);
  border-radius: 50%;
  border: 1px solid #BDD7D1;
  img { width: 100%; height: auto; }
  @media (max-width: 600px) { display: none; }
`;
export const HeroActions = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px 24px;
  margin-top: 28px;
`;
