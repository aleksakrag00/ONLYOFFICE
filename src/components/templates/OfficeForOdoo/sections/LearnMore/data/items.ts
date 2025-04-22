import { IBlogCard } from "@src/components/widgets/BlogCard";

export const items: IBlogCard[] = [
  {
    imgUrl: "/images/templates/office-for-odoo/learn-more/blog-1.png",
    heading: { label: "Guide" },
    text: "WorkingOnDocuments",
    links: [
      {
        href: "https://medium.com/onlyoffice/working-on-documents-within-odoo-257d6552691d",
        label: "Explore",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "/images/templates/office-for-odoo/learn-more/blog-2.png",
    heading: { label: "Blog" },
    text: "WorkWithFillableTemplates",
    links: [
      {
        href: "https://www.onlyoffice.com/blog/2024/07/onlyoffice-templates-app-odoo",
        label: "LearnMore",
      },
    ],
  },
  {
    imgUrl: "/images/templates/office-for-odoo/learn-more/blog-3.png",
    heading: { label: "Blog" },
    text: "ADetailedGuideOnCreating",
    links: [
      {
        href: "https://www.onlyoffice.com/blog/2024/08/how-to-create-a-new-onlyoffice-form-template-for-odoo",
        label: "LearnMore",
      },
    ],
  },
];
