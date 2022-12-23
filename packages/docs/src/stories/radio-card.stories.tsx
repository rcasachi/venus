import { Flex, RadioCardGroup, RadioCard, Text } from '@venusui/components'

export default { title: 'RadioCard' }

export const radios = () => (
  <>
    <RadioCardGroup defaultValue="1">
      <RadioCard value="1" css={{ marginBottom: '$2' }}>
        <Flex css={{ alignItems: 'center' }}>
          <Text
            size="5"
            css={{ fontWeight: '500', lineHeight: '25px', marginRight: '$6' }}
          >
            2.5GHz 14-core Intel Xeon W processor, Turbo Boost up to 4.3GHz
          </Text>
          <Text size="4" color="gray">
            -$1600
          </Text>
        </Flex>
      </RadioCard>
      <RadioCard value="2" css={{ marginBottom: '$2' }}>
        <Flex css={{ alignItems: 'center' }}>
          <Text
            size="5"
            css={{ fontWeight: '500', lineHeight: '25px', marginRight: '$6' }}
          >
            2.5GHz 14-core Intel Xeon W processor, Turbo Boost up to 4.3GHz
          </Text>
          <Text size="4" color="gray">
            -$800
          </Text>
        </Flex>
      </RadioCard>
      <RadioCard value="3" css={{ marginBottom: '$2' }}>
        <Flex css={{ alignItems: 'center' }}>
          <Text
            size="5"
            css={{ fontWeight: '500', lineHeight: '25px', marginRight: '$6' }}
          >
            2.5GHz 14-core Intel Xeon W processor, Turbo Boost up to 4.3GHz
          </Text>
          <Text size="4" color="gray"></Text>
        </Flex>
      </RadioCard>
    </RadioCardGroup>
  </>
)
