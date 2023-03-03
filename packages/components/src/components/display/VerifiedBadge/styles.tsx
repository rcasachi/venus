import { styled } from '@theme'
import { Flex } from '@components/surfaces/Flex'

export const VerifiedBadgeContainer = styled('div', Flex, {
  alignItems: 'center',
  backgroundColor: '$blue9',
  borderRadius: '$round',
  color: 'white',
  flexShrink: 0,
  justifyContent: 'center',
  width: '$3',
  height: '$3',

  svg: {
    alignSelf: 'center',
  },
})
