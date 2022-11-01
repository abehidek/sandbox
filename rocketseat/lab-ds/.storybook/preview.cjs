import { themes } from "@storybook/theming";
import { initialize, mswDecorator } from "msw-storybook-addon";
import "../src/index.css";

// Initialize MSW
initialize({
  onUnhandledRequest: "bypass",
});

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
};
