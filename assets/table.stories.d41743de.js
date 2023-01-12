var $=Object.defineProperty;var u=(T,b)=>$(T,"name",{value:b,configurable:!0});import{e as l,a$ as t,b0 as g,g as o,b1 as h,h as e,f as a,F as c,B as r,b2 as d,b3 as s}from"./index.ab77ce9b.js";import{a as i,F as C,j as n}from"./jsx-runtime.6c6bd70f.js";import"./index.38bf7259.js";import"./iframe.737cbf69.js";const I={parameters:{storySource:{source:`import {
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
`,locationsMap:{tables:{startLoc:{col:22,line:17},endLoc:{col:1,line:1307},startBody:{col:22,line:17},endBody:{col:1,line:1307}}}}},title:"Table"},f=u(()=>i(C,{children:[i(l,{children:[n(t,{children:"This is the table caption."}),n(g,{children:i(o,{children:[n(h,{css:{width:190},children:"Club"}),n(e,{align:"center",children:"MP"}),n(e,{align:"center",children:"W"}),n(e,{align:"center",children:"D"}),n(e,{align:"center",children:"L"}),n(e,{align:"center",children:"GF"}),n(e,{align:"center",children:"GA"}),n(e,{align:"center",children:"GD"}),n(e,{align:"center",children:"Pts"}),n(e,{css:{width:100},align:"center",children:"Last 5"})]})}),i(a,{children:[i(o,{children:[n(h,{css:{width:190},children:"Man City"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:i(c,{css:{gap:"$1",justifyContent:"flex-end"},children:[n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})})]})})]}),i(o,{children:[n(h,{css:{width:190},children:"Man United"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:i(c,{css:{gap:"$1",justifyContent:"flex-end"},children:[n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})})]})})]}),i(o,{children:[n(e,{children:"Leicester City"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:i(c,{css:{gap:"$1",justifyContent:"flex-end"},children:[n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})})]})})]}),i(o,{children:[n(h,{css:{width:190},children:"Chelsea"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:i(c,{css:{gap:"$1",justifyContent:"flex-end"},children:[n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})})]})})]}),i(o,{children:[n(h,{css:{width:190},children:"West Ham"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:i(c,{css:{gap:"$1",justifyContent:"flex-end"},children:[n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})})]})})]})]}),n(s,{children:i(o,{children:[n(h,{css:{width:190},children:"Leicester City"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:i(c,{css:{gap:"$1",justifyContent:"flex-end"},children:[n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})})]})})]})})]}),i(l,{css:{mt:"$7"},children:[n(t,{children:"This is the table caption."}),n(g,{children:i(o,{children:[n(h,{css:{width:190},children:"Club"}),n(e,{align:"center",children:"MP"}),n(e,{align:"center",children:"W"}),n(e,{align:"center",children:"D"}),n(e,{align:"center",children:"L"}),n(e,{align:"center",children:"GF"}),n(e,{align:"center",children:"GA"}),n(e,{align:"center",children:"GD"}),n(e,{align:"center",children:"Pts"}),n(e,{css:{width:100},align:"center",children:"Last 5"})]})}),i(a,{children:[i(o,{children:[n(h,{css:{width:190},children:i(c,{children:[n(r,{css:{width:"$5"},children:"1"}),"Man City"]})}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:i(c,{css:{gap:"$1",justifyContent:"flex-end"},children:[n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})})]})})]}),i(o,{children:[n(h,{css:{width:190},children:i(c,{children:[n(r,{css:{width:"$5"},children:"2"}),"Man United"]})}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:i(c,{css:{gap:"$1",justifyContent:"flex-end"},children:[n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})})]})})]}),i(o,{style:{borderBottom:"2px solid yellow"},children:[n(e,{border:"dashed",children:i(c,{children:[n(r,{css:{width:"$5"},children:"3"}),"Leicester City"]})}),n(e,{align:"center",border:"dashed",children:"32"}),n(e,{align:"center",border:"dashed",children:"32"}),n(e,{align:"center",border:"dashed",children:"32"}),n(e,{align:"center",border:"dashed",children:"32"}),n(e,{align:"center",border:"dashed",children:"32"}),n(e,{align:"center",border:"dashed",children:"32"}),n(e,{align:"center",border:"dashed",children:"32"}),n(e,{align:"center",border:"dashed",children:"32"}),n(e,{align:"center",border:"dashed",children:i(c,{css:{gap:"$1",justifyContent:"flex-end"},children:[n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})})]})})]}),i(o,{children:[n(h,{css:{width:190},children:i(c,{children:[n(r,{css:{width:"$5"},children:"4"}),"Chelsea"]})}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:i(c,{css:{gap:"$1",justifyContent:"flex-end"},children:[n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})})]})})]}),i(o,{children:[n(h,{css:{width:190},children:i(c,{children:[n(r,{css:{width:"$5"},children:"5"}),"West Ham"]})}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:i(c,{css:{gap:"$1",justifyContent:"flex-end"},children:[n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})})]})})]})]}),n(s,{children:i(o,{children:[n(h,{css:{width:190},children:i(c,{children:[n(r,{css:{width:"$5"},children:"6"}),"Leicester City"]})}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:i(c,{css:{gap:"$1",justifyContent:"flex-end"},children:[n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})})]})})]})})]}),i(l,{striped:!0,css:{mt:"$7"},children:[n(t,{children:"Striped table caption."}),n(g,{children:i(o,{children:[n(h,{css:{width:190},children:"Club"}),n(e,{align:"center",children:"MP"}),n(e,{align:"center",children:"W"}),n(e,{align:"center",children:"D"}),n(e,{align:"center",children:"L"}),n(e,{align:"center",children:"GF"}),n(e,{align:"center",children:"GA"}),n(e,{align:"center",children:"GD"}),n(e,{align:"center",children:"Pts"}),n(e,{css:{width:100},align:"center",children:"Last 5"})]})}),i(a,{children:[i(o,{children:[n(h,{css:{width:190},children:"Man City"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:i(c,{css:{gap:"$1",justifyContent:"flex-end"},children:[n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})})]})})]}),i(o,{children:[n(h,{css:{width:190},children:"Man United"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:i(c,{css:{gap:"$1",justifyContent:"flex-end"},children:[n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})})]})})]}),i(o,{children:[n(e,{children:"Leicester City"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:i(c,{css:{gap:"$1",justifyContent:"flex-end"},children:[n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})})]})})]}),i(o,{children:[n(h,{css:{width:190},children:"Chelsea"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:i(c,{css:{gap:"$1",justifyContent:"flex-end"},children:[n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})})]})})]}),i(o,{children:[n(h,{css:{width:190},children:"West Ham"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:i(c,{css:{gap:"$1",justifyContent:"flex-end"},children:[n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})})]})})]})]}),n(s,{children:i(o,{children:[n(h,{css:{width:190},children:"Leicester City"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:"32"}),n(e,{align:"center",children:i(c,{css:{gap:"$1",justifyContent:"flex-end"},children:[n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})}),n(r,{css:{width:15,height:15,backgroundColor:"$green9",borderRadius:"$round"},children:n(d,{})})]})})]})})]})]}),"tables"),y=["tables"];export{y as __namedExportsOrder,I as default,f as tables};
//# sourceMappingURL=table.stories.d41743de.js.map
