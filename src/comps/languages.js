import React from 'react'
import styled from 'styled-components'
import { Star } from 'styled-icons/boxicons-solid'

const Language = styled.article`
margin-bottom: 30px;
`

const LanguageName = styled.h3`
color: var(--light-gray);
font-size: 18px;
`

const LanguageLevel = styled.span`
font-weight: normal;
`

const LanguageStar = styled(Star)`
color: var(--${ ({ filled }) => filled ? 'green' : 'light-gray' });
`

const Languages = () => (
  <>
  <Language>
    <LanguageName>Polish: <LanguageLevel>native</LanguageLevel></LanguageName>
    <LanguageStar width="1.5em" filled />
    <LanguageStar width="1.5em" filled />
    <LanguageStar width="1.5em" filled />
    <LanguageStar width="1.5em" filled />
    <LanguageStar width="1.5em" filled />
  </Language>
  <Language>
    <LanguageName>English: <LanguageLevel>advanced</LanguageLevel></LanguageName>
    <LanguageStar width="1.5em" filled />
    <LanguageStar width="1.5em" filled />
    <LanguageStar width="1.5em" filled />
    <LanguageStar width="1.5em" filled />
    <LanguageStar width="1.5em" />
  </Language>
  <Language>
    <LanguageName>Turkish: <LanguageLevel>communicative</LanguageLevel></LanguageName>
    <LanguageStar width="1.5em" filled />
    <LanguageStar width="1.5em" filled />
    <LanguageStar width="1.5em" />
    <LanguageStar width="1.5em" />
    <LanguageStar width="1.5em" />
  </Language>
  <Language>
    <LanguageName>German: <LanguageLevel>basics</LanguageLevel></LanguageName>
    <LanguageStar width="1.5em" filled />
    <LanguageStar width="1.5em" />
    <LanguageStar width="1.5em" />
    <LanguageStar width="1.5em" />
    <LanguageStar width="1.5em" />
  </Language>
  </>
)

export default Languages