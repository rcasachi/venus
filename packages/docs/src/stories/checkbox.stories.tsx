import { Flex, Heading, Checkbox } from '@venusui/components'

export default { title: 'Checkbox' }

export const checkboxes = () => (
  <>
    <Heading css={{ marginBottom: '$6' }}>Sizes</Heading>
    <Flex>
      <Checkbox css={{ marginRight: '$5' }} />
      <Checkbox size="2" css={{ marginRight: '$5' }} />
    </Flex>
  </>
)
