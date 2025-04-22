import { ISolutionCard } from "@src/components/widgets/SolutionCard";
import { IDownloadButton } from "@src/components/ui/DownloadButton";

export interface ISolutionCardExtended
  extends Omit<ISolutionCard, "customLinks"> {
  customLinks?: {
    id?: string;
    label?: string;
    platform?: IDownloadButton["platform"];
    url: string;
    isExternal?: boolean;
  }[];
}

export const items: ISolutionCardExtended[] = [
  {
    imgUrl: "/images/templates/office-for-owncloud/free-apps/desktop.svg",
    text: "FreeAppsDesktopText",
    customLinks: [
      {
        id: "free-apps-free-desktop-apps",
        label: "GetFreeDesktopApps",
        url: "/download-desktop?from=officeforowncloud",
        isExternal: false,
      },
    ],
  },
  {
    imgUrl: "/images/templates/office-for-owncloud/free-apps/mobile.svg",
    text: "FreeAppsMobileText",
    customLinks: [
      {
        id: "free-apps-google-play",
        platform: "google-play",
        url: "https://play.google.com/store/apps/details?id=com.onlyoffice.documents",
        isExternal: true,
      },
      {
        id: "free-apps-app-store",
        platform: "app-store",
        url: "https://apps.apple.com/us/app/onlyoffice-documents/id944896972",
        isExternal: true,
      },
    ],
  },
];
