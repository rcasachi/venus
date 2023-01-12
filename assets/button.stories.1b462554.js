var c=Object.defineProperty;var o=(s,i)=>c(s,"name",{value:i,configurable:!0});import{u as r,v as l,B as t,w as e}from"./index.ab77ce9b.js";import{a,F as p,j as n}from"./jsx-runtime.6c6bd70f.js";import"./index.38bf7259.js";import"./iframe.737cbf69.js";const B={parameters:{storySource:{source:`import type { Meta, StoryObj } from '@storybook/react'
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
    variant: 'primary',
    size: '2',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: [
        'primary',
        'secondary',
        'ghost',
        'transparentWhite',
        'transparentBlack',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['1', '2', '3'],
      control: {
        type: 'inline-radio',
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

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Ghost: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: '1',
  },
}

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
        <Button variant="transparentBlack">Transparent</Button>
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
        <Button variant="transparentWhite">Transparent</Button>
      </Box>
    </Box>
  )
}
`,locationsMap:{"transparent-black":{startLoc:{col:32,line:91},endLoc:{col:1,line:112},startBody:{col:32,line:91},endBody:{col:1,line:112}},"transparent-white":{startLoc:{col:32,line:113},endLoc:{col:1,line:134},startBody:{col:32,line:113},endBody:{col:1,line:134}}}}},title:"Interaction/Button",component:r,args:{children:"Send",variant:"primary",size:"2",disabled:!1},argTypes:{variant:{options:["primary","secondary","ghost","transparentWhite","transparentBlack"],control:{type:"inline-radio"}},size:{options:["1","2","3"],control:{type:"inline-radio"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},onClick:{action:"clicked"}}},x={},y={args:{variant:"secondary",children:"Create new"}},g={args:{variant:"tertiary",children:"Cancel"}},f={args:{size:"1"}},w={args:{children:a(p,{children:["Pr\xF3ximo passo",n(l,{})]})}},v={args:{disabled:!0}},S=o(()=>a(t,{css:{position:"relative",marginTop:"$6"},children:[n(e,{src:"https://images.unsplash.com/photo-1453235421161-e41b42ebba05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80"}),n(t,{css:{position:"absolute",bottom:0,right:0,margin:"$4"},children:n(r,{variant:"transparentBlack",children:"Transparent"})})]}),"TransparentBlack"),T=o(()=>a(t,{css:{position:"relative",marginTop:"$6"},children:[n(e,{src:"https://images.unsplash.com/photo-1447690709975-318628b14c57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80"}),n(t,{css:{position:"absolute",bottom:0,right:0,margin:"$4"},children:n(r,{variant:"transparentWhite",children:"Transparent"})})]}),"TransparentWhite"),D=["Primary","Secondary","Ghost","Small","WithIcon","Disabled","TransparentBlack","TransparentWhite"];export{v as Disabled,g as Ghost,x as Primary,y as Secondary,f as Small,S as TransparentBlack,T as TransparentWhite,w as WithIcon,D as __namedExportsOrder,B as default};
//# sourceMappingURL=button.stories.1b462554.js.map
