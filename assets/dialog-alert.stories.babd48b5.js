var a=Object.defineProperty;var n=(i,r)=>a(i,"name",{value:r,configurable:!0});import{_ as o,$ as s,u as l,a0 as g,a1 as d,H as c,a2 as A,b as D,F as h,a3 as u,a4 as p}from"./index.ab77ce9b.js";import{j as e,F as C,a as t}from"./jsx-runtime.6c6bd70f.js";import"./index.38bf7259.js";import"./iframe.737cbf69.js";const y={parameters:{storySource:{source:`import {
  Flex,
  AlertDialog,
  AlertDialogTrigger,
  Button,
  AlertDialogContent,
  AlertDialogTitle,
  Heading,
  AlertDialogDescription,
  Text,
  AlertDialogCancel,
  AlertDialogAction,
} from '@venusui/components'

export default { title: 'DialogAlert' }

export const dialogAlerts = () => (
  <>
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Alert Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle asChild>
          <Heading>Are you sure?</Heading>
        </AlertDialogTitle>
        <AlertDialogDescription asChild>
          <Text css={{ marginTop: '$2' }}>
            This will do a very dangerous thing. Thar be dragons!
          </Text>
        </AlertDialogDescription>
        <Flex css={{ justifyContent: 'flex-end', gap: '$3', marginTop: '$5' }}>
          <AlertDialogCancel asChild>
            <Button ghost>Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button variant="red">Delete</Button>
          </AlertDialogAction>
        </Flex>
      </AlertDialogContent>
    </AlertDialog>
  </>
)
`,locationsMap:{"dialog-alerts":{startLoc:{col:28,line:17},endLoc:{col:1,line:43},startBody:{col:28,line:17},endBody:{col:1,line:43}}}}},title:"DialogAlert"},F=n(()=>e(C,{children:t(o,{children:[e(s,{asChild:!0,children:e(l,{children:"Alert Dialog"})}),t(g,{children:[e(d,{asChild:!0,children:e(c,{children:"Are you sure?"})}),e(A,{asChild:!0,children:e(D,{css:{marginTop:"$2"},children:"This will do a very dangerous thing. Thar be dragons!"})}),t(h,{css:{justifyContent:"flex-end",gap:"$3",marginTop:"$5"},children:[e(u,{asChild:!0,children:e(l,{ghost:!0,children:"Cancel"})}),e(p,{asChild:!0,children:e(l,{variant:"red",children:"Delete"})})]})]})]})}),"dialogAlerts"),$=["dialogAlerts"];export{$ as __namedExportsOrder,y as default,F as dialogAlerts};
//# sourceMappingURL=dialog-alert.stories.babd48b5.js.map
