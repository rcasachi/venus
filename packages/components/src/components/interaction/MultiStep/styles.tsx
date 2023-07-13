import { styled } from '@theme'

export const MultiStepContainer = styled('div', {})

export const Steps = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$2',
  marginTop: '$1',
})

export const Step = styled('div', {
  height: '$1',
  borderRadius: '$px',
  backgroundColor: '$blackA11',

  variants: {
    active: {
      true: {},
    },
    variant: {
      default: {},
      primary: {},
      secondary: {},
    },
  },
  compoundVariants: [
    {
      active: true,
      variant: 'default',
      css: {
        backgroundColor: '$blackA8',
      },
    },
    {
      active: true,
      variant: 'primary',
      css: {
        backgroundColor: '$primary',
      },
    },
    {
      active: true,
      variant: 'secondary',
      css: {
        backgroundColor: '$secondary',
      },
    },
  ],
  defaultVariants: {
    variant: 'default',
  },
})
