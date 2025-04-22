// File: CustomCarousel.tsx
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import {
  StyledCustomCarousel,
  StyledCustomCarouselWrapper,
  StyledCustomCarouselImg,
  StyledCustomCarouselBody,
  StyledCustomCarouselHeading,
  StyledCustomCarouselButtons,
  StyledCustomCarouselButton,
  StyledCustomCarouselParagraph,
  StyledCustomCarouselParagraphLink,
  StyledCustomCarouselList,
  StyledCustomCarouselListItem,
} from "./CustomCarousel.styled";
import { ICustomCarousel } from "./CustomCarousel.types";
import { Trans, useTranslation } from "react-i18next";
import { Modal } from "@src/components/ui/Modal";
import { StyledCustomWatchVideoModal } from "../CustomWatchVideo/CustomWatchVideo.styled";

const CustomCarousel = ({ id, className, items }: ICustomCarousel) => {
  const { t } = useTranslation("workspace");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
    }
  };

  const it = [
    {
      imgUrl: "/images/templates/workspace/manage-processes/slide1.png",
      button: "Icon1",
      heading: "ManHeader1",
      paragraph: "DocsContent1",
      contentList: ["DocsList1", "DocsList2", "DocsList3", "DocsList4"],
      otherLinksLabel: ["Learn more"],
      otherLinks: ["https://www.onlyoffice.com/projects.aspx?from=workspace"],
    },
    {
      imgUrl: "/images/templates/workspace/manage-processes/slide2.png",
      heading: "ManHeader2",
      button: "Icon2",
      paragraph: "MailsContent1",
      contentList: ["MailsList1", "MailsList2", "MailsList3"],
      otherLinksLabel: ["Learn more"],
      otherLinks: ["https://www.onlyoffice.com/mail.aspx?from=workspace"],
    },
    {
      imgUrl: "/images/templates/workspace/manage-processes/slide3.png",
      heading: "ManHeader3",
      button: "Icon3",
      paragraph: "CrmContent1",
      contentList: ["CrmList1", "CrmList2", "CrmList3"],
      otherLinksLabel: ["Learn more"],
      otherLinks: ["https://www.onlyoffice.com/crm.aspx?from=workspace"],
    },
    {
      imgUrl: "/images/templates/workspace/manage-processes/slide4.png",
      heading: "ManHeader4",
      button: "Icon4",
      paragraph: "ProContent1",
      contentList: ["ProList1", "ProList2", "ProList3"],
      otherLinksLabel: ["Learn more", "Watch video presentation"],
      otherLinks: ["https://www.onlyoffice.com/projects.aspx?from=workspace"],
    },
    {
      imgUrl: "/images/templates/workspace/manage-processes/slide5.png",
      heading: "ManHeader5",
      button: "Icon5",
      paragraph: "CalContent1",
      contentList: ["CalList1", "CalList2", "CalList3"],
      otherLinksLabel: ["Learn more"],
      otherLinks: [],
    },
  ];

  return (
    <StyledCustomCarousel id={id} className={className}>
      <StyledCustomCarouselButtons>
        {items.map((_, index) => (
          <StyledCustomCarouselButton
            key={index}
            onClick={() => handleSlideChange(index)}
            $active={activeIndex === index}
          >
            <img
              src={`/images/templates/workspace/manage-processes/button${
                index + 1
              }.svg`}
              alt={`Button ${index + 1}`}
            />
            <span>{t(it[index].button)}</span>
          </StyledCustomCarouselButton>
        ))}
      </StyledCustomCarouselButtons>

      <Swiper
        spaceBetween={32}
        speed={500}
        loop
        autoHeight
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        onSwiper={(swiper) => {
          swiperRef.current = { swiper };
          setActiveIndex(swiper.realIndex);
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {it.map((item, index) => (
          <SwiperSlide key={index}>
            <StyledCustomCarouselWrapper>
              <StyledCustomCarouselBody>
                <StyledCustomCarouselHeading>
                  {t(item.heading)}
                </StyledCustomCarouselHeading>
                <StyledCustomCarouselParagraph>
                  <Trans
                    i18nKey={item.paragraph}
                    ns="workspace"
                    components={[
                      <StyledCustomCarouselParagraphLink
                        href="https://www.onlyoffice.com/document-editor.aspx?from=workspace"
                        key="1"
                        rel="noopener noreferrer"
                      />,
                      <StyledCustomCarouselParagraphLink
                        href="https://www.onlyoffice.com/spreadsheet-editor.aspx?from=workspace"
                        key="2"
                        rel="noopener noreferrer"
                      />,
                      <StyledCustomCarouselParagraphLink
                        href="https://www.onlyoffice.com/slides.aspx?from=workspace"
                        key="3"
                        rel="noopener noreferrer"
                      />,
                      <StyledCustomCarouselParagraphLink
                        href="https://www.onlyoffice.com/pdf-editor.aspx?from=workspace"
                        key="4"
                        rel="noopener noreferrer"
                      />,
                      <StyledCustomCarouselParagraphLink
                        href="https://www.onlyoffice.com/form-creator.aspx?from=workspace"
                        key="5"
                        rel="noopener noreferrer"
                      />,
                    ]}
                  />
                </StyledCustomCarouselParagraph>
                <StyledCustomCarouselList>
                  {item.contentList.map((i, ind) => (
                    <StyledCustomCarouselListItem key={ind}>
                      {t(i)}
                    </StyledCustomCarouselListItem>
                  ))}
                </StyledCustomCarouselList>
                <StyledCustomCarouselParagraphLink href={item.otherLinks[0]}>
                  {item.otherLinksLabel[0]}
                </StyledCustomCarouselParagraphLink>
              </StyledCustomCarouselBody>
              <StyledCustomCarouselImg $imgUrl={item.imgUrl} />
            </StyledCustomCarouselWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledCustomCarousel>
  );
};

export { CustomCarousel };
