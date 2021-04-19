import React from 'react';
import styled from 'styled-components/macro';
import Skill from './Skill';

const SkillSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Header = styled.div`
  font-size: 40px;
  border: 5px solid white;
  border-radius: 10px;
  padding: 10px;
  margin: 25px auto;
`;
const SkillContainer = styled.div`
  margin: 10px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 250px;
`;

function MySkill() {
  return (
    <SkillSection>
      <Header>My Skills</Header>
      <SkillContainer>
        <Skill done={70} head={'C'} />
        <Skill done={60} head={'Java'} />
        <Skill done={70} head={'Python'} />
        <Skill done={80} head={'HTML'} />
        <Skill done={70} head={'CSS'} />
        <Skill done={80} head={'React'} />
        <Skill done={60} head={'Styled Component'} />
        <Skill done={60} head={'Redux'} />
        <Skill done={70} head={'ES6'} />
        <Skill done={60} head={'Java'} />
        <Skill done={70} head={'Python'} />
        <Skill done={80} head={'HTML'} />
      </SkillContainer>
    </SkillSection>
  );
}

export default MySkill;
