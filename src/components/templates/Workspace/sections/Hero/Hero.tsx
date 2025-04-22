import { useTranslation } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";
import {
  StyledWorkspaceHero,
  StyledWorkspaceHeroWrapper,
  StyledWorkspaceHeroContent,
  StyledWorkspaceHeroImage,
} from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("workspace");

  return (
    <StyledWorkspaceHero
      desktopSpacing={["120px", "80px"]}
      tabletSpacing={["120px", "80px"]}
      tabletSmallSpacing={["136px", "32px"]}
      mobileSpacing={["96px", "48px"]}
    >
      <Container>
        <StyledWorkspaceHeroWrapper>
          <StyledWorkspaceHeroContent>
            <Heading level={1}>{t("HeroTitle")}</Heading>
            <Text size={1} label={t("HeroText")} />
            <Button
              id={t("GetItNowButton")}
              as="a"
              href={
                "https://www.onlyoffice.com/download-workspace.aspx?from=workspace"
              }
              label={t("GetItNowButton")}
            />
          </StyledWorkspaceHeroContent>
          <StyledWorkspaceHeroImage />
        </StyledWorkspaceHeroWrapper>
      </Container>
    </StyledWorkspaceHero>
  );
};

export { Hero };
