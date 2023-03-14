import { Text } from '@components/typography/Text'
import { styled } from '@theme'

export const Caption = styled('caption', Text, {
  textAlign: 'start',
  marginBottom: '$4',
})

export const Tbody = styled('tbody', {
  width: '100%',
})

export const Tfoot = styled('tfoot', {
  fontWeight: '$3',
})

export const Tr = styled('tr', {})

export const Th = styled('th', {
  fontWeight: 'unset',
  textAlign: 'start',
  fontSize: '$2',
  py: '$2',
  borderBottom: '1px solid $gray4',

  variants: {
    align: {
      start: {
        textAlign: 'start',
      },
      center: {
        textAlign: 'center',
      },
      end: {
        textAlign: 'end',
      },
    },
    border: {
      solid: {
        borderBottom: '1px solid $gray4',
      },
      dashed: {
        borderBottom: '1px dashed $gray8',
      },
    },
  },
  defaultVariants: {
    align: 'start',
    border: 'solid',
  },
})

export const Td = styled('td', {
  py: '$2',
  borderBottom: '1px solid $gray4',
  fontSize: '$2',

  variants: {
    align: {
      start: {
        textAlign: 'start',
      },
      center: {
        textAlign: 'center',
      },
      end: {
        textAlign: 'end',
      },
    },
    border: {
      solid: {
        borderBottom: '1px solid $gray4',
      },
      dashed: {
        borderBottom: '1px dashed $gray8',
      },
    },
  },
  defaultVariants: {
    align: 'start',
    border: 'solid',
  },
})

export const Thead = styled('thead', {
  [`& ${Th}`]: {
    fontSize: '$1',
    color: '$gray11',
  },
  [`& ${Td}`]: {
    fontSize: '$1',
    color: '$gray11',
  },
})

export const Table = styled('table', {
  fontFamily: '$untitled',
  color: '$hiContrast',
  width: '100%',
  tableLayout: 'fixed',
  borderSpacing: 0,

  variants: {
    striped: {
      true: {
        [`& ${Tbody}`]: {
          [`& ${Tr}`]: {
            '&:nth-child(odd)': {
              bc: '$gray4',
            },
          },
        },
      },
    },
  },
})
