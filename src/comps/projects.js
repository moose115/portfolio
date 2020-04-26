import React from 'react'
import styled from 'styled-components'

const Subheading = styled.h3`
text-align: center;
color: var(--light-gray);
`

const Summary = styled.p`
margin-bottom: 30px;
text-align: center;
color: var(--light-gray);
`

const ScreenMockup = styled.div`
margin: 0 auto 30px;
border: 1px dashed;
max-width: 100%;

div {
  width: 100%;
  padding-bottom: 56.25%;
}
`

const Divider = styled.div`
margin: 60px 0;
height: 2px;
background: linear-gradient(90deg, rgba(200, 200, 200, .3) 0%, rgba(80, 80, 80, .3) 50%, rgba(200, 200, 200, .3) 100%);
`

const Projects = () => {
  return (
    <>
    <Subheading>Invoice generator</Subheading>
    <Summary>Polish business oriented invoice generation app.</Summary>
    <ScreenMockup><div></div></ScreenMockup>
    <p>Simple invoice generator. It uses my own REGON API interface which is accessed through serverless function hosted on now.</p>
    <Divider />

    <Subheading>REGON package</Subheading>
    <Summary>Node interface for REGON database.</Summary>
    <ScreenMockup><div></div></ScreenMockup>
    <p>Interface connecting to Polish company registry. It's written in Typescript and uses SOAP envelopes.</p>
    <Divider />

    <Subheading>Shop</Subheading>
    <Summary>SSR pages for very simple shop</Summary>
    <ScreenMockup><div></div></ScreenMockup>
    <p>Dynamicaly created product pages and simple cart functionality in Next.js.</p>
    <Divider />

    <Subheading>Portfolio</Subheading>
    <Summary>The site you're reading right now.</Summary>
    <ScreenMockup><div></div></ScreenMockup>
    <p>Originally pure HTML + Bootstrap portfolio recoded to Gatsby and Styled Components. Credits are at the bottom of the page.</p>
    </>
  );
}

export default Projects