import { styled } from '@theme'
import { Arrow, Content } from '@radix-ui/react-tooltip'

export const TooltipContent = styled(Content, {
  backgroundColor: '$transparentPanel',
  borderRadius: '$2',
  padding: '$1 $2',
  userSelect: 'none',

  variants: {
    multiline: {
      true: {
        maxWidth: 250,
        pb: 7,
      },
    },
  },
})

export const TooltipArrow = styled(Arrow, {
  fill: '$transparentPanel',
})
