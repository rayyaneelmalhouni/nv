import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Units() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Container id="illustrations">
      <Title>Illustrations</Title>
      <TextContainer>
        Quelques exemples de nouvelle réalistes:<br></br>={">"} Biblio Collège
        de nouvelles réalites Hachette<br></br>={">"} La ficelle de Guy de
        Maupassant<br></br>={">"} Le Papa de Simon<br></br>={">"} Aux Champs Guy
        de Maupassant<br></br>
      </TextContainer>
      <Carousel {...settings}>
        <Wrap>
          <img src="https://live.staticflickr.com/65535/52575201848_886835f632_o.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://live.staticflickr.com/65535/52574209682_d68ebb5ce0_o.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://live.staticflickr.com/65535/52575128270_913476b571_o.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://live.staticflickr.com/65535/52574675301_67d34f34d9_o.jpg" />
        </Wrap>
      </Carousel>
    </Container>
  );
}

export default Units;

const Container = styled.div`
  position: absolute;
  top: 250vh;
  min-height: 100vh;
  width: 100%;
  padding: 0 calc(7vw + 5px);
  overflow-x: hidden;
`;
const Title = styled.h1`
  width: 100%;
  font-size: 36px;
  text-align: center;
  color: #010a80;
  margin: 20px 0;
  @media only screen and (max-width: 675px) {
    font-size: 24px;
    margin-bottom: 0;
  }
`;
const TextContainer = styled.div`
  width: 100%;
  padding: 40px 0;
  font-size: 18px;
  color: #f9f9f9;
  text-align: center;
  @media only screen and (max-width: 675px) {
    font-size: 16px;
  }
`;
const Carousel = styled(Slider)`
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
`;
const Wrap = styled.div`
  cursor: pointer;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border: 4px solid transparent;
    border-radius: 4px;
    height: 300px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
