import { useTranslation } from "next-i18next";
import {
  StyledDocumentsHeading,
  StyledDocumentsBtnWrapper,
} from "./Documents.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { Button } from "@src/components/ui/Button";
import { items } from "./data/items";

const Documents = () => {
  const { t } = useTranslation("office-for-nextcloud");

  return (
    <Section background="#f9f9f9">
      <Container>
        <StyledDocumentsHeading
          level={2}
          label={t("EditAndCoAuthorOfficeDocuments")}
          textAlign="center"
        />

        <FeatureSwitcher
          imageHeight={540}
          items={items.map(({ label, image }) => ({
            label: t(String(label)),
            image: {
              url: t(image.url),
              url2x: image.url2x ? t(image.url2x) : undefined,
            },
          }))}
        />

        <StyledDocumentsBtnWrapper>
          <Button
            id="documents-get-it-now"
            as="a"
            href="/download?from=officefornextcloud#docs-enterprise"
            label={t("GetItNow")}
          />
        </StyledDocumentsBtnWrapper>
      </Container>
    </Section>
  );
};

export { Documents };
