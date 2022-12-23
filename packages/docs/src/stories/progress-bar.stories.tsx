import { Heading, ProgressBar, Text, Box } from '@venusui/components'

export default { title: 'ProgressBar' }

export const bars = () => (
  <>
    <Heading css={{ mb: '$6' }}>Default</Heading>
    <Box css={{ mb: '$6' }}>
      <ProgressBar value={50} />
    </Box>
    <Heading css={{ mb: '$6' }}>Indeterminate state</Heading>
    <Box css={{ mb: '$6' }}>
      <Text size="2">Indeterminate</Text>
      <ProgressBar css={{ my: '$2' }} />
    </Box>
    <Heading css={{ mb: '$6' }}>UI test</Heading>
    <Box css={{ mb: '$6' }}>
      <Text size="2">Download 50% complete</Text>
      <ProgressBar max={100} value={80} css={{ my: '$2' }} />
      <Text size="1" css={{ color: '$slate11' }}>
        46 hours remaining
      </Text>
    </Box>
    <Heading css={{ mb: '$6' }}>Gradient variant</Heading>
    <Box css={{ mb: '$6' }}>
      <ProgressBar max={100} variant="gradient" value={100} />
    </Box>
    <Heading css={{ mb: '$6' }}>Blue variant</Heading>
    <Box>
      <ProgressBar variant="blue" max={100} value={50} />
    </Box>
  </>
)
