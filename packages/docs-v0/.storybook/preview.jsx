import { ThemeProvider } from '@venusui/components';
import { themes } from '@storybook/theming'
import { theme, darkTheme } from '@venusui/components'

export const decorators = [
  Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
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
  docs: {
    theme: themes.dark,
  },
  multipleThemesStitches: {
    values: [
      {
        name: 'Light',
        theme: theme
      },
      {
        name: 'Dark',
        theme: darkTheme
      },
    ]
  },
}