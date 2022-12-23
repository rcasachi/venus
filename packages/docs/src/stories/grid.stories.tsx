import { Grid, Box } from '@venusui/components'

export default { title: 'Grid' }

export const grids = () => (
  <>
    <Grid columns="4" align="center" gapX="3" gapY="6">
      <Box css={{ height: '$9', backgroundColor: '$blue9' }}></Box>
      <Box css={{ height: '$7', backgroundColor: '$blue9' }}></Box>
      <Box css={{ height: '$7', backgroundColor: '$blue9' }}></Box>
      <Box css={{ height: '$7', backgroundColor: '$blue9' }}></Box>
      <Box css={{ height: '$7', backgroundColor: '$blue9' }}></Box>
      <Box css={{ height: '$7', backgroundColor: '$blue9' }}></Box>
      <Box css={{ height: '$7', backgroundColor: '$blue9' }}></Box>
    </Grid>
  </>
)
