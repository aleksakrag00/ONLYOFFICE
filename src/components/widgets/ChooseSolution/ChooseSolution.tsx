import {
  StyledChooseSolution,
  StyledChooseSolutionItems,
  StyledChooseSolutionLargeItems,
} from "./ChooseSolution.styled";
import { IChooseSolution } from "./ChooseSolution.types";
import { SolutionCard } from "@src/components/widgets/SolutionCard";

const ChooseSolution = ({
  id,
  className,
  items,
  largeItems,
}: IChooseSolution) => {
  return (
    <StyledChooseSolution id={id} className={className}>
      {items && items.length > 0 && (
        <StyledChooseSolutionItems>
          {items.map((item, index) => (
            <SolutionCard
              imgUrl={item.imgUrl}
              heading={item.heading}
              text={item.text}
              links={item.links}
              customLinks={item.customLinks}
              key={index}
            />
          ))}
        </StyledChooseSolutionItems>
      )}

      {largeItems && largeItems.length > 0 && (
        <StyledChooseSolutionLargeItems>
          {largeItems.map((item, index) => (
            <SolutionCard
              imgUrl={item.imgUrl}
              heading={item.heading}
              text={item.text}
              links={item.links}
              customLinks={item.customLinks}
              large={true}
              key={index}
            />
          ))}
        </StyledChooseSolutionLargeItems>
      )}
    </StyledChooseSolution>
  );
};

export { ChooseSolution };
