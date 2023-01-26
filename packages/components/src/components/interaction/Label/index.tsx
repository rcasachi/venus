import { styled } from '@theme'
import * as LabelPrimitive from '@radix-ui/react-label'

import { Text } from '@components/typography/Text'

export const Label = styled(LabelPrimitive.Root, Text, {
  display: 'inline-block',
  verticalAlign: 'middle',
  cursor: 'default',
})

Label.displayName = 'Label'
