import {
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
