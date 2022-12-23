// import { Flex, Text, VerifiedBadge } from '@venusui/components'
import { Flex, Text } from '@venusui/components'

export default { title: 'VerifiedBadge' }

export const badges = () => (
  <>
    <Flex css={{ alignItems: 'baseline' }}>
      <Text size="3" css={{ fontWeight: '500' }}>
        Colm Tuite
      </Text>
      {/* <VerifiedBadge
        css={{ alignSelf: 'center', marginRight: '$1', marginLeft: '$1' }}
      /> */}
      <Text size="3" css={{ color: '$slate11' }}>
        @colmtuite
      </Text>
    </Flex>
  </>
)
