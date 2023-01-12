var x=Object.defineProperty;var u=(l,s)=>x(l,"name",{value:s,configurable:!0});import{j as e,F as r,a as t,r as o}from"./jsx-runtime.6c6bd70f.js";import{ap as y,E as k,H as B,F as R,B as i,aq as d,ar as m,as as n,at as M,au as S,av as C,aw as v,ax as g,ay as I}from"./index.ab77ce9b.js";import"./iframe.737cbf69.js";import"./index.38bf7259.js";const T={parameters:{storySource:{source:`
import { useRef, useState } from 'react'
import {
  Section,
  Container,
  Heading,
  Flex,
  Box,
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuGroup,
  MenuLabel,
  MenuCheckboxItem,
  MenuRadioGroup,
  MenuRadioItem,
} from '@venusui/components'

export default { title: 'Menu' }

export const menus = () => (
  <>
    <Section size="3">
      <Container size="2">
        <Heading>Menus</Heading>
        <Flex>
          <BasicMenu />
          <LabelledMenu />
          <CheckboxItemsMenu />
          <RadioItemsMenu />
        </Flex>
      </Container>
    </Section>
  </>
)

const BasicMenu = () => {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <>
      <Box ref={ref} css={{ width: 150, mt: 50, mb: 400 }} />
      <Menu open onOpenChange={() => {}}>
        <MenuContent>
          <MenuItem onSelect={() => console.log('undo')}>Undo</MenuItem>
          <MenuItem onSelect={() => console.log('redo')}>Redo</MenuItem>
          <MenuSeparator />
          <MenuItem disabled onSelect={() => console.log('cut')}>
            Cut
          </MenuItem>
          <MenuItem onSelect={() => console.log('copy')}>Copy</MenuItem>
          <MenuItem onSelect={() => console.log('paste')}>Paste</MenuItem>
        </MenuContent>
      </Menu>
    </>
  )
}

const LabelledMenu = () => {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <>
      <Box ref={ref} css={{ width: 150, mt: 50, mb: 400 }} />
      <Menu open onOpenChange={() => {}}>
        <MenuContent>
          <MenuGroup>
            <MenuLabel>Arrange</MenuLabel>
            <MenuItem onSelect={() => console.log('Bring Forward')}>
              Bring Forward
            </MenuItem>
            <MenuItem onSelect={() => console.log('Bring to Front')}>
              Bring to Front
            </MenuItem>
            <MenuItem onSelect={() => console.log('Send Backward')}>
              Send Backward
            </MenuItem>
            <MenuItem onSelect={() => console.log('Send to Back')}>
              Send to Back
            </MenuItem>
          </MenuGroup>
          <MenuSeparator />
          <MenuGroup>
            <MenuLabel>Distribute</MenuLabel>
            <MenuItem onSelect={() => console.log('Horizontally')}>
              Horizontally
            </MenuItem>
            <MenuItem onSelect={() => console.log('Vertically')}>
              Vertically
            </MenuItem>
          </MenuGroup>
        </MenuContent>
      </Menu>
    </>
  )
}

const CheckboxItemsMenu = () => {
  const ref = useRef<HTMLDivElement>(null)
  const checkboxItems = [
    { label: 'Bold', state: useState(false) },
    { label: 'Italic', state: useState(true) },
    { label: 'Underline', state: useState(false) },
    { label: 'Strikethrough', state: useState(false), disabled: true },
  ]

  return (
    <>
      <Box css={{ width: 150, mt: 50, mb: 400 }} />
      <Menu open onOpenChange={() => {}}>
        <MenuContent>
          <MenuGroup>
            <MenuLabel>Cut</MenuLabel>
            <MenuItem>Cut</MenuItem>
            <MenuItem>Copy</MenuItem>
            <MenuItem>Paste</MenuItem>
          </MenuGroup>
          <MenuSeparator />
          {checkboxItems.map(
            ({ label, state: [checked, setChecked], disabled }) => (
              <MenuCheckboxItem
                key={label}
                checked={checked}
                onCheckedChange={setChecked}
                disabled={disabled}
              >
                {label}
              </MenuCheckboxItem>
            ),
          )}
        </MenuContent>
      </Menu>
    </>
  )
}

const RadioItemsMenu = () => {
  const ref = useRef<HTMLDivElement>(null)
  const capsStyles = [
    'Normal',
    'All Caps',
    'Small Caps',
    'Petite Caps',
    'Titling Caps',
  ]
  const numericStyles = ['Tabular', 'Proportional', 'Oldstyle']
  const [caps, setCaps] = useState(capsStyles[0])
  const [numeric, setNumeric] = useState(numericStyles[1])

  return (
    <>
      <Box ref={ref} css={{ width: 150, mt: 50, mb: 400 }} />
      <Menu open modal>
        <MenuContent
          onCloseAutoFocus={(event) => event.preventDefault()}
          avoidCollisions={false}
          align="start"
        >
          <MenuRadioGroup value={caps} onValueChange={setCaps}>
            {capsStyles.map((style) => (
              <MenuRadioItem key={style} value={style}>
                {style}
              </MenuRadioItem>
            ))}
          </MenuRadioGroup>
          <MenuSeparator />
          <MenuRadioGroup value={numeric} onValueChange={setNumeric}>
            {numericStyles.map((style) => (
              <MenuRadioItem key={style} value={style}>
                {style}
              </MenuRadioItem>
            ))}
          </MenuRadioGroup>
        </MenuContent>
      </Menu>
    </>
  )
}
`,locationsMap:{menus:{startLoc:{col:21,line:22},endLoc:{col:1,line:36},startBody:{col:21,line:22},endBody:{col:1,line:36}}}}},title:"Menu"},V=u(()=>e(r,{children:e(y,{size:"3",children:t(k,{size:"2",children:[e(B,{children:"Menus"}),t(R,{children:[e(w,{}),e(F,{}),e(L,{}),e(G,{})]})]})})}),"menus"),w=u(()=>{const l=o.exports.useRef(null);return t(r,{children:[e(i,{ref:l,css:{width:150,mt:50,mb:400}}),e(d,{open:!0,onOpenChange:()=>{},children:t(m,{children:[e(n,{onSelect:()=>console.log("undo"),children:"Undo"}),e(n,{onSelect:()=>console.log("redo"),children:"Redo"}),e(M,{}),e(n,{disabled:!0,onSelect:()=>console.log("cut"),children:"Cut"}),e(n,{onSelect:()=>console.log("copy"),children:"Copy"}),e(n,{onSelect:()=>console.log("paste"),children:"Paste"})]})})]})},"BasicMenu"),F=u(()=>{const l=o.exports.useRef(null);return t(r,{children:[e(i,{ref:l,css:{width:150,mt:50,mb:400}}),e(d,{open:!0,onOpenChange:()=>{},children:t(m,{children:[t(S,{children:[e(C,{children:"Arrange"}),e(n,{onSelect:()=>console.log("Bring Forward"),children:"Bring Forward"}),e(n,{onSelect:()=>console.log("Bring to Front"),children:"Bring to Front"}),e(n,{onSelect:()=>console.log("Send Backward"),children:"Send Backward"}),e(n,{onSelect:()=>console.log("Send to Back"),children:"Send to Back"})]}),e(M,{}),t(S,{children:[e(C,{children:"Distribute"}),e(n,{onSelect:()=>console.log("Horizontally"),children:"Horizontally"}),e(n,{onSelect:()=>console.log("Vertically"),children:"Vertically"})]})]})})]})},"LabelledMenu"),L=u(()=>{o.exports.useRef(null);const l=[{label:"Bold",state:o.exports.useState(!1)},{label:"Italic",state:o.exports.useState(!0)},{label:"Underline",state:o.exports.useState(!1)},{label:"Strikethrough",state:o.exports.useState(!1),disabled:!0}];return t(r,{children:[e(i,{css:{width:150,mt:50,mb:400}}),e(d,{open:!0,onOpenChange:()=>{},children:t(m,{children:[t(S,{children:[e(C,{children:"Cut"}),e(n,{children:"Cut"}),e(n,{children:"Copy"}),e(n,{children:"Paste"})]}),e(M,{}),l.map(({label:s,state:[c,p],disabled:h})=>e(v,{checked:c,onCheckedChange:p,disabled:h,children:s},s))]})})]})},"CheckboxItemsMenu"),G=u(()=>{const l=o.exports.useRef(null),s=["Normal","All Caps","Small Caps","Petite Caps","Titling Caps"],c=["Tabular","Proportional","Oldstyle"],[p,h]=o.exports.useState(s[0]),[b,f]=o.exports.useState(c[1]);return t(r,{children:[e(i,{ref:l,css:{width:150,mt:50,mb:400}}),e(d,{open:!0,modal:!0,children:t(m,{onCloseAutoFocus:a=>a.preventDefault(),avoidCollisions:!1,align:"start",children:[e(g,{value:p,onValueChange:h,children:s.map(a=>e(I,{value:a,children:a},a))}),e(M,{}),e(g,{value:b,onValueChange:f,children:c.map(a=>e(I,{value:a,children:a},a))})]})})]})},"RadioItemsMenu"),A=["menus"];export{A as __namedExportsOrder,T as default,V as menus};
//# sourceMappingURL=menu.stories.a62f9043.js.map
