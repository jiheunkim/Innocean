import React from "react";
import * as L from "./HeroSection.style";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  return (
    <L.Wrapper>
      <L.ImageContainer src="/img/herosection.png" alt="Background" />
      <L.Container>
        한 페이지가 될 수 있게
        <L.CenteredContainer>
          <L.TextStyleNormal>
            아름다운 청춘의 한 장을
            <br />
            함께 써내려가는{" "}
            <L.TextStyleBold>대국민 참여 캠페인</L.TextStyleBold>
          </L.TextStyleNormal>
        </L.CenteredContainer>

        <L.BackgroundContainer>
          <L.ParticipationText>
            지금 바로 참여하기 <L.ArrowIcon />
          </L.ParticipationText>
        </L.BackgroundContainer>
        
        <L.LearnMoreText>더 알아보기</L.LearnMoreText>
        <L.BelowIcon />
      </L.Container>
    </L.Wrapper>
  );
}

export default HeroSection;
