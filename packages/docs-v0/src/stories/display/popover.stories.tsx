import {
  Badge,
  Box,
  Button,
  CaretDownIcon,
  IconButton,
  Popover,
  PopoverContent,
  PopoverProps,
  PopoverTrigger,
  Text,
  VideoIcon
} from '@venusui/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Display/Popover',
  component: Popover,
} as Meta<PopoverProps>

export const ButtonTrigger: StoryObj<PopoverProps> = {
  args: {
    children: (
      <>
        <PopoverTrigger asChild>
          <Button>Popover</Button>
        </PopoverTrigger>
        <PopoverContent css={{ padding: '$3' }}>
          <Text size="2" css={{ lineHeight: '18px' }}>
            The other main improvement is with tables, which we'll probably use
            a lot. With horizontal overflow on small devices and when zoomed in.
          </Text>
        </PopoverContent>
      </>
    )
  },
}

export const HideArrow: StoryObj<PopoverProps> = {
  args: {
    children: (
      <>
        <PopoverTrigger asChild>
          <Button>Hide arrow</Button>
        </PopoverTrigger>
        <PopoverContent css={{ padding: '$3' }} hideArrow>
          <Text size="2" css={{ lineHeight: '18px' }}>
            The other main improvement is with tables, which we'll probably use
            a lot. With horizontal overflow on small devices and when zoomed in.
          </Text>
        </PopoverContent>
      </>
    )
  },
}

export const GhostTrigger: StoryObj<PopoverProps> = {
  args: {
    children: (
      <>
        <PopoverTrigger asChild>
          <Button ghost>Ghost</Button>
        </PopoverTrigger>
        <PopoverContent css={{ padding: '$3' }}>
          <Text size="2" css={{ lineHeight: '18px' }}>
            The other main improvement is with tables, which we'll probably use
            a lot. With horizontal overflow on small devices and when zoomed in.
          </Text>
        </PopoverContent>
      </>
    )
  },
}

export const IconButtonTrigger: StoryObj<PopoverProps> = {
  args: {
    children: (
      <>
        <PopoverTrigger asChild>
          <IconButton>
            <VideoIcon />
          </IconButton>
        </PopoverTrigger>
        <PopoverContent css={{ padding: '$3' }}>
          <Text size="2" css={{ lineHeight: '18px' }}>
            The other main improvement is with tables, which we'll probably use
            a lot. With horizontal overflow on small devices and when zoomed in.
          </Text>
        </PopoverContent>
      </>
    )
  },
}

export const BadgeTrigger: StoryObj<PopoverProps> = {
  args: {
    children: (
      <>
        <PopoverTrigger asChild>
          <Badge size="2" variant="violet" interactive>
            Badge
            <Box css={{ marginLeft: '$1' }}>
              <CaretDownIcon />
            </Box>
          </Badge>
        </PopoverTrigger>
        <PopoverContent css={{ padding: '$3' }}>
          <Text size="2" css={{ lineHeight: '18px' }}>
            The other main improvement is with tables, which we'll probably use
            a lot. With horizontal overflow on small devices and when zoomed in.
          </Text>
        </PopoverContent>
      </>
    )
  },
}
