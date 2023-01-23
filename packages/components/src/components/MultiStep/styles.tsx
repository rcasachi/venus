import { styled } from '@theme'
import { Text } from '@components/typography/Text'

export const MultiStepContainer = styled('div', {})

export const Label = styled(Text, {
  color: '$gray12',

  defaultVariants: {
    size: 'xs',
  },
})

export const Steps = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$2',
  marginTop: '$1',
})

export const Step = styled('div', {
  height: '$1',
  borderRadius: '$px',
  backgroundColor: '$gray12',

  variants: {
    active: {
      true: {
        backgroundColor: '$gray4',
      },
    },
  },
})
