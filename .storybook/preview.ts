import type { Preview } from "@storybook/react";
import ImageSliderDecorator from "../src/decorators/ImageSliderDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [ ImageSliderDecorator ]
};

export default preview;
