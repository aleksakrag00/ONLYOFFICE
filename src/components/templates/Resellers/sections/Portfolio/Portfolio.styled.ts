import styled from "styled-components";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";

const StyledPortfolioHeader = styled.div`
  display: grid;
  row-gap: 24px;
  margin: 0 auto 56px;
  max-width: 736px;
  text-align: center;

  @media ${device.tabletS} {
    margin-bottom: 24px;
  }

  @media ${device.mobile} {
    margin-bottom: 32px;
  }
`;

const StyledPortfolioText = styled(Text)`
  font-size: 18px;
  line-height: 150%;

  @media ${device.tabletS} {
    font-size: 16px;
  }

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const StyledPortfolio = styled.div`
  display: grid;
  row-gap: 32px;

  @media ${device.tabletS} {
    margin: 0 -40px;
  }

  @media ${device.mobile} {
    margin: 0 -16px;
  }
`;

export { StyledPortfolioHeader, StyledPortfolioText, StyledPortfolio };
