
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    { name: 'storybook-design-token', options: { preserveCSSVars: true } }
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};

export default config;

