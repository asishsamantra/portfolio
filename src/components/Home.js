import React from 'react';
import webImg from '../images/web.jpg';
import profileImg from '../images/asish.jpg';
import styled, { css } from 'styled-components/macro';
import { FaEquals } from 'react-icons/fa';

const HomeSection = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
`;
const HomeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;
const ImgView = css`
  height: 515px;
  width: 550px;
  border-radius: 20px;
  background: white;
`;

const WebImg = styled.img`
  ${ImgView}
`;
const ProfileImg = styled.img`
  ${ImgView};
  object-fit: cover;
`;


function Home() {
  return (
    <HomeSection>
      <HomeContainer>
        <WebImg src={webImg} alt='image1' />
        <FaEquals color='#fff' size={124}/>
        <ProfileImg src={profileImg} alt='image2' />
      </HomeContainer>
    </HomeSection>
  );
}

export default Home;
