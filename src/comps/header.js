import React from 'react'
import styled from 'styled-components'
import { Container } from './utils'
import { Github } from '@styled-icons/entypo-social/Github'
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'
import { Mail } from '@styled-icons/heroicons-solid/Mail'
import { PaperPlane } from 'styled-icons/entypo'

const Wrapper = styled.header`
background: var(--cream);
border-top: 10px solid #778492;
`

const Content = styled(Container)`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;

@media(min-width: 720px) {
  flex-direction: row;
}
`

const Info = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media(min-width: 720px) {
  flex-direction: row;
}
`

const InfoName = styled.h1`
font-family: 'Montserrat', sans-serif;
margin-bottom: 5px;
margin-top: 30px;
text-align: center;

@media(min-width: 720px) {
  text-align: left;
}
`

const InfoOccupation = styled.h2`
margin: 0 0 15px;
color: var(--light-gray);
font-weight: initial;
text-align: center;

@media(min-width: 720px) {
  text-align: left;
}
`

const InfoLinks = styled.ul`
padding: 0;
display:flex;
justify-content: center;
list-style: none;

@media(min-width: 720px) {
  justify-content: flex-start;
}
`

const InfoLinksItem = styled.li`
margin-right: 10px;
`

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
`

const ImgMockup = styled.div`
width: 200px;
height: 200px;
border: 3px solid black;
border-radius: 50% 50%;

@media(min-width: 720px) {
  margin-right: 30px;
}
`

const ContactButton = styled.button`
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
`

const Header = () => (
  <Wrapper>
    <Content>
      <Info>
        <ImgMockup />
        <div>
          <InfoName>Mustafa Ucuncu</InfoName>
          <InfoOccupation>JS Developer</InfoOccupation>
          <InfoLinks>
            <InfoLinksItem>
              <InfoLink href="#" ><Github width="1.5em" /></InfoLink>
            </InfoLinksItem>
            <InfoLinksItem>
              <InfoLink href="#" ><Linkedin width="1.5em" /></InfoLink>
            </InfoLinksItem>
            <InfoLinksItem>
              <InfoLink href="#" ><Mail width="1.5em" /></InfoLink>
            </InfoLinksItem>
          </InfoLinks>
        </div>
      </Info>
      <ContactButton>
        <PaperPlane width="1.5em" />
        Contact me
      </ContactButton>
    </Content>
  </Wrapper>
)

export default Header