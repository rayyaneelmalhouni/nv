import React from "react";
import styled from "styled-components";

function AboutUs() {
  return (
    <Container id="sections">
      <BigTitle>Sections</BigTitle>
      <Title>Définition de la nouvelle</Title>

      <TextContainer>
        La nouvelle est un sous-genre du roman<br></br> C’est un texte narratif
        court qui comprend un narrateur, une intrigue et des personnages.
        <br></br> La nouvelle est caractérisée par le sens qui s’élabore par une
        chute.<br></br> Le lecteur est amené à une relecture c’est-à-dire à
        réagir.
      </TextContainer>
      <Title>Définition du réalisme</Title>

      <TextContainer>
        Le terme réalisme apparaît en 1826 dans Le Mercure De France pour
        désigner La littérature du vrai. Il souligne chez les écrivains, mais
        aussi chez les peintres la volonté de reproduire le réel. En utilisant
        le mot naturalisme dans le roman expérimental en 1880, Emile Zola
        exprime le souci de donner au réalisme une dimension scientifique à
        travers son oeuvre, le romancier étudie les lois de l’hérédité et de
        l’influence du milieu sur les individus.<br></br>
        La nouvelle ={">"} Genre littéraire<br></br>
        Les nouvelles ={">"} L’actualité
      </TextContainer>
      <Title>Les caractéristiques de la nouvelle</Title>

      <TextContainer>
        C’est une histoire courte : précise et concise<br></br>
        Elle comporte une chute : le coup de théâtre c’est-à-dire une fin
        inattendue<br></br>
        Peu de personnages (utile)<br></br>
        Des événements uniques (contrairement à l’histoire à tiroirs)
      </TextContainer>
      <Title>Une oeuvre réaliste</Title>

      <TextContainer>
        Elle est inspirée de faits réels<br></br>
        Elle est attachée à la réalité quotidienne des gens (particulièrement le
        vécu des basses classes)<br></br>
        C’est donc les vocations de la réalité sociologique et des souffrances
        psychologiques<br></br>
        des petites gens.
      </TextContainer>
      <Title>Les procédés d’une œuvre réaliste</Title>

      <TextContainer>
        C’est une œuvre basée sur la règle de la vrai semblance (crédibilité)
        <br></br>
        Sur le plan littéraire c’est l’imitation du langage du peuple dans le
        dialogue<br></br>
        C’est une tentation sociologique le roman devient l’étude d’un milieu
        dans lequel l’auteur essaie d’adopter des critères scientifiques.
        <br></br>
        La réalité c’est quelque chose de vérifiable et de fiabilité
      </TextContainer>
      {/* <ImageContainer>
        <img src="https://live.staticflickr.com/65535/51983017766_39e9917468_z.jpg" />
      </ImageContainer> */}
    </Container>
  );
}

export default AboutUs;

const Container = styled.div`
  position: absolute;
  top: 100vh;
  width: 100%;
  padding: 0 calc(7vw + 5px);
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: #f9f9f9;
`;
const Title = styled.h1`
  width: 100%;
  font-size: 20px;
  text-align: center;
  color: #2833c7;
  margin: 20px 0;
  @media only screen and (max-width: 675px) {
    font-size: 16px;
    margin-bottom: 0;
  }
`;
const BigTitle = styled(Title)`
  font-size: 36px;
  color: #010a80;
  @media only screen and (max-width: 675px) {
    font-size: 24px;
  }
`;
const TextContainer = styled.div`
  width: 100%;
  font-size: 18px;
  text-align: center;
  @media only screen and (max-width: 675px) {
    font-size: 16px;
  }
`;
const ImageContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  max-width: 675px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
