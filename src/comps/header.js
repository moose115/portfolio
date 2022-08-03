import React from 'react';
import styled from 'styled-components';
import { Container } from './utils';
import { Github } from '@styled-icons/entypo-social/Github';
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';
import { Mail } from '@styled-icons/heroicons-solid/Mail';
import { PaperPlane } from 'styled-icons/entypo';
import me from '../images/me.jpg';

const Wrapper = styled.header`
background: var(--cream);
border-top: 10px solid #778492;
`;

const Content = styled(Container)`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;

@media(min-width: 720px) {
  flex-direction: row;
}
`;

const Info = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media(min-width: 720px) {
  flex-direction: row;
}
`;

const InfoName = styled.h1`
font-family: 'Montserrat', sans-serif;
margin-bottom: 5px;
margin-top: 30px;
text-align: center;

@media(min-width: 720px) {
  text-align: left;
}
`;

const InfoOccupation = styled.h2`
margin: 0 0 15px;
color: var(--light-gray);
font-weight: initial;
text-align: center;

@media(min-width: 720px) {
  text-align: left;
}
`;

const InfoLinks = styled.ul`
padding: 0;
display:flex;
justify-content: center;
list-style: none;

@media(min-width: 720px) {
  justify-content: flex-start;
}
`;

const InfoLinksItem = styled.li`
margin-right: 10px;
`;

const InfoLink = styled.a`
width: 36px;
height: 36px;
display: flex;
justify-content: center;
align-items: center;
background: var(--silver);
border-radius: 50%;
color: var(--cream);
font-size: 16px;
text-align: center;
transition: .2s;

@media(min-width: 1000px) {
  &:hover {
    background: var(--dark-silver);
  }
}
`;

const ImgMockup = styled.div`
width: 200px;
height: 200px;
border: 3px solid var(--light-gray);
border-radius: 50% 50%;
overflow: hidden;

img {
  width: 100%;
}

@media(min-width: 720px) {
  margin-right: 30px;
}
`;

const ContactLink = styled.a`
margin-top: 2em;
padding: 8px 16px;
display: flex;
align-items: center;
background: var(--green);
border: none;
border-radius: 4px;
font-family: 'Montserrat', sans-serif;
font-size: 1em;
font-weight: bold;
color: var(--cream);
text-decoration: none;
text-transform: uppercase;
cursor: pointer;
transition: .2s;

svg {
  margin-right: 10px
}

@media(min-width: 720px) {
  &:hover {
    background: var(--dark-green);
  }
}
`;

const Header = () => (
  <Wrapper>
    <Content>
      <Info>
        <ImgMockup>
          <img src={me} alt="me" />
        </ImgMockup>
        <div>
          <InfoName>Mustafa Ucuncu</InfoName>
          <InfoOccupation>JS Developer</InfoOccupation>
          <InfoLinks>
            <InfoLinksItem>
              <InfoLink href="https://github.com/mustaf115" title="Github" ><Github width="1.5em" /></InfoLink>
            </InfoLinksItem>
            <InfoLinksItem>
              <InfoLink href="https://www.linkedin.com/in/mustafa-ucuncu-70617013a/" title="LinkedIn" ><Linkedin width="1.5em" /></InfoLink>
            </InfoLinksItem>
            <InfoLinksItem>
              <InfoLink href="mailto:mustafaucuncu99@gmail.com" title="Email" ><Mail width="1.5em" /></InfoLink>
            </InfoLinksItem>
          </InfoLinks>
        </div>
      </Info>
      <ContactLink href="#contact" title="Contact" >
        <PaperPlane width="1.5em" />
        Contact me
      </ContactLink>
    </Content>
  </Wrapper>
);

export default Header;