import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import SEO from '../comps/seo';
import Header from '../comps/header';
import Footer from '../comps/footer';
import Projects from '../comps/projects';
import Skills from '../comps/skills';
import Languages from '../comps/languages';
import { Container } from '../comps/utils';
import Post from '../comps/post';

import 'typeface-lato';
import 'typeface-montserrat';
import AlmaMater from '../comps/alma';

const GlobalStylesheet = createGlobalStyle`
* {
  box-sizing: inherit;
}
:root {
  --gray: #434343;
  --light-gray: #778492;
  --dark-teal: #DAE3E7;
  --silver: #B0B7BF;
  --dark-silver: #778492;
  --cream: #F5F5F5;
  --green: #54ba4e;
  --dark-green: #49ac43;
}
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--gray);
  background: var(--dark-teal);
  font-family: 'Lato', sans-serif;
}
`;

const Content = styled.section`
display: grid;
grid-template-columns: 1fr;
grid-template-areas:
  "main"
  "aside";
column-gap: 30px;
row-gap: 10px;

@media(min-width: 800px) {
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    "main aside";
}
`;

const Main = styled.main`
grid-area: main;
`;

const Aside = styled.aside`
grid-area: aside;
`;

const IndexPage = () => (
  <>
    <GlobalStylesheet />
    <SEO title="Mustafa Üçüncü" />
    <Header />
    <Container>
      <Content>
        <Main>
          <Post title="About me" >
            I've been learning frontend technologies since 2018. Midway through I added backend and chose MERN as my primary stack. I touched related technologies like Ruby with Rails or React Native. I'm also into game development, and I've already tried Unity (C#) and Defold (Lua) engines. Regarding my hobbies they include, but are not limited to: gaming, getting to know foreign cultures and languages, learning random things and traveling.
          </Post>
          <Post title="Projects">
            <Projects />
          </Post>
        </Main>
        <Aside>
          <Post title="Skills">
            <Skills />
          </Post>
          {/* <Post title="Languages">
            <Languages />
          </Post> */}
          <Post title="Education">
            <AlmaMater />
          </Post>
        </Aside>
      </Content>
    </Container>
    <Footer />
  </>
);

export default IndexPage;
