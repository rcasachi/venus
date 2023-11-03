/* eslint-disable react/no-unescaped-entities */
import type { Meta, StoryObj } from '@storybook/react'
import { Button, Grid, Paragraph, Text, TextField } from '@venusui/components'
import {
  Box,
  Container,
  type ContainerProps,
  Flex,
} from '@venusui/design-system'

export default {
  title: 'Surfaces/Container',
  component: Container,
  args: {
    children: <Text>Container element testing</Text>,
    style: { backgroundColor: '#3388', padding: 'var(--space-2)' },
  },
  argTypes: {
    size: {
      options: [1, 2, 3, 4],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ContainerProps>

export const Default: StoryObj<ContainerProps> = {}

export const Examples: StoryObj<ContainerProps> = {
  render: () => (
    <>
      <Container size="1">
        <Box
          style={{
            marginBottom: 'var(--space-2)',
            border: '1px solid #334455',
            borderRadius: 'var(--border-radio-3)',
          }}
          className="p-5"
        >
          <form>
            <TextField
              type="email"
              size="2"
              placeholder="Email"
              autoComplete="off"
              style={{ marginBottom: 'var(--space-3)' }}
            />
            <TextField
              type="password"
              size="2"
              placeholder="Password"
              autoComplete="off"
              style={{ marginBottom: 'var(--space-3)' }}
            />
            <Flex
              align="center"
              justify="between"
              style={{
                marginTop: 'var(--space-2)',
              }}
            >
              <Text size="2" style={{ color: '#98ff98' }}>
                Forgot password
              </Text>
              <Button size="2" variant="primary">
                Log in
              </Button>
            </Flex>
          </form>
        </Box>
      </Container>
      <Container size="2" style={{ margin: 'var(--space-8)' }}>
        <Paragraph>
          This is a really long paragraph of text, to demonstrate prose text,
          like for example, the kind you might read in a blog post. The reason
          we're using prose here is because the most common use case for this
          container size is longform text. So we're previewing some longform
          text here so we can make sure the container width provides an optimal
          line length for this font size.
        </Paragraph>
      </Container>
      <Container size="3" style={{ margin: 'var(--space-8)' }}>
        <Grid
          style={{
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 'var(--space-7)',
          }}
        >
          <Box>
            <Text as="p" size="4" style={{ lineHeight: '27px' }}>
              This is a much shorter paragraph of text, to demonstrate narrow
              text container. The reason we're using text here is because one
              common use case for this container size is a 3-up grid.
            </Text>
          </Box>
          <Box>
            <Text as="p" size="4" style={{ lineHeight: '27px' }}>
              This is a much shorter paragraph of text, to demonstrate narrow
              text container. The reason we're using text here is because one
              common use case for this container size is a 3-up grid.
            </Text>
          </Box>
          <Box>
            <Text as="p" size="4" style={{ lineHeight: '27px' }}>
              This is a much shorter paragraph of text, to demonstrate narrow
              text container. The reason we're using text here is because one
              common use case for this container size is a 3-up grid.
            </Text>
          </Box>
        </Grid>
      </Container>
      <Container size="4">
        <Text
          as="p"
          size="3"
          style={{
            textAlign: 'center',
            backgroundColor: '#131313',
            paddingTop: 'var(--space-2)',
            paddingBottom: 'var(--space-2)',
          }}
        >
          No max width
        </Text>
      </Container>
    </>
  ),
}
