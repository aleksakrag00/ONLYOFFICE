import { ICustomCarouselItem } from "@src/components/templates/Workspace/sections/ManageProcesses/CustomCarousel";

export const items: ICustomCarouselItem[] = [
  {
    imgUrl: "/images/templates/workspace/manage-processes/slide1.png",
    heading: "ManHeader1",
    headingLinks: [
      {
        url: "/download#docs-enterprise",
        isExternal: false,
      },
      {
        url: "/docs-registration",
        isExternal: false,
      },
    ],
  },
  {
    imgUrl: "/images/templates/workspace/manage-processes/slide2.png",
    heading: "ManHeader2",
    headingLinks: [
      {
        url: "https://hub.alfresco.com/t5/alfresco-content-services-add/onlyoffice-connector-for-alfresco/td-p/291397",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "/images/templates/workspace/manage-processes/slide3.png",
    heading: "ManHeader3",
  },
  {
    imgUrl: "/images/templates/workspace/manage-processes/slide4.png",
    heading: "ManHeader4",
  },
  {
    imgUrl: "/images/templates/workspace/manage-processes/slide5.png",
    heading: "ManHeader5",
  },
];
