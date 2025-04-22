import { /*Trans,*/ useTranslation } from "next-i18next";
import {
  StyledGettingStartedHeading,
  StyledGettingStartedItems,
  StyledGettingStartedParagraph,
  StyledGettingStartedLink,
} from "./GettingStarted.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
//import { Link } from "@src/components/ui/Link";
//import { ChooseSolution } from "@src/components/widgets/ChooseSolution";
//import { BlogCard } from "@src/components/widgets/BlogCard";
//import { Button } from "@src/components/ui/Button";
import { BlogCardReforged } from "./data/BlogCardReforged";

const GettingStarted = () => {
  const { t } = useTranslation("workspace");

  const items = [
    {
      imgUrl: "/images/templates/workspace/getting-started/item1.svg",
      heading: { label: t("GettingItem1Header") },
      text: t("GettingItem1Description"),
      buttonName: t("GettingItem1Button"),
      buttonLink: t("GettingItem1ButtonLink"),
      buttonOpen: true,
    },
    {
      imgUrl: "/images/templates/workspace/getting-started/item2.svg",
      heading: { label: t("GettingItem2Header") },
      text: t("GettingItem2Description"),
      buttonName: t("GettingItem2Button"),
      buttonLink: t("GettingItem2ButtonLink"),
      buttonOpen: false,
    },
    {
      imgUrl: "/images/templates/workspace/getting-started/item3.svg",
      heading: { label: t("GettingItem3Header") },
      text: t("GettingItem3Description"),
      buttonName: t("GettingItem3Button"),
      buttonLink: t("GettingItem3ButtonLink"),
      buttonOpen: true,
    },
  ];

  return (
    <Section tabletSmallSpacing={["72px", "72px"]} background="#F9F9F9">
      <Container>
        <StyledGettingStartedHeading
          level={2}
          textAlign="center"
          label={t("GettingHeader")}
        />
        <StyledGettingStartedParagraph>
          {t("GettingDescription")}
        </StyledGettingStartedParagraph>
        <StyledGettingStartedItems>
          {items.map((item, index) => (
            <BlogCardReforged
              button={t("GettingItem1Button")}
              buttonLink={t("GettingItem1ButtonLink")}
              targetBlank={item.buttonOpen}
              className="blog-card"
              key={index}
              imgUrl={item.imgUrl}
              heading={{ label: t(item.heading.label) }}
              text={t(item.text ?? "")}
              links={item.links?.map((item) => ({
                href: t(item.href),
                label: t(item.label),
                isExternal: item.isExternal,
              }))}
            />
          ))}
        </StyledGettingStartedItems>
        <StyledGettingStartedParagraph>
          {t("GettingOutro")}
          <StyledGettingStartedLink href="https://www.onlyoffice.com/download-workspace.aspx?from=workspace#workspace-community">
            here.
          </StyledGettingStartedLink>
        </StyledGettingStartedParagraph>
      </Container>
    </Section>
  );
};

export { GettingStarted };
