var i=Object.defineProperty;var u=(a,C)=>i(a,"name",{value:C,configurable:!0});import{K as m,M as c,F as l,b as s,N as M,O as d,Q as n,R as x,U as t,V as I,W as h,X as o}from"./index.ab77ce9b.js";import{j as e,F as p,a as r}from"./jsx-runtime.6c6bd70f.js";import"./index.38bf7259.js";import"./iframe.737cbf69.js";const $={parameters:{storySource:{source:`import {
  Flex,
  ContextMenu,
  ContextMenuTrigger,
  Text,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuCheckboxItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
} from '@venusui/components'

export default { title: 'ContextMenu' }

export const menus = () => (
  <>
    <ContextMenu>
      <ContextMenuTrigger>
        <Flex
          css={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '$9',
            backgroundColor: '$slate2',
            border: '2px dashed $colors$slate6',
            borderRadius: '$2',
          }}
        >
          <Text variant="gray">Right-click me</Text>
        </Flex>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem>Item</ContextMenuItem>
          <ContextMenuItem>Item</ContextMenuItem>
          <ContextMenuItem>Item</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem>Item</ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked>Item</ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>Item</ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuLabel>Choose one</ContextMenuLabel>
          <ContextMenuRadioGroup value="one">
            <ContextMenuRadioItem value="one">Item</ContextMenuRadioItem>
            <ContextMenuRadioItem value="two">Item</ContextMenuRadioItem>
            <ContextMenuRadioItem value="three">Item</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  </>
)
`,locationsMap:{menus:{startLoc:{col:21,line:18},endLoc:{col:1,line:55},startBody:{col:21,line:18},endBody:{col:1,line:55}}}}},title:"ContextMenu"},G=u(()=>e(p,{children:r(m,{children:[e(c,{children:e(l,{css:{alignItems:"center",justifyContent:"center",height:"$9",backgroundColor:"$slate2",border:"2px dashed $colors$slate6",borderRadius:"$2"},children:e(s,{variant:"gray",children:"Right-click me"})})}),e(M,{children:r(d,{children:[e(n,{children:"Item"}),e(n,{children:"Item"}),e(n,{children:"Item"}),e(x,{}),e(t,{children:"Item"}),e(t,{checked:!0,children:"Item"}),e(t,{children:"Item"}),e(x,{}),e(I,{children:"Choose one"}),r(h,{value:"one",children:[e(o,{value:"one",children:"Item"}),e(o,{value:"two",children:"Item"}),e(o,{value:"three",children:"Item"})]})]})})]})}),"menus"),T=["menus"];export{T as __namedExportsOrder,$ as default,G as menus};
//# sourceMappingURL=context-menu.stories.752c3b8a.js.map
