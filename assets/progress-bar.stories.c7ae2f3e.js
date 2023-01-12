var l=Object.defineProperty;var i=(o,c)=>l(o,"name",{value:c,configurable:!0});import{H as s,B as n,aD as a,b as r}from"./index.ab77ce9b.js";import{a as t,F as m,j as e}from"./jsx-runtime.6c6bd70f.js";import"./index.38bf7259.js";import"./iframe.737cbf69.js";const $={parameters:{storySource:{source:`import { Heading, ProgressBar, Text, Box } from '@venusui/components'

export default { title: 'ProgressBar' }

export const bars = () => (
  <>
    <Heading css={{ mb: '$6' }}>Default</Heading>
    <Box css={{ mb: '$6' }}>
      <ProgressBar value={50} />
    </Box>
    <Heading css={{ mb: '$6' }}>Indeterminate state</Heading>
    <Box css={{ mb: '$6' }}>
      <Text size="2">Indeterminate</Text>
      <ProgressBar css={{ my: '$2' }} />
    </Box>
    <Heading css={{ mb: '$6' }}>UI test</Heading>
    <Box css={{ mb: '$6' }}>
      <Text size="2">Download 50% complete</Text>
      <ProgressBar max={100} value={80} css={{ my: '$2' }} />
      <Text size="1" css={{ color: '$slate11' }}>
        46 hours remaining
      </Text>
    </Box>
    <Heading css={{ mb: '$6' }}>Gradient variant</Heading>
    <Box css={{ mb: '$6' }}>
      <ProgressBar max={100} variant="gradient" value={100} />
    </Box>
    <Heading css={{ mb: '$6' }}>Blue variant</Heading>
    <Box>
      <ProgressBar variant="blue" max={100} value={50} />
    </Box>
  </>
)
`,locationsMap:{bars:{startLoc:{col:20,line:5},endLoc:{col:1,line:33},startBody:{col:20,line:5},endBody:{col:1,line:33}}}}},title:"ProgressBar"},u=i(()=>t(m,{children:[e(s,{css:{mb:"$6"},children:"Default"}),e(n,{css:{mb:"$6"},children:e(a,{value:50})}),e(s,{css:{mb:"$6"},children:"Indeterminate state"}),t(n,{css:{mb:"$6"},children:[e(r,{size:"2",children:"Indeterminate"}),e(a,{css:{my:"$2"}})]}),e(s,{css:{mb:"$6"},children:"UI test"}),t(n,{css:{mb:"$6"},children:[e(r,{size:"2",children:"Download 50% complete"}),e(a,{max:100,value:80,css:{my:"$2"}}),e(r,{size:"1",css:{color:"$slate11"},children:"46 hours remaining"})]}),e(s,{css:{mb:"$6"},children:"Gradient variant"}),e(n,{css:{mb:"$6"},children:e(a,{max:100,variant:"gradient",value:100})}),e(s,{css:{mb:"$6"},children:"Blue variant"}),e(n,{children:e(a,{variant:"blue",max:100,value:50})})]}),"bars"),v=["bars"];export{v as __namedExportsOrder,u as bars,$ as default};
//# sourceMappingURL=progress-bar.stories.c7ae2f3e.js.map
