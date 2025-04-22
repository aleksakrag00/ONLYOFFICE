import { GettingStarted } from "./sections/GettingStarted";
import { Hero } from "./sections/Hero";
import { ManageProcesses } from "./sections/ManageProcesses";
import { WhyWorkspace } from "./sections/WhyWorkspace";

const WorkspaceTemplate = () => {
  return (
    <>
      <Hero />
      <ManageProcesses />
      <WhyWorkspace />
      <GettingStarted />
    </>
  );
};

export { WorkspaceTemplate };
