import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

const StyledWorkspaceHero = styled(Section)`
  margin-top: -72px;
  background: transparent;
  background-position: 37% -630px;
  background-repeat: no-repeat;
  background-color: #f9f9f9;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
    background-position: 26% -564px;
  }

  @media ${device.mobile} {
    background-position: 24% -690px;
  }
`;

const StyledWorkspaceHeroWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  witdh: 100%;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    row-gap: 56px;
    text-align: center;
  }

  @media ${device.mobile} {
    row-gap: 48px;
    text-align: start;
  }
`;

const StyledWorkspaceHeroContent = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 24px;

  a {
    margin-top: 12px;

    @media ${device.tabletS} {
      margin: 0;
    }
  }

  @media ${device.tabletS} {
    align-items: center;
  }

  @media ${device.mobile} {
    align-items: start;
    gap: 16px;
  }
`;

const StyledWorkspaceHeroImage = styled.div`
  padding-bottom: 108.632%;
  background-image: url("/images/templates/workspace/hero/hero_icon.svg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 647px;
  height: 647px;

  @media ${device.tabletS} {
    margin: 0 auto;
    padding-bottom: 0;
    width: 420px;
    height: 456px;
  }

  @media ${device.mobile} {
    width: 262px;
    height: 282px;
  }
`;

export {
  StyledWorkspaceHero,
  StyledWorkspaceHeroWrapper,
  StyledWorkspaceHeroContent,
  StyledWorkspaceHeroImage,
};
