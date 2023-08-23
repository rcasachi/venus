var l=Object.defineProperty;var t=(s,i)=>l(s,"name",{value:i,configurable:!0});import{bt as r,bS as c,h as o,bf as a}from"./index.3e9a8271.js";import{a as e,F as p,j as n}from"./jsx-runtime.9c618e4b.js";import"./index.c956a7b8.js";import"./iframe.020113d5.js";const f={parameters:{storySource:{source:`import type { Meta, StoryObj } from '@storybook/react'
import {
  ArrowRightIcon,
  Box,
  Button,
  ButtonProps,
  Image,
} from '@venusui/components'

export default {
  title: 'Interaction/Button',
  component: Button,
  args: {
    children: 'Send',
    color: 'highcontrast',
    size: 1,
    disabled: false,
    outlined: false,
    transparent: false,
    ghost: false,
  },
  argTypes: {
    size: {
      options: [1, 2, 3],
      control: {
        type: 'inline-radio',
      },
    },
    color: {
      options: [
        'highcontrast',
        'lowcontrast',
        'primary',
        'secondary',
        'accent',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    transparent: {
      control: {
        type: 'boolean',
      },
    },
    outlined: {
      control: {
        type: 'boolean',
      },
    },
    ghost: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    readOnly: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'clicked' },
  },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Pr\xF3ximo passo
        <ArrowRightIcon />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}

export const TransparentBlack = () => {
  return (
    <Box
      css={{
        position: 'relative',
        marginTop: '$6',
      }}
    >
      <Image src="https://images.unsplash.com/photo-1453235421161-e41b42ebba05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80" />
      <Box
        css={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          margin: '$4',
        }}
      >
        <Button color="lowcontrast" transparent>
          Transparent
        </Button>
      </Box>
    </Box>
  )
}

export const TransparentWhite = () => {
  return (
    <Box
      css={{
        position: 'relative',
        marginTop: '$6',
      }}
    >
      <Image src="https://images.unsplash.com/photo-1447690709975-318628b14c57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80" />
      <Box
        css={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          margin: '$4',
        }}
      >
        <Button color="highcontrast" transparent>
          Transparent
        </Button>
      </Box>
    </Box>
  )
}
`,locationsMap:{"transparent-black":{startLoc:{col:32,line:89},endLoc:{col:1,line:112},startBody:{col:32,line:89},endBody:{col:1,line:112}},"transparent-white":{startLoc:{col:32,line:114},endLoc:{col:1,line:137},startBody:{col:32,line:114},endBody:{col:1,line:137}}}}},title:"Interaction/Button",component:r,args:{children:"Send",color:"highcontrast",size:1,disabled:!1,outlined:!1,transparent:!1,ghost:!1},argTypes:{size:{options:[1,2,3],control:{type:"inline-radio"}},color:{options:["highcontrast","lowcontrast","primary","secondary","accent"],control:{type:"inline-radio"}},transparent:{control:{type:"boolean"}},outlined:{control:{type:"boolean"}},ghost:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},onClick:{action:"clicked"}}},x={},g={args:{children:e(p,{children:["Pr\xF3ximo passo",n(c,{})]})}},y={args:{disabled:!0}},B=t(()=>e(o,{css:{position:"relative",marginTop:"$6"},children:[n(a,{src:"https://images.unsplash.com/photo-1453235421161-e41b42ebba05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80"}),n(o,{css:{position:"absolute",bottom:0,right:0,margin:"$4"},children:n(r,{color:"lowcontrast",transparent:!0,children:"Transparent"})})]}),"TransparentBlack"),w=t(()=>e(o,{css:{position:"relative",marginTop:"$6"},children:[n(a,{src:"https://images.unsplash.com/photo-1447690709975-318628b14c57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80"}),n(o,{css:{position:"absolute",bottom:0,right:0,margin:"$4"},children:n(r,{color:"highcontrast",transparent:!0,children:"Transparent"})})]}),"TransparentWhite"),D=["Default","WithIcon","Disabled","TransparentBlack","TransparentWhite"];export{x as Default,y as Disabled,B as TransparentBlack,w as TransparentWhite,g as WithIcon,D as __namedExportsOrder,f as default};
//# sourceMappingURL=button.stories.8b89387b.js.map
