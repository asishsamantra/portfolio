import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Progress = styled.div`
  background-color: #d8d8d8;
  border-radius: 20px;
  position: relative;
  margin: 15px 0;
  height: 30px;
  width: 300px;
`;
const ProgressHeader = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
const ProgressDone = styled.div`
  background: linear-gradient(to left, #f2709c, #ff9472);
  box-shadow: 0 3px 3px -5px #f2709c, 0 2px 5px #f2709c;
  border-radius: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  font-weight: 700;
  justify-content: center;
  height: 100%;
  font-size: 20px;
  width: 0;
  opacity: 0;
  transition: 1s ease 0.3s;
`;

const Skill = ({ done, head }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <Container>
      <ProgressHeader>{head}</ProgressHeader>
      <Progress>
        <ProgressDone style={style}>{done}%</ProgressDone>
      </Progress>
    </Container>
  );
};

export default Skill;
