import React from 'react';
import { ThemeProvider } from '@venusui/components';

export const decorators = [
  Story => (
    <>
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
