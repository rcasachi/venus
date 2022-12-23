import { Separator } from '@venusui/components'

export default { title: 'Separator' }

export const separators = () => (
  <>
    <Separator />
    <Separator css={{ marginTop: '$4' }} size="1" />
    <Separator css={{ marginTop: '$4' }} size="2" />
  </>
)
