var g=Object.defineProperty;var r=(s,o)=>g(s,"name",{value:o,configurable:!0});import{H as i,p as n,F as t,B as d,S as l,C as c}from"./index.ab77ce9b.js";import{a,F as v,j as e}from"./jsx-runtime.6c6bd70f.js";import"./index.38bf7259.js";import"./iframe.737cbf69.js";const b={parameters:{storySource:{source:`import {
  Flex,
  Box,
  Badge,
  Heading,
  Status,
  CaretDownIcon,
} from '@venusui/components'

export default { title: 'Badge' }

export const badges = () => (
  <>
    <Heading css={{ marginBottom: '$6' }}>Default Badge</Heading>
    <Badge css={{ marginBottom: '$6' }}>Coming soon</Badge>
    <Heading css={{ marginBottom: '$6' }}>Sizes</Heading>
    <Flex
      css={{
        alignItems: 'center',
        gap: '$5',
        flexWrap: 'wrap',
        marginBottom: '$7',
      }}
    >
      <Badge size="1">Coming soon</Badge>
      <Badge size="2">Coming soon</Badge>
    </Flex>
    <Heading css={{ marginBottom: '$6' }}>Variants</Heading>
    <Flex css={{ gap: '$5', flexWrap: 'wrap', marginBottom: '$6' }}>
      <Badge size="2" variant="red">
        <Box css={{ marginRight: 5 }}>
          <Status size="1" variant="red" />
        </Box>
        Live
      </Badge>
      <Badge size="2" variant="crimson">
        Approved
      </Badge>
      <Badge size="2" variant="pink">
        Pending
      </Badge>
      <Badge size="2" variant="purple">
        Failed
      </Badge>
      <Badge size="2" variant="violet">
        New
      </Badge>
      <Badge size="2" variant="indigo">
        Approved
      </Badge>
      <Badge size="2" variant="blue">
        Pending
      </Badge>
      <Badge size="2" variant="cyan">
        Failed
      </Badge>
      <Badge size="2" variant="teal">
        New
      </Badge>
      <Badge size="2" variant="green">
        Approved
      </Badge>
      <Badge size="2" variant="lime">
        Pending
      </Badge>
      <Badge size="2" variant="yellow">
        Failed
      </Badge>
      <Badge size="2" variant="orange">
        Failed
      </Badge>
      <Badge size="2" variant="gold">
        Winner
      </Badge>
      <Badge size="2" variant="bronze">
        Runner-up
      </Badge>
    </Flex>
    <Heading css={{ marginBottom: '$6' }}>Interactive variant</Heading>
    <Flex css={{ gap: '$5', flexWrap: 'wrap', marginTop: '$6' }}>
      <Badge as="a" href="#" size="2" variant="red" interactive>
        New
      </Badge>
      <Badge as="button" size="2" variant="crimson" interactive>
        Approved
      </Badge>
      <Badge as="button" size="2" variant="pink" interactive>
        Pending
      </Badge>
      <Badge as="button" size="2" variant="purple" interactive>
        Failed
        <Box css={{ marginLeft: 5 }}>
          <CaretDownIcon />
        </Box>
      </Badge>
      <Badge as="button" size="2" variant="violet" interactive>
        New
      </Badge>
      <Badge as="button" size="2" variant="indigo" interactive>
        Approved
      </Badge>
      <Badge as="button" size="2" variant="blue" interactive>
        Pending
      </Badge>
      <Badge as="button" size="2" variant="cyan" interactive>
        Failed
      </Badge>
      <Badge as="button" size="2" variant="teal" interactive>
        New
      </Badge>
      <Badge as="button" size="2" variant="green" interactive>
        Approved
      </Badge>
      <Badge as="button" size="2" variant="lime" interactive>
        Pending
      </Badge>
      <Badge as="button" size="2" variant="yellow" interactive>
        Failed
      </Badge>
      <Badge as="button" size="2" variant="orange" interactive>
        Failed
      </Badge>
      <Badge as="button" size="2" variant="gold" interactive>
        Winner
      </Badge>
      <Badge as="button" size="2" variant="bronze" interactive>
        Runner-up
      </Badge>
      <Badge as="button" size="2" variant="bronze" interactive disabled>
        Disabled
      </Badge>
    </Flex>
  </>
)
`,locationsMap:{badges:{startLoc:{col:22,line:12},endLoc:{col:1,line:134},startBody:{col:22,line:12},endBody:{col:1,line:134}}}}},title:"Badge"},h=r(()=>a(v,{children:[e(i,{css:{marginBottom:"$6"},children:"Default Badge"}),e(n,{css:{marginBottom:"$6"},children:"Coming soon"}),e(i,{css:{marginBottom:"$6"},children:"Sizes"}),a(t,{css:{alignItems:"center",gap:"$5",flexWrap:"wrap",marginBottom:"$7"},children:[e(n,{size:"1",children:"Coming soon"}),e(n,{size:"2",children:"Coming soon"})]}),e(i,{css:{marginBottom:"$6"},children:"Variants"}),a(t,{css:{gap:"$5",flexWrap:"wrap",marginBottom:"$6"},children:[a(n,{size:"2",variant:"red",children:[e(d,{css:{marginRight:5},children:e(l,{size:"1",variant:"red"})}),"Live"]}),e(n,{size:"2",variant:"crimson",children:"Approved"}),e(n,{size:"2",variant:"pink",children:"Pending"}),e(n,{size:"2",variant:"purple",children:"Failed"}),e(n,{size:"2",variant:"violet",children:"New"}),e(n,{size:"2",variant:"indigo",children:"Approved"}),e(n,{size:"2",variant:"blue",children:"Pending"}),e(n,{size:"2",variant:"cyan",children:"Failed"}),e(n,{size:"2",variant:"teal",children:"New"}),e(n,{size:"2",variant:"green",children:"Approved"}),e(n,{size:"2",variant:"lime",children:"Pending"}),e(n,{size:"2",variant:"yellow",children:"Failed"}),e(n,{size:"2",variant:"orange",children:"Failed"}),e(n,{size:"2",variant:"gold",children:"Winner"}),e(n,{size:"2",variant:"bronze",children:"Runner-up"})]}),e(i,{css:{marginBottom:"$6"},children:"Interactive variant"}),a(t,{css:{gap:"$5",flexWrap:"wrap",marginTop:"$6"},children:[e(n,{as:"a",href:"#",size:"2",variant:"red",interactive:!0,children:"New"}),e(n,{as:"button",size:"2",variant:"crimson",interactive:!0,children:"Approved"}),e(n,{as:"button",size:"2",variant:"pink",interactive:!0,children:"Pending"}),a(n,{as:"button",size:"2",variant:"purple",interactive:!0,children:["Failed",e(d,{css:{marginLeft:5},children:e(c,{})})]}),e(n,{as:"button",size:"2",variant:"violet",interactive:!0,children:"New"}),e(n,{as:"button",size:"2",variant:"indigo",interactive:!0,children:"Approved"}),e(n,{as:"button",size:"2",variant:"blue",interactive:!0,children:"Pending"}),e(n,{as:"button",size:"2",variant:"cyan",interactive:!0,children:"Failed"}),e(n,{as:"button",size:"2",variant:"teal",interactive:!0,children:"New"}),e(n,{as:"button",size:"2",variant:"green",interactive:!0,children:"Approved"}),e(n,{as:"button",size:"2",variant:"lime",interactive:!0,children:"Pending"}),e(n,{as:"button",size:"2",variant:"yellow",interactive:!0,children:"Failed"}),e(n,{as:"button",size:"2",variant:"orange",interactive:!0,children:"Failed"}),e(n,{as:"button",size:"2",variant:"gold",interactive:!0,children:"Winner"}),e(n,{as:"button",size:"2",variant:"bronze",interactive:!0,children:"Runner-up"}),e(n,{as:"button",size:"2",variant:"bronze",interactive:!0,disabled:!0,children:"Disabled"})]})]}),"badges"),F=["badges"];export{F as __namedExportsOrder,h as badges,b as default};
//# sourceMappingURL=badge.stories.6ce61939.js.map
