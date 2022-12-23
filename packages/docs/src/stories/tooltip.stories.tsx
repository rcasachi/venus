import { Box, Tooltip } from '@venusui/components'

export default { title: 'Tooltip' }

export const tooltips = () => (
  <>
    <Tooltip content="Tooltip for this box">
      <Box css={{ width: '$8', height: '$8', backgroundColor: '$blue9' }}></Box>
    </Tooltip>
  </>
)
