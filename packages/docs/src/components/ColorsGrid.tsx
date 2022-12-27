import { Text, Flex, Grid, Box } from '@venusui/components'
import { LightThemeColors, DarkThemeColors } from '@venusui/tokens'

const lightColors = { ...LightThemeColors.tone, ...LightThemeColors.colors }
const darkColors = { ...DarkThemeColors.tone, ...DarkThemeColors.colors }
const colors = { ...lightColors, ...darkColors }

export function ColorsGrid() {
  return (
    <Grid columns="10" align="center" gapX="3" gapY="6">
      {Object.entries(colors).map(([key, color]) => {
        return (
          <Flex direction="column">
            <Box key={key} css={{ backgroundColor: color, padding: '2rem' }} />
            <Text css={{fontWeight: '$3', display: 'block'}} variant="yellow" as="div">${key}</Text>
          </Flex>
        )
      })}
    </Grid>
  )
}
