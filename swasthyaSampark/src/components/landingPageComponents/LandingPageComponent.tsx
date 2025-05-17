// @ts-ignore
import React from "react";
import styled from "styled-components";
import { HeroSection } from "./HeroSection.tsx";
import { HeroSectionBottomDiv } from "./HeroSectionBottomDiv.tsx";
import "../../CSS/HeroSection.css";
import Footer from "../footer/Footer.tsx";
// import MarqueeComponent from "./marquee/MarqueeComponent.tsx";
import WhoWeHelp from "./WhoWeHelp.tsx";
import OurSolution from "./OurSolution.tsx";
import OurServices from "./OurServices.tsx";

const Container = styled.div`
  display: flex;
  background-color: #f6f4f2;
  height: 100%;
  width: 100vw;
  margin: 0;
  padding: 0;
  position: relative;
  left: 50%;
  right: 50%;
  transform: translate(-50%, 0);
  flex-direction: column;
  gap: 5%;

  @media (max-width: 1440px) {
    gap: 3%;
  }
  @media (max-width: 1024px) {
    gap: 3%;
  }
  @media (max-width: 768px) {
    gap: 2%;
  }
  @media (max-width: 480px) {
    gap: 1%;
  }
`;

const LandingPageComponent = () => {
  return (
    <Container>
      <HeroSection />
      <OurServices />
      <HeroSectionBottomDiv />
      {/* <MarqueeComponent/> */}
      <WhoWeHelp />
      <OurSolution />
      <Footer />
    </Container>
  );
};

export default LandingPageComponent;
