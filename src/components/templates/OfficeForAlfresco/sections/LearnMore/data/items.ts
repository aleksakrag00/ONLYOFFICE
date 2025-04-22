import { IBlogCard } from "@src/components/widgets/BlogCard";

export const items: IBlogCard[] = [
  {
    imgUrl: "/images/templates/office-for-alfresco/learn-more/help-center.jpg",
    heading: { label: "HelpCenter" },
    text: "UsefulGuides",
    links: [
      {
        href: "https://helpcenter.onlyoffice.com/integration/alfresco.aspx",
        label: "VisitOurHelpCenter",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl:
      "/images/templates/office-for-alfresco/learn-more/success-story.jpg",
    heading: { label: "SuccessStory" },
    text: "AtolCDReinforcesOnlineCollaboration",
    links: [
      {
        href: "https://www.onlyoffice.com/blog/2020/11/atol-cd-reinforces-online-collaboration-in-alfresco-digital-workspace-by-integrating-onlyoffice-docs",
        label: "ReadTheFullStory",
      },
    ],
  },
];
