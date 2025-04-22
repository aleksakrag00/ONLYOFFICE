import { useTranslation } from "next-i18next";
import { StyledDocumentsHeading } from "./Documents.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { items } from "./data/items";

const Documents = () => {
  const { t } = useTranslation("office-for-confluence");

  return (
    <Section background="#f9f9f9">
      <Container>
        <StyledDocumentsHeading
          level={2}
          label={t("EditAndCoAuthorOfficeDocuments")}
          textAlign="center"
        />

        <FeatureSwitcher
          items={items.map(({ label, image }) => ({
            label: t(String(label)),
            image: {
              url: t(image.url),
              url2x: image.url2x ? t(image.url2x) : undefined,
            },
          }))}
        />
      </Container>
    </Section>
  );
};

export { Documents };
