import type { Meta, StoryObj } from '@storybook/react'
import {
  ArrowRightIcon,
  Box,
  Button,
  ButtonProps,
  Image,
} from '@venusui/components'

export default {
  title: 'Interaction/Button',
  component: Button,
  args: {
    children: 'Send',
    color: 'highcontrast',
    size: 1,
    disabled: false,
    outlined: false,
    transparent: false,
    ghost: false,
  },
  argTypes: {
    size: {
      options: [1, 2, 3],
      control: {
        type: 'inline-radio',
      },
    },
    color: {
      options: ['highcontrast', 'lowcontrast'],
      control: {
        type: 'inline-radio',
      },
    },
    transparent: {
      control: {
        type: 'boolean',
      },
    },
    outlined: {
      control: {
        type: 'boolean',
      },
    },
    ghost: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    readOnly: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'clicked' },
  },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRightIcon />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}

export const TransparentBlack = () => {
  return (
    <Box
      css={{
        position: 'relative',
        marginTop: '$6',
      }}
    >
      <Image src="https://images.unsplash.com/photo-1453235421161-e41b42ebba05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80" />
      <Box
        css={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          margin: '$4',
        }}
      >
        <Button color="lowcontrast" transparent>
          Transparent
        </Button>
      </Box>
    </Box>
  )
}

export const TransparentWhite = () => {
  return (
    <Box
      css={{
        position: 'relative',
        marginTop: '$6',
      }}
    >
      <Image src="https://images.unsplash.com/photo-1447690709975-318628b14c57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80" />
      <Box
        css={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          margin: '$4',
        }}
      >
        <Button color="highcontrast" transparent>
          Transparent
        </Button>
      </Box>
    </Box>
  )
}
