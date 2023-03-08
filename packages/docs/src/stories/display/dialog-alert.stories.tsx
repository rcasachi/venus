import type { Meta, StoryObj } from '@storybook/react'
import {
  Flex,
  AlertDialog,
  AlertDialogTrigger,
  Button,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogProps
} from '@venusui/components'

export default {
  title: 'Display/AlertDialog',
} as Meta<AlertDialogProps>

export const Default: StoryObj<AlertDialogProps> = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Alert Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This will do a very dangerous thing. Thar be dragons!
        </AlertDialogDescription>
        <Flex justify="end" gap="3" css={{ mt: '$5' }}>
          <AlertDialogCancel asChild>
            <Button ghost>Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button>Delete</Button>
          </AlertDialogAction>
        </Flex>
      </AlertDialogContent>
    </AlertDialog>
  )
}
