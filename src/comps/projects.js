import React from 'react';
import styled from 'styled-components';
import forecastImg from '../images/forecastapp.jpeg';
import { LinkExternal as _LinkExternal } from '@styled-icons/boxicons-regular';

const ProjectLink = styled.a`
color: var(--light-gray);
text-decoration: none;

&:hover {
  color: var(--primary-color);
}

& h3 {
  color: inherit;
}
`;

const Subheading = styled.h3`
text-align: center;
color: var(--light-gray);
`;

const LinkExternal = styled(_LinkExternal)`
  width: 1.5rem;
  height: 1.5rem;
  color: inherit;
  margin-left: 0.5rem;
`;

const Summary = styled.p`
margin-bottom: 30px;
text-align: center;
color: var(--light-gray);
`;

const Screenshot = styled.div`
margin: 0 auto 30px;
border: 1px solid var(--lightgray);
max-width: 100%;

div {
  width: 100%;
  padding-bottom: 56.25%;
}

img {
  width: 100%;
  display: block;
}
`;

const Divider = styled.div`
margin: 3em 0;
height: 2px;
background: linear-gradient(90deg, rgba(200, 200, 200, .3) 0%, rgba(80, 80, 80, .3) 50%, rgba(200, 200, 200, .3) 100%);
`;

const TagsContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: .5em;
font-size: .8em;
`;

const Tag = styled.span`
margin-bottom: 0.5em;
padding: 0.5em;
background: var(--green);
border-radius: 5px;
color: var(--cream);
`;

const Projects = () => {
  return (
    <>

      <ProjectLink href="https://react-forecast.vercel.app/" target="_blank">
        <Subheading>Yet Another Forecast App <LinkExternal /></Subheading>
      </ProjectLink>
      <Summary>Forecast web service utilising OpenWeatherMap API</Summary>
      <Screenshot> <img src={forecastImg} alt="Yet Another Forecast App" /> </Screenshot>
      <p>App written in React using Next.js with the styling done using Styled Components. The city searching is very simple and based on a list of locations compatible with OpenWeatherMap stored in a JSON file.</p>
      <TagsContainer>
        <Tag>React</Tag>
        <Tag>Next.js</Tag>
        <Tag>Styled Components</Tag>
        <Tag>OpenWeatherMap</Tag>
        <Tag>Serverless Functions</Tag>
        <Tag>Server-side rendering</Tag>
        <Tag>API usage</Tag>
        <Tag>Typescript</Tag>
      </TagsContainer>
      <Divider />

      <Subheading>REGON package</Subheading>
      <Summary>Node interface for REGON database.</Summary>
      <p>Polish Business Registry interface in Node.js. It's written in Typescript and uses SOAP envelopes.</p>
      <TagsContainer>
        <Tag>Node.js</Tag>
        <Tag>Typescript</Tag>
        <Tag>SOAP</Tag>
        <Tag>XML</Tag>
        <Tag>API usage</Tag>
        <Tag>JSON</Tag>
      </TagsContainer>
      <Divider />

      <Subheading>Portfolio</Subheading>
      <Summary>The site you are at</Summary>
      <p>Originally pure HTML + Bootstrap portfolio theme adapted to Gatsby and Styled Components.</p>
      <TagsContainer>
        <Tag>React</Tag>
        <Tag>Gatsby.js</Tag>
        <Tag>Styled Components</Tag>
        <Tag>Static Page Generation</Tag>
      </TagsContainer>
    </>
  );
};

export default Projects;