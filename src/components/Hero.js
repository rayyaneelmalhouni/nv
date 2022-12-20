import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

function Hero() {
  return (
    <Container>
      <Fade bottom>
        <TextContainer>
          <Title>
            <span>L</span>a <span>N</span>ouvelle
          </Title>
          <SubTitle>
            <span>R</span>ealiste
          </SubTitle>
        </TextContainer>
      </Fade>
      <Icon>
        <FontAwesomeIcon icon={faAngleDown} />
      </Icon>
    </Container>
  );
}

export default Hero;

const Container = styled.div`
  position: absolute;
  width: 100%;
  top: 70px;
  min-height: calc(100vh - 70px);
  color: #f9f9f9;
`;
const TextContainer = styled.div`
  margin-top: 20vh;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 96px;
  letter-spacing: 4px;
  font-weight: 700;
  font-family: "Great Vibes", cursive;
  span {
    color: #010a80;
  }
  @media only screen and (max-width: 675px) {
    font-size: 48px;
  }
`;
const SubTitle = styled.h1`
  font-size: 48px;
  letter-spacing: 4px;
  font-weight: 700;
  font-family: "Great Vibes", cursive;
  span {
    color: #010a80;
  }
  @media only screen and (max-width: 675px) {
    font-size: 24px;
  }
`;
const Icon = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 48px;
  color: #010a80;
  animation: down infinite 1.5s;
  @media only screen and (max-width: 675px) {
    font-size: 36px;
  }
`;
