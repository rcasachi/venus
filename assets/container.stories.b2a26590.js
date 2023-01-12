var m=Object.defineProperty;var r=(a,c)=>m(a,"name",{value:c,configurable:!0});import{E as o,B as t,J as i,F as l,b as n,u as p,z as h,G as d}from"./index.ab77ce9b.js";import{a as s,F as g,j as e}from"./jsx-runtime.6c6bd70f.js";import"./index.38bf7259.js";import"./iframe.737cbf69.js";const w={parameters:{storySource:{source:`
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Paragraph,
  Text,
  TextField,
} from '@venusui/components'

export default { title: 'Container' }

export const containerForm = () => (
  <>
    <Container size="1">
      <Box
        css={{
          padding: '$5',
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
          <Flex css={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Text size="2" css={{ color: '$slate11' }}>
              Forgot password
            </Text>
            <Button size="2" variant="blue">
              Log in
            </Button>
          </Flex>
        </form>
      </Box>
    </Container>
    <Container size="2" css={{ marginTop: '$9', marginBottom: '$9' }}>
      <Paragraph>
        This is a really long paragraph of text, to demonstrate prose text, like
        for example, the kind you might read in a blog post. The reason we're
        using prose here is because the most common use case for this container
        size is longform text. So we're previewing some longform text here so we
        can make sure the container width provides an optimal line length for
        this font size.
      </Paragraph>
    </Container>
    <Container size="3" css={{ marginTop: '$9', marginBottom: '$9' }}>
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
`,locationsMap:{"container-form":{startLoc:{col:29,line:15},endLoc:{col:1,line:106},startBody:{col:29,line:15},endBody:{col:1,line:106}}}}},title:"Container"},$=r(()=>s(g,{children:[e(o,{size:"1",children:e(t,{css:{padding:"$5",border:"1px solid $slate6",borderRadius:"$3"},children:s("form",{children:[e(i,{type:"email",size:"2",placeholder:"Email",autoComplete:"off",css:{marginBottom:"$3"}}),e(i,{type:"password",size:"2",placeholder:"Password",autoComplete:"off",css:{marginBottom:"$3"}}),s(l,{css:{alignItems:"center",justifyContent:"space-between"},children:[e(n,{size:"2",css:{color:"$slate11"},children:"Forgot password"}),e(p,{size:"2",variant:"blue",children:"Log in"})]})]})})}),e(o,{size:"2",css:{marginTop:"$9",marginBottom:"$9"},children:e(h,{children:"This is a really long paragraph of text, to demonstrate prose text, like for example, the kind you might read in a blog post. The reason we're using prose here is because the most common use case for this container size is longform text. So we're previewing some longform text here so we can make sure the container width provides an optimal line length for this font size."})}),e(o,{size:"3",css:{marginTop:"$9",marginBottom:"$9"},children:s(d,{css:{gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:"$7"},children:[e(t,{children:e(n,{as:"p",size:"4",css:{lineHeight:"27px"},children:"This is a much shorter paragraph of text, to demonstrate narrow text container. The reason we're using text here is because one common use case for this container size is a 3-up grid."})}),e(t,{children:e(n,{as:"p",size:"4",css:{lineHeight:"27px"},children:"This is a much shorter paragraph of text, to demonstrate narrow text container. The reason we're using text here is because one common use case for this container size is a 3-up grid."})}),e(t,{children:e(n,{as:"p",size:"4",css:{lineHeight:"27px"},children:"This is a much shorter paragraph of text, to demonstrate narrow text container. The reason we're using text here is because one common use case for this container size is a 3-up grid."})})]})}),e(o,{size:"4",children:e(n,{as:"p",size:"3",css:{textAlign:"center",backgroundColor:"$slate3",paddingTop:"$2",paddingBottom:"$2"},children:"No max width"})})]}),"containerForm"),B=["containerForm"];export{B as __namedExportsOrder,$ as containerForm,w as default};
//# sourceMappingURL=container.stories.b2a26590.js.map
