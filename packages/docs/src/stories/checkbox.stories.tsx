// import { Flex, Heading, Checkbox } from '@venusui/components'

// export default { title: 'Checkbox' }

// export const checkboxes = () => (
//   <>
//     <Heading css={{ marginBottom: '$6' }}>Sizes</Heading>
//     <Flex>
//       <Checkbox css={{ marginRight: '$5' }} />
//       <Checkbox size="2" css={{ marginRight: '$5' }} />
//     </Flex>
//   </>
// )
import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@venusui/components'

export default {
  title: 'Interaction/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
