import React, { useEffect, useId, useRef, useState } from 'react';
import useActiveSection from '../../../../hooks/useActiveSection/index';
import { LinksContainer, Container, Header, Brand, Logo, LogoTooltip, HeaderContainer, LinkHeader } from './components/index';
import MenuOptions from './menus';
import logo from '../../../../assets/logo_tco.svg';

export default function SiteHeader() {
  const headerRef = useRef(null);
  const activeSection = useActiveSection(MenuOptions, headerRef);
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipId = useId();

  useEffect(() => {
    if (!showTooltip) return;
    const dismiss = (event) => {
      if (event.key === 'Escape') setShowTooltip(false);
    };
    document.addEventListener('keydown', dismiss);
    return () => document.removeEventListener('keydown', dismiss);
  }, [showTooltip]);
  return (
    <HeaderContainer ref={headerRef}>
      <Container>
        <Header>
          <Brand
            href="#apresentacao"
            aria-label="Thauan Corrêa — início"
            aria-describedby={showTooltip ? tooltipId : undefined}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onFocus={() => setShowTooltip(true)}
            onBlur={() => setShowTooltip(false)}
          >
            <Logo src={logo} alt="" width="56" height="56" />
            {showTooltip && <LogoTooltip id={tooltipId} role="tooltip">Thauan Corrêa</LogoTooltip>}
          </Brand>
          <LinksContainer aria-label="Navegação principal">
            {MenuOptions.map((option) => (
              <LinkHeader
                key={option.url}
                href={option.url}
                aria-current={activeSection === option.url.slice(1) ? 'location' : undefined}
              >{option.title}</LinkHeader>
            ))}
          </LinksContainer>
        </Header>
      </Container>
    </HeaderContainer>
  );
}
