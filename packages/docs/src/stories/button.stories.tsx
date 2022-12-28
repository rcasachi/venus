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
    variant: 'primary',
    size: '2',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: [
        'primary',
        'secondary',
        'ghost',
        'transparentWhite',
        'transparentBlack',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['1', '2', '3'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'clicked' },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Ghost: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: '1',
  },
}

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
        <Button variant="transparentBlack">Transparent</Button>
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
        <Button variant="transparentWhite">Transparent</Button>
      </Box>
    </Box>
  )
}
