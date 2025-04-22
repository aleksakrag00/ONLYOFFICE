import styled from "styled-components";
import { ICustomCarouselItem } from "./CustomCarousel.types";
import { device } from "@src/utils/device";

const StyledCustomCarousel = styled.div`
  position: relative;
  padding: 0 80px;

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
  grid-template-columns: minmax(200px, 448px) minmax(200px, 480px);
  column-gap: 32px;

  @media ${device.tablet} {
    grid-template-columns: initial;
    row-gap: 32px;
  }
`;

const StyledCustomCarouselImg = styled.div<{
  $imgUrl: ICustomCarouselItem["imgUrl"];
}>`
  padding-bottom: 57.59%;
  background-image: url(${(props) => props.$imgUrl});
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.tablet} {
    margin: 0 auto;
    padding-bottom: 0;
    width: 100%;
    max-width: 448px;
    height: 254px;
    order: 2;
  }

  @media ${device.tabletS} {
    padding-bottom: 48.107%;
    height: initial;
  }

  @media ${device.mobile} {
    padding-bottom: 56.92%;
    max-width: 100%;
  }
`;

const StyledCustomCarouselBody = styled.div`
  padding-top: 32px;

  @media ${device.tablet} {
    padding-top: 0;
    text-align: center;
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
  font-size: 17px;
  font-weight: bold;
  line-height: 33px;

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const StyledCustomCarouselParagraph = styled.p`
  font-size: 15px;
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
  gap: 0.5rem;

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
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0.75rem;
  }
`;

const StyledCustomCarouselParagraphLink = styled.a`
  color: #e63946; /* starting with a red tone */
  text-decoration: underline;
  font-weight: 500;
  transition: color 0.3s ease, text-decoration 0.3s ease;

  &:hover {
    text-decoration: none;
  }
`;

const StyledCustomCarouselList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #1d1d1d;
`;

const StyledCustomCarouselListItem = styled.li`
  position: relative;
  padding-left: 24px;
  margin-bottom: 8px;
  line-height: 1.6;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 7px;
    width: 8px;
    height: 8px;
    background-color: #f04c3e; /* ONLYOFFICE red */
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
