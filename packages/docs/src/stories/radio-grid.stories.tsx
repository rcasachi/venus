import { RadioGridGroup, RadioGrid, Text } from '@venusui/components'

export default { title: 'RadioGrid' }

export const radios = () => (
  <>
    <RadioGridGroup defaultValue="1">
      <RadioGrid value="1" css={{ marginBottom: '$2' }}>
        <Text size="4" color="gray">
          -$1600
        </Text>
      </RadioGrid>
      <RadioGrid value="2" css={{ marginBottom: '$2' }}>
        <Text size="4" color="gray">
          -$800
        </Text>
      </RadioGrid>
      <RadioGrid value="3" css={{ marginBottom: '$2' }}>
        <Text size="4" color="gray">
          -$100
        </Text>
      </RadioGrid>
    </RadioGridGroup>
  </>
)
