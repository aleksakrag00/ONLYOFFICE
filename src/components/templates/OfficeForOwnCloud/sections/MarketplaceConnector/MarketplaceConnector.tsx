import { useTranslation } from "next-i18next";
import {
  StyledMarketplaceConnector,
  StyledMarketplaceConnectorWrapper,
  StyledMarketplaceConnectorBody,
  StyledMarketplaceConnectorImg,
} from "./MarketplaceConnector.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const MarketplaceConnector = () => {
  const { t } = useTranslation("office-for-owncloud");

  return (
    <StyledMarketplaceConnector>
      <Container>
        <StyledMarketplaceConnectorWrapper>
          <StyledMarketplaceConnectorBody>
            <Heading
              level={2}
              color="#ffffff"
              label={t("MarketplaceConnectorTitle")}
            />
            <Text
              size={1}
              color="#ffffff"
              label={t("MarketplaceConnectorDescription")}
            />
            <Button
              id="marketplace-connector-get-started"
              as="a"
              target="_blank"
              variant="quaternary"
              href="https://marketplace.owncloud.com/apps/onlyoffice"
              label={t("GetStarted")}
            />
          </StyledMarketplaceConnectorBody>
          <StyledMarketplaceConnectorImg />
        </StyledMarketplaceConnectorWrapper>
      </Container>
    </StyledMarketplaceConnector>
  );
};

export { MarketplaceConnector };
