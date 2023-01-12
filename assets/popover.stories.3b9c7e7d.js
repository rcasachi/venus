var d=Object.defineProperty;var s=(a,h)=>d(a,"name",{value:h,configurable:!0});import{F as p,a8 as o,a9 as i,u as l,aa as r,b as t,I as c,aC as v,p as m,B as w,C as g}from"./index.ab77ce9b.js";import{j as e,F as P,a as n}from"./jsx-runtime.6c6bd70f.js";import"./index.38bf7259.js";import"./iframe.737cbf69.js";const C={parameters:{storySource:{source:`
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
`,locationsMap:{popovers:{startLoc:{col:24,line:18},endLoc:{col:1,line:118},startBody:{col:24,line:18},endBody:{col:1,line:118}}}}},title:"Popover"},B=s(()=>e(P,{children:n(p,{css:{gap:"$6",flexWrap:"wrap"},children:[n(o,{children:[e(i,{asChild:!0,children:e(l,{children:"Popover"})}),e(r,{css:{padding:"$3"},children:e(t,{size:"2",css:{lineHeight:"18px"},children:"The other main improvement is with tables, which we'll probably use a lot. With horizontal overflow on small devices and when zoomed in."})})]}),n(o,{children:[e(i,{asChild:!0,children:e(l,{children:"Hide arrow"})}),e(r,{css:{padding:"$3"},hideArrow:!0,children:e(t,{size:"2",css:{lineHeight:"18px"},children:"The other main improvement is with tables, which we'll probably use a lot. With horizontal overflow on small devices and when zoomed in."})})]}),n(o,{children:[e(i,{asChild:!0,children:e(l,{variant:"blue",children:"Blue"})}),e(r,{css:{padding:"$3"},children:e(t,{size:"2",css:{lineHeight:"18px"},children:"The other main improvement is with tables, which we'll probably use a lot. With horizontal overflow on small devices and when zoomed in."})})]}),n(o,{children:[e(i,{asChild:!0,children:e(l,{variant:"green",children:"Green"})}),e(r,{css:{padding:"$3"},children:e(t,{size:"2",css:{lineHeight:"18px"},children:"The other main improvement is with tables, which we'll probably use a lot. With horizontal overflow on small devices and when zoomed in."})})]}),n(o,{children:[e(i,{asChild:!0,children:e(l,{variant:"red",children:"Red"})}),e(r,{css:{padding:"$3"},children:e(t,{size:"2",css:{lineHeight:"18px"},children:"The other main improvement is with tables, which we'll probably use a lot. With horizontal overflow on small devices and when zoomed in."})})]}),n(o,{children:[e(i,{asChild:!0,children:e(l,{ghost:!0,children:"Ghost"})}),e(r,{css:{padding:"$3"},children:e(t,{size:"2",css:{lineHeight:"18px"},children:"The other main improvement is with tables, which we'll probably use a lot. With horizontal overflow on small devices and when zoomed in."})})]}),n(o,{children:[e(i,{asChild:!0,children:e(c,{children:e(v,{})})}),e(r,{css:{padding:"$3"},children:e(t,{size:"2",css:{lineHeight:"18px"},children:"The other main improvement is with tables, which we'll probably use a lot. With horizontal overflow on small devices and when zoomed in."})})]}),n(o,{children:[e(i,{asChild:!0,children:n(m,{size:"2",variant:"violet",interactive:!0,children:["Badge",e(w,{css:{marginLeft:"$1"},children:e(g,{})})]})}),e(r,{css:{padding:"$3"},children:e(t,{size:"2",css:{lineHeight:"18px"},children:"The other main improvement is with tables, which we'll probably use a lot. With horizontal overflow on small devices and when zoomed in."})})]})]})}),"popovers"),f=["popovers"];export{f as __namedExportsOrder,C as default,B as popovers};
//# sourceMappingURL=popover.stories.3b9c7e7d.js.map
