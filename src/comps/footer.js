import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
padding: 5px 0;
background: var(--gray);
color: var(--silver);
text-align: center;
`

const DesignLink = styled.a`
color: var(--cream);
text-decoration: none;

@media(min-width: 720px) {
  &:hover {
    text-decoration: underline;
  }
}
`

const Footer = () => (
  <FooterContainer>
    General design by <DesignLink href="https://themes.3rdwavemedia.com/">Xiaoing Rilley</DesignLink> under CC ver. 3 license. Changed and recoded by me.
  </FooterContainer>
)

export default Footer;