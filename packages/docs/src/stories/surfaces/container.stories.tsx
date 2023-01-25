import type { Meta, StoryObj } from '@storybook/react'
import {
  Box, Button, Container, ContainerProps, Flex, Grid, Paragraph, Text, TextField
} from '@venusui/components'

export default {
  title: 'Surfaces/Container',
  component: Container,
  args: {
    children: <Text>Box element testing</Text>,
    css: { backgroundColor: '$indigo4', px: '$2', py: '$4' },
  },
  argTypes: {
    size: {
      options: [1,2,3,4],
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
         css={{
          padding: '$5',
          marginBottom: '$2',
          border: '1px solid $slate6',
          borderRadius: '$3',
         }}
       >
         <form>
           <TextField
             type="email"
             size="2"
             placeholder="Email"
             autoComplete="off"
             css={{ marginBottom: '$3' }}
           />
           <TextField
             type="password"
             size="2"
             placeholder="Password"
             autoComplete="off"
             css={{ marginBottom: '$3' }}
           />
           <Flex css={{ alignItems: 'center', justifyContent: 'space-between', mt: '$2' }}>
             <Text size="2" css={{ color: '$slate11' }}>
               Forgot password
             </Text>
             <Button size="2" variant="primary">
               Log in
             </Button>
           </Flex>
         </form>
       </Box>
     </Container>
     <Container size="2" css={{ my: '$8' }}>
       <Paragraph>
         This is a really long paragraph of text, to demonstrate prose text, like
         for example, the kind you might read in a blog post. The reason we're
         using prose here is because the most common use case for this container
         size is longform text. So we're previewing some longform text here so we
         can make sure the container width provides an optimal line length for
         this font size.
       </Paragraph>
     </Container>
     <Container size="3" css={{ my: '$8' }}>
       <Grid
         css={{
           gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
           gap: '$7',
         }}
       >
         <Box>
           <Text as="p" size="4" css={{ lineHeight: '27px' }}>
             This is a much shorter paragraph of text, to demonstrate narrow text
             container. The reason we're using text here is because one common
             use case for this container size is a 3-up grid.
           </Text>
         </Box>
         <Box>
           <Text as="p" size="4" css={{ lineHeight: '27px' }}>
             This is a much shorter paragraph of text, to demonstrate narrow text
             container. The reason we're using text here is because one common
             use case for this container size is a 3-up grid.
           </Text>
         </Box>
         <Box>
           <Text as="p" size="4" css={{ lineHeight: '27px' }}>
             This is a much shorter paragraph of text, to demonstrate narrow text
             container. The reason we're using text here is because one common
             use case for this container size is a 3-up grid.
           </Text>
         </Box>
       </Grid>
     </Container>
     <Container size="4">
       <Text
         as="p"
         size="3"
         css={{
           textAlign: 'center',
           backgroundColor: '$slate3',
           paddingTop: '$2',
           paddingBottom: '$2',
         }}
       >
         No max width
       </Text>
     </Container>
   </>
  )
}
