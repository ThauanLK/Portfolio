import React from 'react';
import LinkedInIcon from '../SocialMedias/Linkedin';
import { ContactSection, Intro, Eyebrow, Heading, Description, ContactCard, Channel, ChannelIcon, CardTitle, CardText, ContactLink } from './styles';

export default function Contact() {
  return (
    <ContactSection id="contato" aria-labelledby="contact-title">
      <Intro>
        <Eyebrow>Entre em contato</Eyebrow>
        <Heading id="contact-title">Vamos conversar?</Heading>
        <Description>
          Tem um projeto em mente, uma oportunidade ou quer trocar experiências
          sobre desenvolvimento? Podemos continuar essa conversa pelo LinkedIn.
        </Description>
      </Intro>
      <ContactCard>
        <Channel><ChannelIcon><LinkedInIcon /></ChannelIcon><span>LinkedIn</span></Channel>
        <CardTitle>Thauan Corrêa</CardTitle>
        <CardText>Desenvolvedor backend Java · Spring Boot</CardText>
        <ContactLink
          href="https://www.linkedin.com/in/thauan-corr%C3%AAa-de-oliveira-525334193/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conversar pelo LinkedIn
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </ContactLink>
      </ContactCard>
    </ContactSection>
  );
}
