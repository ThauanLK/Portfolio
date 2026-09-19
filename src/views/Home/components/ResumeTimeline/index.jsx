import React from 'react';
import { Academics, XpAnterior } from '../../../../data/profile';
import { GroupTitle, Timeline, Entry, Marker, Card, CardHeader, Heading, Organization, Period, Responsibilities, Technologies } from './styles';

function TimelineIcon({ education = false }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {education ? <><path d="m2 8 10-5 10 5-10 5-10-5Zm4 2v7c4 3 8 3 12 0v-7M22 8v7" /></> : <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12a22 22 0 0 0 18 0M12 11v4" /></>}
  </svg>;
}

export default function ResumeTimeline() {
  return <>
    <GroupTitle id="experiencias-titulo"><TimelineIcon />Experiência profissional</GroupTitle>
    <Timeline aria-labelledby="experiencias-titulo">
      {[...XpAnterior].reverse().map((experience) => <Entry key={`${experience.organization}-${experience.title}`}>
        <Marker aria-hidden="true" />
        <Card>
          <CardHeader>
            <div><Heading>{experience.title}</Heading><Organization>{experience.organization}</Organization></div>
            <Period>{experience.period}</Period>
          </CardHeader>
          <Responsibilities>{experience.highlights.map((item) => <li key={item}>{item}</li>)}</Responsibilities>
          <Technologies aria-label="Tecnologias utilizadas">{experience.technologies.map((tech) => <li key={tech}>{tech}</li>)}</Technologies>
        </Card>
      </Entry>)}
    </Timeline>
    <GroupTitle id="formacao-titulo"><TimelineIcon education />Formação acadêmica</GroupTitle>
    <Timeline aria-labelledby="formacao-titulo">
      {[...Academics].reverse().map((academic) => <Entry key={academic.title}>
        <Marker aria-hidden="true" />
        <Card>
          <CardHeader>
            <div><Heading>{academic.grade}</Heading><Organization>{academic.title}</Organization></div>
            <Period>{academic.year}</Period>
          </CardHeader>
        </Card>
      </Entry>)}
    </Timeline>
  </>;
}
