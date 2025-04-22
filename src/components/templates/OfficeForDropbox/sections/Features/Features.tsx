import { useTranslation, Trans } from "next-i18next";
import { StyledFeaturesWrapper, StyledFeaturesItems } from "./Features.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";
import { items } from "./data/items";
import { FeatureItem } from "@src/components/widgets/FeatureItem";

const Features = () => {
  const { t } = useTranslation("office-for-dropbox");

  return (
    <Section>
      <Container>
        <StyledFeaturesWrapper>
          <Heading level={2} textAlign="center" label={t("WhyOO")} />

          <StyledFeaturesItems>
            {items.map((item, index) => (
              <FeatureItem
                icon={{
                  url: item.icon.url,
                }}
                text={
                  <Trans
                    t={t}
                    i18nKey={String(item.text)}
                    components={[<b key="0" />]}
                  />
                }
                key={index}
              />
            ))}
          </StyledFeaturesItems>

          <Button
            id="features-get-started"
            as="a"
            variant="secondary"
            href="https://dropbox.onlyoffice.com/oauth/redirect"
            label={t("GetStarted")}
          />
        </StyledFeaturesWrapper>
      </Container>
    </Section>
  );
};

export { Features };
