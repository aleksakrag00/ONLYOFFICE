import styled from "styled-components";
import { device } from "@src/utils/device";
import { IBlogCard } from "@src/components/widgets/BlogCard/BlogCard.types";

const StyledBlogCard = styled.div<{ $isLarge: IBlogCard["isLarge"] }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${(props) => (props.$isLarge ? "544px" : "352px")};
  height: 100%;
  box-shadow: 0px 7px 25px 0px rgba(85, 85, 85, 0.15);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

interface BlogCardImgProps {
  $isLarge: boolean;
}

const StyledBlogCardImg = styled.img<BlogCardImgProps>`
  display: block;
  max-width: 140px;
  max-height: 200px;
  margin: 60px auto 0 auto;
  border-radius: 8px;
  object-fit: cover;
`;

const StyledBlogCardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  height: 200px;
  background-color: #f9f9f9;
  top: 0;

  @media ${device.mobile} {
    padding: 24px;
  }
`;

const StyledBlogCardWrapper = styled.div<{ $isLarge: IBlogCard["isLarge"] }>`
  display: flex;
  margin-top: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;

  h3 {
    &:not(:last-child) {
      margin-bottom: ${(props) => (props.$isLarge ? "16px" : "8px")};
    }

    a {
      display: block;
      transition: color 0.2s;

      &:hover {
        color: #ff6f3d;
      }
    }
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export {
  StyledBlogCard,
  StyledBlogCardImg,
  StyledBlogCardBody,
  StyledBlogCardWrapper,
};
