var l=Object.defineProperty;var t=(r,o)=>l(r,"name",{value:o,configurable:!0});import{H as c,F as i,b as a,am as e,an as m,G as b,B as s}from"./index.ab77ce9b.js";import{a as d,F as h,j as n}from"./jsx-runtime.6c6bd70f.js";import"./index.38bf7259.js";import"./iframe.737cbf69.js";const F={parameters:{storySource:{source:`import {
  Flex,
  Heading,
  Text,
  Kbd,
  TriangleUpIcon,
  Grid,
  Box,
} from '@venusui/components'

export default { title: 'Typography' }

export const kbd = () => (
  <>
    <Heading css={{ marginBottom: '$6' }}>Kbd test</Heading>
    <Flex
      css={{
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '$7',
      }}
    >
      <Text>Resize selected object</Text>
      <Flex css={{ alignItems: 'center', gap: '$1' }}>
        <Kbd>\u2318</Kbd>
        <Kbd>\u21E7</Kbd>
        <Kbd>
          <TriangleUpIcon />
        </Kbd>
      </Flex>
    </Flex>
    <Heading>Kbd variants</Heading>
    <Grid
      css={{
        gridTemplateColumns: 'repeat(3, 1fr)',
        marginTop: '$5',
        marginBottom: '$5',
      }}
    >
      <Box>
        <Flex css={{ marginBottom: '31px' }}>
          <Kbd>Space</Kbd>
        </Flex>
        <Flex css={{ marginBottom: '31px' }}>
          <Kbd>Enter</Kbd>
        </Flex>
        <Flex css={{ marginBottom: '31px' }}>
          <Kbd>Tab</Kbd>
        </Flex>
        <Flex css={{ marginBottom: '31px' }}>
          <Kbd>Shift + Tab</Kbd>
        </Flex>
        <Flex css={{ marginBottom: '31px' }}>
          <Kbd>Esc</Kbd>
        </Flex>
      </Box>
      <Box>
        <Flex css={{ marginBottom: '$5' }}>
          <Kbd>I</Kbd>
          <Kbd>A</Kbd>
          <Kbd>W</Kbd>
        </Flex>
        <Flex css={{ marginBottom: '$5' }}>
          <Kbd>\u21E7</Kbd>
          <Kbd>\u2318</Kbd>
          <Kbd>A</Kbd>
        </Flex>
        <Flex css={{ marginBottom: '$5' }}>
          <Kbd>\u2318 + Tab</Kbd>
        </Flex>
        <Flex css={{ marginBottom: '$5' }}>
          <Kbd width="command">\u2318</Kbd>
          <Kbd>Tab</Kbd>
        </Flex>
        <Flex css={{ marginBottom: '$5' }}>
          <Kbd width="shift">\u21E7</Kbd>
          <Kbd>\u2191</Kbd>
        </Flex>
        <Flex css={{ marginBottom: '$5' }}>
          <Kbd width="shift">\u21E7</Kbd>
          <Kbd>Tab</Kbd>
        </Flex>
        <Flex css={{}}>
          <Kbd width="space">Space</Kbd>
        </Flex>
      </Box>
      <Box>
        <Flex css={{ marginBottom: '$5' }}>
          <Kbd size="1">I</Kbd>
          <Kbd size="1">A</Kbd>
          <Kbd size="1">W</Kbd>
        </Flex>
        <Flex css={{ marginBottom: '$5' }}>
          <Kbd size="1">\u21E7</Kbd>
          <Kbd size="1">\u2318</Kbd>
          <Kbd size="1">W</Kbd>
        </Flex>
        <Flex css={{ marginBottom: '$5' }}>
          <Kbd size="1">\u2318 + Tab</Kbd>
        </Flex>
        <Flex css={{ marginBottom: '$5' }}>
          <Kbd size="1" width="command">
            \u2318
          </Kbd>
          <Kbd size="1">Tab</Kbd>
        </Flex>
        <Flex css={{ marginBottom: '$5' }}>
          <Kbd size="1" width="shift">
            \u21E7
          </Kbd>
          <Kbd size="1">\u2191</Kbd>
        </Flex>
        <Flex css={{ marginBottom: '$5' }}>
          <Kbd size="1" width="shift">
            \u21E7
          </Kbd>
          <Kbd size="1">Tab</Kbd>
        </Flex>
        <Flex css={{}}>
          <Kbd size="1" width="space">
            Space
          </Kbd>
        </Flex>
      </Box>
    </Grid>
  </>
)
`,locationsMap:{kbd:{startLoc:{col:19,line:13},endLoc:{col:1,line:127},startBody:{col:19,line:13},endBody:{col:1,line:127}}}}},title:"Typography"},$=t(()=>d(h,{children:[n(c,{css:{marginBottom:"$6"},children:"Kbd test"}),d(i,{css:{alignItems:"center",justifyContent:"space-between",marginBottom:"$7"},children:[n(a,{children:"Resize selected object"}),d(i,{css:{alignItems:"center",gap:"$1"},children:[n(e,{children:"\u2318"}),n(e,{children:"\u21E7"}),n(e,{children:n(m,{})})]})]}),n(c,{children:"Kbd variants"}),d(b,{css:{gridTemplateColumns:"repeat(3, 1fr)",marginTop:"$5",marginBottom:"$5"},children:[d(s,{children:[n(i,{css:{marginBottom:"31px"},children:n(e,{children:"Space"})}),n(i,{css:{marginBottom:"31px"},children:n(e,{children:"Enter"})}),n(i,{css:{marginBottom:"31px"},children:n(e,{children:"Tab"})}),n(i,{css:{marginBottom:"31px"},children:n(e,{children:"Shift + Tab"})}),n(i,{css:{marginBottom:"31px"},children:n(e,{children:"Esc"})})]}),d(s,{children:[d(i,{css:{marginBottom:"$5"},children:[n(e,{children:"I"}),n(e,{children:"A"}),n(e,{children:"W"})]}),d(i,{css:{marginBottom:"$5"},children:[n(e,{children:"\u21E7"}),n(e,{children:"\u2318"}),n(e,{children:"A"})]}),n(i,{css:{marginBottom:"$5"},children:n(e,{children:"\u2318 + Tab"})}),d(i,{css:{marginBottom:"$5"},children:[n(e,{width:"command",children:"\u2318"}),n(e,{children:"Tab"})]}),d(i,{css:{marginBottom:"$5"},children:[n(e,{width:"shift",children:"\u21E7"}),n(e,{children:"\u2191"})]}),d(i,{css:{marginBottom:"$5"},children:[n(e,{width:"shift",children:"\u21E7"}),n(e,{children:"Tab"})]}),n(i,{css:{},children:n(e,{width:"space",children:"Space"})})]}),d(s,{children:[d(i,{css:{marginBottom:"$5"},children:[n(e,{size:"1",children:"I"}),n(e,{size:"1",children:"A"}),n(e,{size:"1",children:"W"})]}),d(i,{css:{marginBottom:"$5"},children:[n(e,{size:"1",children:"\u21E7"}),n(e,{size:"1",children:"\u2318"}),n(e,{size:"1",children:"W"})]}),n(i,{css:{marginBottom:"$5"},children:n(e,{size:"1",children:"\u2318 + Tab"})}),d(i,{css:{marginBottom:"$5"},children:[n(e,{size:"1",width:"command",children:"\u2318"}),n(e,{size:"1",children:"Tab"})]}),d(i,{css:{marginBottom:"$5"},children:[n(e,{size:"1",width:"shift",children:"\u21E7"}),n(e,{size:"1",children:"\u2191"})]}),d(i,{css:{marginBottom:"$5"},children:[n(e,{size:"1",width:"shift",children:"\u21E7"}),n(e,{size:"1",children:"Tab"})]}),n(i,{css:{},children:n(e,{size:"1",width:"space",children:"Space"})})]})]})]}),"kbd"),z=["kbd"];export{z as __namedExportsOrder,F as default,$ as kbd};
//# sourceMappingURL=kbd.stories.978f0b8f.js.map
