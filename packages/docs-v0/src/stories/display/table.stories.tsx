import { Box, Caption, CheckIcon, Flex, Table, TableProps, Tbody, Td, Tfoot, Th, Thead, Tr } from '@venusui/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Display/Table',
  component: Table,
  args: {
    striped: false,
    children: (
      <>
        <Caption>This is the table caption.</Caption>
        <Thead>
          <Tr>
            <Th css={{ width: 190 }}>Club</Th>
            <Td align="center">MP</Td>
            <Td align="center">W</Td>
            <Td align="center">D</Td>
            <Td align="center">L</Td>
            <Td align="center">GF</Td>
            <Td align="center">GA</Td>
            <Td align="center">GD</Td>
            <Td align="center">Pts</Td>
            <Td css={{ width: 100 }} align="center">
              Last 5
            </Td>
          </Tr>
        </Thead>
        <Tbody>
          {['Man City', 'Man United', 'Leicester City', 'Chelsea', 'West Ham'].map(club => (
            <Tr>
              <Th css={{ width: 190 }}>{club}</Th>
              <Td align="center">32</Td>
              <Td align="center">32</Td>
              <Td align="center">32</Td>
              <Td align="center">32</Td>
              <Td align="center">32</Td>
              <Td align="center">32</Td>
              <Td align="center">32</Td>
              <Td align="center">32</Td>
              <Td align="center">
                <Flex css={{ gap: '$1', justifyContent: 'flex-end' }}>
                  {[...Array(5)].map(() => (
                    <Box
                      css={{
                        width: 15,
                        height: 15,
                        backgroundColor: '$green9',
                        borderRadius: '$round',
                      }}
                    >
                      <CheckIcon />
                    </Box>
                  ))}
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th css={{ width: 190 }}>Leicester City</Th>
            <Td align="center">32</Td>
            <Td align="center">32</Td>
            <Td align="center">32</Td>
            <Td align="center">32</Td>
            <Td align="center">32</Td>
            <Td align="center">32</Td>
            <Td align="center">32</Td>
            <Td align="center">32</Td>
            <Td align="center">
              <Flex css={{ gap: '$1', justifyContent: 'flex-end' }}>
                  {[...Array(5)].map(() => (
                    <Box
                      css={{
                        width: 15,
                        height: 15,
                        backgroundColor: '$green9',
                        borderRadius: '$round',
                      }}
                    >
                      <CheckIcon />
                    </Box>
                  ))}
                </Flex>
            </Td>
          </Tr>
        </Tfoot>
      </>
    ),
  },
  argTypes: {
    stripped: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<TableProps>

export const Default: StoryObj<TableProps> = {}
