import { useTranslation, Trans } from "next-i18next";
import {
  StyledHowToStart,
  StyledHowToStartInfo,
} from "@src/components/templates/OfficeForAlfresco/sections/HowToStart/HowToStart.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
//import { items } from "@src/components/templates/OfficeForAlfresco/sections/HowToStart/data/items";
import { items } from "./data/items";
import { CustomCarousel } from "./CustomCarousel";
import { CustomWatchVideo } from "./CustomWatchVideo";

const ManageProcesses = () => {
  const { t } = useTranslation("workspace");

  return (
    <StyledHowToStart id="how-to-start" background="#ffffff">
      <Container>
        <Heading level={2} textAlign="center" label={t("ManageTitle")} />

        <CustomCarousel
          items={items.map((item) => ({
            imgUrl: item.imgUrl,
            heading: item.headingLinks ? (
              <Trans
                t={t}
                i18nKey={String(item.heading)}
                components={item.headingLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    target={link.isExternal ? "_blank" : undefined}
                    color="main"
                    textUnderline
                    hover="underline-none"
                  />
                ))}
              />
            ) : (
              t(String(item.heading))
            ),
          }))}
        />

        <StyledHowToStartInfo>
          <CustomWatchVideo
            heading={t("VideoHeader")}
            videoImgUrl="/images/templates/workspace/manage-processes/video.png"
            videoUrl="https://www.youtube.com/embed/tTuH1HrxupA?si=m7ERqCXavlnw1uvs"
            paragraph={t("VideoContent")}
          />
        </StyledHowToStartInfo>
      </Container>
    </StyledHowToStart>
  );
};

export { ManageProcesses };
