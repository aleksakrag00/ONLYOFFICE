import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledGettingStartedHeading = styled(Heading)`
  margin: 0 auto 56px;
  font-size: 32px;

  @media ${device.mobile} {
    margin: 0 auto 32px;
    font-size: 24px;
  }
`;

const StyledGettingStartedParagraph = styled.p`
  margin: 0 auto;
  text-align: center;
  width: 607px;
  font-family: "Open Sans", sans-serif, Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 160%;
  color: #333333;
`;

const StyledGettingStartedLink = styled.a`
  color: #ff6f3d;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const StyledGettingStartedItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  margin-top: 56px;
  margin-bottom: 56px;

  .blog-card {
    @media ${device.tablet} {
      max-width: 352px;
      min-width: 352px;
    }

    @media ${device.mobile} {
      max-width: 272px;
      min-width: 272px;
    }
  }

  @media ${device.tablet} {
    margin: 0 -40px -32px;
    padding: 0 40px 32px;
    overflow-x: auto;
  }

  @media ${device.mobile} {
    column-gap: 16px;
    margin: 0 -16px -32px;
    padding: 0 16px 32px;
  }
`;

export {
  StyledGettingStartedHeading,
  StyledGettingStartedItems,
  StyledGettingStartedParagraph,
  StyledGettingStartedLink,
};
