import {
  Flex,
  Box,
  Table,
  Caption,
  Thead,
  Th,
  Td,
  Tr,
  Tbody,
  CheckIcon,
  Tfoot,
} from '@venusui/components'

export default { title: 'Table' }

export const tables = () => (
  <>
    <Table>
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
        <Tr>
          <Th css={{ width: 190 }}>Man City</Th>
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
            </Flex>
          </Td>
        </Tr>
        <Tr>
          <Th css={{ width: 190 }}>Man United</Th>
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
            </Flex>
          </Td>
        </Tr>
        <Tr>
          <Td>Leicester City</Td>
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
            </Flex>
          </Td>
        </Tr>
        <Tr>
          <Th css={{ width: 190 }}>Chelsea</Th>
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
            </Flex>
          </Td>
        </Tr>
        <Tr>
          <Th css={{ width: 190 }}>West Ham</Th>
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
            </Flex>
          </Td>
        </Tr>
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
            </Flex>
          </Td>
        </Tr>
      </Tfoot>
    </Table>

    <Table css={{ mt: '$7' }}>
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
        <Tr>
          <Th css={{ width: 190 }}>
            <Flex>
              <Box css={{ width: '$5' }}>1</Box>
              Man City
            </Flex>
          </Th>
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
            </Flex>
          </Td>
        </Tr>
        <Tr>
          <Th css={{ width: 190 }}>
            <Flex>
              <Box css={{ width: '$5' }}>2</Box>
              Man United
            </Flex>
          </Th>
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
            </Flex>
          </Td>
        </Tr>
        <Tr style={{ borderBottom: '2px solid yellow' }}>
          <Td border="dashed">
            <Flex>
              <Box css={{ width: '$5' }}>3</Box>
              Leicester City
            </Flex>
          </Td>
          <Td align="center" border="dashed">
            32
          </Td>
          <Td align="center" border="dashed">
            32
          </Td>
          <Td align="center" border="dashed">
            32
          </Td>
          <Td align="center" border="dashed">
            32
          </Td>
          <Td align="center" border="dashed">
            32
          </Td>
          <Td align="center" border="dashed">
            32
          </Td>
          <Td align="center" border="dashed">
            32
          </Td>
          <Td align="center" border="dashed">
            32
          </Td>
          <Td align="center" border="dashed">
            <Flex css={{ gap: '$1', justifyContent: 'flex-end' }}>
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
            </Flex>
          </Td>
        </Tr>
        <Tr>
          <Th css={{ width: 190 }}>
            <Flex>
              <Box css={{ width: '$5' }}>4</Box>
              Chelsea
            </Flex>
          </Th>
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
            </Flex>
          </Td>
        </Tr>
        <Tr>
          <Th css={{ width: 190 }}>
            <Flex>
              <Box css={{ width: '$5' }}>5</Box>
              West Ham
            </Flex>
          </Th>
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
            </Flex>
          </Td>
        </Tr>
      </Tbody>
      <Tfoot>
        <Tr>
          <Th css={{ width: 190 }}>
            <Flex>
              <Box css={{ width: '$5' }}>6</Box>
              Leicester City
            </Flex>
          </Th>
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
            </Flex>
          </Td>
        </Tr>
      </Tfoot>
    </Table>

    <Table striped css={{ mt: '$7' }}>
      <Caption>Striped table caption.</Caption>
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
        <Tr>
          <Th css={{ width: 190 }}>Man City</Th>
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
            </Flex>
          </Td>
        </Tr>
        <Tr>
          <Th css={{ width: 190 }}>Man United</Th>
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
            </Flex>
          </Td>
        </Tr>
        <Tr>
          <Td>Leicester City</Td>
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
            </Flex>
          </Td>
        </Tr>
        <Tr>
          <Th css={{ width: 190 }}>Chelsea</Th>
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
            </Flex>
          </Td>
        </Tr>
        <Tr>
          <Th css={{ width: 190 }}>West Ham</Th>
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
            </Flex>
          </Td>
        </Tr>
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
            </Flex>
          </Td>
        </Tr>
      </Tfoot>
    </Table>
  </>
)
