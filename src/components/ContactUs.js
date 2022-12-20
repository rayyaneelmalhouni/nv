import React from "react";
import styled from "styled-components";

function ContactUs() {
  return (
    <Container id="contact">
      <Title>ContactUs</Title>
      <SocialMediaContainer>
        <Instagram>INSTAGRAM</Instagram>
        <Twitter>TWITTER</Twitter>
        <Email>EMAIL</Email>
        <SnapChat>SNAPCHAT</SnapChat>
      </SocialMediaContainer>
      <Copyright>Copyright &copy; 2022 EICS.All Rights Reserved</Copyright>
    </Container>
  );
}

export default ContactUs;

const Container = styled.div`
  position: absolute;
  top: 350vh;
  min-height: 100vh;
  width: 100%;
  background-color: #0e111c;
  padding: 0 calc(3.5vw + 5px);
`;
const Title = styled.h1`
  margin: 20px 0;
  color: #010a80;
  font-size: 36px;
  text-align: center;
`;
const SocialMediaContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  div {
    position: relative;
    width: 80%;
    height: 40px;
    margin: 10px 0;
    color: white;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    font-size: 18px;
    &:after {
      position: absolute;
      color: #0e111c;
      display: flex;
      flex-direction: column;
      justify-content: center;
      top: 0;
      left: 0;
      height: 100%;
      width: 0%;
      text-align: center;
      background-color: white;
      border-radius: 15px;
      transition: 1s;
      opacity: 0;
    }
    &:hover {
      &:after {
        width: 100%;
        opacity: 1;
      }
    }
  }
`;
const Instagram = styled.div`
  &:after {
    content: "@rayyaneelmalhouni";
  }
`;
const Twitter = styled.div`
  &:after {
    content: "@RElmalhouni";
  }
`;
const Email = styled.div`
  &:after {
    content: "elmalhounirayyane@gmail.com";
  }
`;
const SnapChat = styled.div`
  &:after {
    content: "rayyaneelmalh19";
  }
`;
const Copyright = styled.div`
  text-align: center;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: gray;
`;
