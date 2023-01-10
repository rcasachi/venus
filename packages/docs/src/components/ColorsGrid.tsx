import { Text, Flex, Grid, Box, Table, Tbody, Tr, Td } from '@venusui/components'

const variations = Array.from({ length: 12 }, (_, i) => i + 1)
const colors = [
  'gray',
  'mauve',
  'slate',
  'sage',
  'olive',
  'sand',
  'tomato',
  'red',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'indigo',
  'blue',
  'sky',
  'mint',
  'cyan',
  'teal',
  'green',
  'grass',
  'lime',
  'yellow',
  'amber',
  'orange',
  'brown',
  'bronze',
  'gold',
  'grayA',
  'mauveA',
  'slateA',
  'sageA',
  'oliveA',
  'sandA',
  'tomatoA',
  'redA',
  'crimsonA',
  'pinkA',
  'plumA',
  'purpleA',
  'violetA',
  'indigoA',
  'blueA',
  'skyA',
  'mintA',
  'cyanA',
  'tealA',
  'greenA',
  'grassA',
  'limeA',
  'yellowA',
  'amberA',
  'orangeA',
  'brownA',
  'bronzeA',
  'goldA',
  'whiteA',
  'blackA',
]
const extraColors = [
  '$hiContrast',
  '$loContrast',
  '$canvas',
  '$panel',
  '$transparentPanel',
  '$shadowLight',
  '$shadowDark',
  '$default'
]

export function ColorsGrid() {
  return (
    <>
      <Table>
        <Tbody>
          <Tr>
            <Td></Td>
            {variations.map(n => (
              <Td align="center"><Text variant="contrast">{n}</Text></Td>
            ))}
          </Tr>
          {colors.map(c => (
            <Tr>
              <Td><Text variant="contrast">${c}</Text></Td>
              {variations.map(n => (
                <Td css={{ backgroundColor: `$${c}${n}` }}></Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>

      <br/>

      <Grid columns="8" align="center" gapX="3" gapY="6">
        {extraColors.map((color) => {
          return (
            <Flex direction="column">
              <Box key={color} css={{ backgroundColor: `${color}`, padding: '2rem' }} />
              <Text css={{fontWeight: '$3', display: 'block'}} variant="yellow" as="div">{color}</Text>
            </Flex>
          )
        })}
      </Grid>
    </>
  )
}
