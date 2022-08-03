import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import { QuestionCircle } from 'styled-icons/fa-solid';

const Skill = styled.article`
margin-bottom: 30px;
`;

const SkillName = styled.h3`
color: var(--light-gray);
position: relative;
`;

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
`;

const SkillMeter = styled.div`
display: flex;
`;

const SkillProgress = styled.div`
margin: 0 2px;
height: 10px;
flex: 1;
background: var(--${({ filled }) => filled ? 'green' : 'light-gray'});
border-radius: 5px;
`;

const Skills = () => (
  <>
    <Skill>
      <SkillName>HTML / CSS / JS<SkillTip width="16px" data-tip="Ability to use semantic HTML tags, utilising the newest ECMA Script features." /></SkillName>
      <SkillMeter>
        <SkillProgress filled />
        <SkillProgress filled />
        <SkillProgress filled />
      </SkillMeter>
    </Skill>
    <Skill>
      <SkillName>React<SkillTip width="16px" data-tip="Best coupled with Next.js, but I know Gatsby. I use Styled Components for styling." /></SkillName>
      <SkillMeter>
        <SkillProgress filled />
        <SkillProgress filled />
        <SkillProgress filled />
      </SkillMeter>
    </Skill>
    <Skill>
      <SkillName>Express / Fastify<SkillTip width="16px" data-tip="I can create CRUD endpoints, authentication, apply middlewares etc." /></SkillName>
      <SkillMeter>
        <SkillProgress filled />
        <SkillProgress filled />
        <SkillProgress filled />
      </SkillMeter>
    </Skill>
    <Skill>
      <SkillName>NoSQL / SQL<SkillTip width="16px" data-tip="As for NoSQL I had experience with Mongo and Firebase. My SQLs of choice are MySQL (MariaDB) and Postgres - took Oracle course in the college." /></SkillName>
      <SkillMeter>
        <SkillProgress filled />
        <SkillProgress filled />
        <SkillProgress />
      </SkillMeter>
    </Skill>
    <Skill>
      <SkillName>React Native<SkillTip width="16px" data-tip="Creating views with Expo and extending functionality in Java." /></SkillName>
      <SkillMeter>
        <SkillProgress filled />
        <SkillProgress filled />
        <SkillProgress />
      </SkillMeter>
    </Skill>
    <Skill>
      <SkillName>Ruby + RoR / Elixir + Phoenix<SkillTip width="16px" data-tip="Understanding of MVC structure, creating REST APIs." /></SkillName>
      <SkillMeter>
        <SkillProgress filled />
        <SkillProgress filled />
        <SkillProgress />
      </SkillMeter>
    </Skill>
    <Skill>
      <SkillName>Tests<SkillTip width="16px" data-tip="Proficient with unit testing" /></SkillName>
      <SkillMeter>
        <SkillProgress filled />
        <SkillProgress />
        <SkillProgress />
      </SkillMeter>
    </Skill>
    <ReactTooltip uuid="tooltip" event="click" offset={{ top: 0, left: 0, right: 0 }} effect="solid" />
  </>
);

export default Skills;