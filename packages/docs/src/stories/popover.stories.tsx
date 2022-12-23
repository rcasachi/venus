/* eslint-disable react/no-unescaped-entities */
import {
  Flex,
  Box,
  Popover,
  Button,
  Text,
  PopoverTrigger,
  PopoverContent,
  IconButton,
  VideoIcon,
  Badge,
  CaretDownIcon,
} from '@venusui/components'

export default { title: 'Popover' }

export const popovers = () => (
  <>
    <Flex css={{ gap: '$6', flexWrap: 'wrap' }}>
      <Popover>
        <PopoverTrigger asChild>
          <Button>Popover</Button>
        </PopoverTrigger>
        <PopoverContent css={{ padding: '$3' }}>
          <Text size="2" css={{ lineHeight: '18px' }}>
            The other main improvement is with tables, which we'll probably use
            a lot. With horizontal overflow on small devices and when zoomed in.
          </Text>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button>Hide arrow</Button>
        </PopoverTrigger>
        <PopoverContent css={{ padding: '$3' }} hideArrow>
          <Text size="2" css={{ lineHeight: '18px' }}>
            The other main improvement is with tables, which we'll probably use
            a lot. With horizontal overflow on small devices and when zoomed in.
          </Text>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="blue">Blue</Button>
        </PopoverTrigger>
        <PopoverContent css={{ padding: '$3' }}>
          <Text size="2" css={{ lineHeight: '18px' }}>
            The other main improvement is with tables, which we'll probably use
            a lot. With horizontal overflow on small devices and when zoomed in.
          </Text>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="green">Green</Button>
        </PopoverTrigger>
        <PopoverContent css={{ padding: '$3' }}>
          <Text size="2" css={{ lineHeight: '18px' }}>
            The other main improvement is with tables, which we'll probably use
            a lot. With horizontal overflow on small devices and when zoomed in.
          </Text>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="red">Red</Button>
        </PopoverTrigger>
        <PopoverContent css={{ padding: '$3' }}>
          <Text size="2" css={{ lineHeight: '18px' }}>
            The other main improvement is with tables, which we'll probably use
            a lot. With horizontal overflow on small devices and when zoomed in.
          </Text>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button ghost>Ghost</Button>
        </PopoverTrigger>
        <PopoverContent css={{ padding: '$3' }}>
          <Text size="2" css={{ lineHeight: '18px' }}>
            The other main improvement is with tables, which we'll probably use
            a lot. With horizontal overflow on small devices and when zoomed in.
          </Text>
        </PopoverContent>
      </Popover>
      <Popover>
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
      </Popover>
      <Popover>
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
      </Popover>
    </Flex>
  </>
)
