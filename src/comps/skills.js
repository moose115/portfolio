import React from 'react'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip';
import { QuestionCircle } from 'styled-icons/fa-solid';

const Skill = styled.article`
margin-bottom: 30px;
`

const SkillName = styled.h3`
color: var(--light-gray);
position: relative;
`

const SkillTip = styled(QuestionCircle)`
position: absolute;
right: 1em;
bottom: 0;
cursor: pointer;
transition: .2s;

@media(min-width: 720px) {
  &:hover {
    color: var(--gray);
  }
}
`

const SkillMeter = styled.div`
display: flex;
`

const SkillProgress = styled.div`
margin: 0 2px;
height: 10px;
flex: 1;
background: var(--${ ({ filled }) => filled ? 'green' : 'light-gray' });
border-radius: 5px;
`

const Skills = () => (
  <>
  <Skill>
    <SkillName>HTML / CSS / JS<SkillTip width="16px" data-tip="Sufficient. Semantic HTML and modern CSS Flexbox and Grid. Accessibility yet to be put in practice. Good understanding of modern JS, browser's API, ES6+." /></SkillName>
    <SkillMeter>
      <SkillProgress filled />
      <SkillProgress filled />
      <SkillProgress filled />
    </SkillMeter>
  </Skill>
  <Skill>
    <SkillName>React + Redux<SkillTip width="16px" data-tip="Sufficient. Including familiarity with Next.js and Gatsby." /></SkillName>
    <SkillMeter>
    <SkillProgress filled />
    <SkillProgress filled />
    <SkillProgress filled />
    </SkillMeter>
  </Skill>
  <Skill>
    <SkillName>Express<SkillTip width="16px" data-tip="Sufficient. Building routes. Applying middlewares. Pulling data from databases." /></SkillName>
    <SkillMeter>
    <SkillProgress filled />
    <SkillProgress filled />
    <SkillProgress filled />
    </SkillMeter>
  </Skill>
  <Skill>
    <SkillName>Mongo / SQL<SkillTip width="16px" data-tip="Sufficient syntax. Not proficient with complex relations." /></SkillName>
    <SkillMeter>
    <SkillProgress filled />
    <SkillProgress filled />
    <SkillProgress />
    </SkillMeter>
  </Skill>
  <Skill>
    <SkillName>React Native<SkillTip width="16px" data-tip="Sufficient in building views. Familiarity with Expo. Able to do some native extensions in Java for Android." /></SkillName>
    <SkillMeter>
    <SkillProgress filled />
    <SkillProgress filled />
    <SkillProgress />
    </SkillMeter>
  </Skill>
  <Skill>
    <SkillName>Ruby on Rails<SkillTip width="16px" data-tip="Understanding of project structure. Usage of gems. Building REST and GraphQL APIs." /></SkillName>
    <SkillMeter>
    <SkillProgress filled />
    <SkillProgress filled />
    <SkillProgress />
    </SkillMeter>
  </Skill>
  <Skill>
    <SkillName>Tests<SkillTip width="16px" data-tip="Some familiarity with unit server-side tests." /></SkillName>
    <SkillMeter>
    <SkillProgress filled />
    <SkillProgress />
    <SkillProgress />
    </SkillMeter>
  </Skill>
  <ReactTooltip uuid="tooltip" event="click" offset={{top: 0, left: 0, right: 0}} effect="solid" />
  </>
)

export default Skills