import { Meta, StoryFn } from "@storybook/react";
import { CustomCarousel } from "./CustomCarousel";
import { ICustomCarousel } from "./CustomCarousel.types";
import { Container } from "@src/components/ui/Container";

export default {
  title: "CustomCarousel",
  component: CustomCarousel,
  parameters: {
    docs: {
      description: {
        component:
          "The CustomCarousel component displays a carousel list of steps.",
      },
    },
    argTypes: {
      id: {
        control: { type: "text" },
      },
      className: {
        control: { type: "text" },
      },
      items: {
        control: {
          type: "object",
        },
      },
    },
  },
} as Meta<typeof CustomCarousel>;

const Template: StoryFn<ICustomCarousel> = (args: ICustomCarousel) => (
  <Container>
    <CustomCarousel {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      imgUrl: "/images/storybook/widgets/step-carousel/step-1.svg",
      heading: "Log into your Box account",
    },
    {
      imgUrl: "/images/storybook/widgets/step-carousel/step-2.svg",
      heading: "Go to the Box App Center",
    },
    {
      imgUrl: "/images/storybook/widgets/step-carousel/step-3.svg",
      heading: "Add the ONLYOFFICE app*",
    },
  ],
};
