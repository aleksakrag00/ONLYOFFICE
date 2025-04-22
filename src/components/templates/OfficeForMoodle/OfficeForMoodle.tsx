import { Hero } from "./sections/Hero";
import { Documents } from "./sections/Documents";
import { Quote } from "./sections/Quote";
import { Assignments } from "./sections/Assignments";
import { MarketplaceConnector } from "./sections/MarketplaceConnector";
import { Features } from "./sections/Features";
import { HowToStart } from "./sections/HowToStart";
import { LearnMore } from "./sections/LearnMore";
import { ConnectApp } from "./sections/ConnectApp";
import { OtherConnectors } from "@src/components/modules/OtherConnectors";

const OfficeForMoodleTemplate = () => {
  return (
    <>
      <Hero />
      <Documents />
      <Quote />
      <Assignments />
      <MarketplaceConnector />
      <Features />
      <HowToStart />
      <LearnMore />
      <ConnectApp />
      <OtherConnectors />
    </>
  );
};

export { OfficeForMoodleTemplate };
