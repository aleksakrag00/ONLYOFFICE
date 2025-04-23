import { /*Trans,*/ useTranslation } from "next-i18next";
import { StyledWhyWorkspaceHeading } from "./WhyWorkspace.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
//import { Link } from "@src/components/ui/Link";
import { ChooseSolution } from "@src/components/widgets/ChooseSolution";

const WhyWorkspace = () => {
  const { t } = useTranslation("workspace");

  const items = [
    {
      imgUrl: "/images/templates/workspace/why-workspace/why_icon_1.svg",
      heading: t("WhyItem1Header"),
      text: t("WhyItem1Content"),
      links: [
        {
          id: "Link1",
          name: t("WhyItem1LinkText"),
          url: t("WhyItem1Link"),
        },
      ],
    },
    {
      imgUrl: "/images/templates/workspace/why-workspace/why_icon_2.svg",
      heading: t("WhyItem2Header"),
      text: t("WhyItem2Content"),
      links: [
        {
          id: "Link2",
          name: t("WhyItem2LinkText"),
          url: t("WhyItem2Link"),
        },
      ],
    },
    {
      imgUrl: "/images/templates/workspace/why-workspace/why_icon_3.svg",
      heading: t("WhyItem3Header"),
      text: t("WhyItem3Content"),
    },
  ];

  return (
    <Section
      tabletSmallSpacing={["72px", "72px"]}
      background="linear-gradient(#F8F9F9,#F8F9F900)"
    >
      <Container>
        <StyledWhyWorkspaceHeading
          level={2}
          size={2}
          textAlign="center"
          label={t("WhyHeader")}
        />

        <ChooseSolution
          items={items.map(({ imgUrl, heading, text, links }) => ({
            imgUrl,
            heading: t(heading ?? ""),
            text: typeof text === "string" ? t(text) : "",
            links: links?.map(({ id, name, url }) => ({
              id,
              name: t(name),
              url,
            })),
          }))}
        />
      </Container>
    </Section>
  );
};

export { WhyWorkspace };
