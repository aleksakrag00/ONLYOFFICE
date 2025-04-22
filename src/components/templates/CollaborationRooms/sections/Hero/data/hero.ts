import { IRoomsHero } from "@src/components/modules/rooms/RoomsHero";

export const hero: IRoomsHero = {
  heading: "WorkTogetherBetterInCollaborationRooms",
  text: "EnjoyStressFreeCoEditing",
  items: [
    { label: "IdealForTeamwork" },
    { label: "SecureForSensitiveDocuments" },
    { label: "ConvenientForMultipleCoAuthors" },
    { label: "CostEffectiveForAnyBudget" },
  ],
  button: {
    label: "CreateFreeAccount",
    href: "/docspace-registration",
  },
  image: {
    url: "HeroImgUrl",
    url2x: "HeroImgUrl2x",
  },
};
