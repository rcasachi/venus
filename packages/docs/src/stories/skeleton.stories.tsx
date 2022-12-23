import { Flex, Heading, Skeleton } from '@venusui/components'

export default { title: 'Skeleton' }

export const skeletons = () => (
  <>
    <Heading css={{ marginBottom: '$6' }}>Avatar variants</Heading>
    <Flex
      css={{
        alignItems: 'center',
        gap: '$5',
        flexWrap: 'wrap',
        marginBottom: '$7',
      }}
    >
      <Skeleton variant="avatar1" />
      <Skeleton variant="avatar2" />
      <Skeleton variant="avatar3" />
      <Skeleton variant="avatar4" />
      <Skeleton variant="avatar5" />
      <Skeleton variant="avatar6" />
    </Flex>
    <Heading css={{ marginBottom: '$6' }}>Text variants</Heading>
    <Flex
      css={{
        flexDirection: 'column',
        gap: '$4',
        marginBottom: '$7',
      }}
    >
      <Skeleton variant="title" css={{ width: '50%' }} />
      <Skeleton variant="heading" css={{ width: '25%' }} />
    </Flex>
    <Flex
      css={{
        flexDirection: 'column',
        gap: '$4',
        marginBottom: '$7',
      }}
    >
      <Skeleton variant="text" />
      <Skeleton variant="text" css={{ width: '75%' }} />
      <Skeleton variant="text" />
      <Skeleton variant="text" css={{ width: '50%' }} />
    </Flex>
    <Heading css={{ marginBottom: '$6' }}>Control variants</Heading>
    <Flex
      css={{
        flexDirection: 'column',
        gap: '$4',
      }}
    >
      <Skeleton variant="button" />
    </Flex>
  </>
)
