import styled from "styled-components";
import { ICustomCarouselItem } from "./CustomCarousel.types";
import { device } from "@src/utils/device";

const StyledCustomCarousel = styled.div`
  position: relative;
  padding: 0 0px;

  .swiper-pagination {
    display: flex;
    justify-content: center;
    margin-top: 40px;

    .swiper-pagination-bullet {
      border-radius: 50%;
      width: 10px;
      height: 10px;
      background-color: #cccccc;
      cursor: pointer;

      &:not(:last-child) {
        margin-right: 10px;
      }

      &.swiper-pagination-bullet-active {
        background: linear-gradient(
          136.1deg,
          #ffc671 -1.99%,
          #ff7541 58.57%,
          #ff6f3d 100%
        );
      }
    }

    @media ${device.mobile} {
      margin-top: 32px;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: calc(50% - 25px);
    transform: translateY(-50%);
    z-index: 10;

    @media ${device.mobile} {
      display: none;
    }
  }

  .swiper-button-prev {
    left: 0;
  }

  .swiper-button-next {
    right: 0;
  }

  @media ${device.mobile} {
    padding: 0;
  }
`;

const StyledCustomCarouselWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 440px) minmax(auto, 480px);
  column-gap: 32px;
  padding-top: 72px;

  /* match their panel height: about 320px + text area ~ 200px = ~520px */
  min-height: 520px;
  margin-bottom: 48px;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    text-align: center;
    min-height: auto;
  }
`;

const StyledCustomCarouselImg = styled.div<{
  $imgUrl: ICustomCarouselItem["imgUrl"];
}>`
  width: 550px;
  margin: 0 auto;

  /* aspect ratio – this keeps image contained */
  padding-top: 57.6%; /* (height/width) × 100% */

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  background-image: url(${(p) => p.$imgUrl});

  @media ${device.tablet} {
    margin: 0 auto;
    padding-bottom: 0;
    width: 80vw;
    height: 20vw;
    order: 2;
  }

  @media ${device.tabletS} {
    padding-bottom: 20.107%;
    height: initial;
  }

  @media ${device.mobile} {
    padding-top: 56.9%;
  }
`;

const StyledCustomCarouselBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 90vw;
  text-align: left;

  @media ${device.tablet} {
    padding-top: 0;
    width: 100vw;
    order: 1;
  }
`;

const StyledCustomCarouselNumber = styled.div`
  margin-bottom: 16px;
  font-size: 60px;
  font-weight: 700;
  line-height: 42px;
  color: #808080;
  opacity: 0.2;
`;

const StyledCustomCarouselHeading = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 16px;
`;

const StyledCustomCarouselParagraph = styled.p`
  font-size: 14px;
  text-align: left;
  line-height: 160%;

  @media ${device.tablet} {
    padding-top: 0;
    text-align: start;
    width: 100%;
  }
`;

const StyledCustomCarouselButton = styled.button<{ $active?: boolean }>`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  text-align: center;

  opacity: ${({ $active }) => ($active ? 1 : 0.6)};
  transform: ${({ $active }) => ($active ? "scale(1.05)" : "scale(1)")};
  transition: all 0.3s ease;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  img {
    width: 60px;
    height: auto;
    display: block;
    border-radius: 8px;
  }

  span {
    color: ${({ $active }) => ($active ? "red" : "black")};
    text-decoration: ${({ $active }) => ($active ? "underline" : "none")};
    font-size: 0.85rem;
    transition: all 0.2s ease;
  }

  &:hover span {
    color: red;
    text-decoration: underline;
  }
`;

const StyledCustomCarouselButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem; /* same as OnlyOffice’s icon spacing */

  @media (max-width: 768px) {
    gap: 16px;
    flex-wrap: wrap;
  }
`;

const StyledCustomCarouselParagraphLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: #ff6f3d;
  text-decoration: underline;
  transition: text-decoration 0.2s;

  &:hover {
    text-decoration: none;
  }
`;

const StyledCustomCarouselList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 1.6;

  li {
    position: relative;
    padding-left: 24px;
    margin-bottom: 14px;
  }
  li::before {
    content: "";
    position: absolute;
    left: 5px;
    top: 0.5em; /* vertically center bullet */
    width: 6px;
    height: 6px;
    background: #ff6f3d;
    transform: rotate(45deg);
  }
`;

const StyledCustomCarouselListItem = styled.li`
  position: relative;
  padding-left: 30px;
  margin-bottom: 8px;
  line-height: 1.6;
  font-size: 14px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 7px;
    width: 8px;
    height: 8px;
    background-color: #ff6f3d; /* ONLYOFFICE red */
    transform: rotate(45deg); /* makes it a diamond */
  }
`;

export {
  StyledCustomCarousel,
  StyledCustomCarouselWrapper,
  StyledCustomCarouselImg,
  StyledCustomCarouselBody,
  StyledCustomCarouselNumber,
  StyledCustomCarouselHeading,
  StyledCustomCarouselButton,
  StyledCustomCarouselButtons,
  StyledCustomCarouselParagraph,
  StyledCustomCarouselParagraphLink,
  StyledCustomCarouselList,
  StyledCustomCarouselListItem,
};
