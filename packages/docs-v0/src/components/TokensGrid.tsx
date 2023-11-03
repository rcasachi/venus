import { Text, Box } from '@venusui/components'
import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
  border?: boolean
  spacing?: boolean
  borderStyle?: boolean
}

export function Radio({ radius = '' }) {
  return <Box css={{ backgroundColor: '$hiContrast', width: '$10', height: '$5', borderRadius: radius }} />
};

export function Spacing({ spacing = '' }) {
  return <Box css={{ backgroundColor: '$hiContrast', width: spacing, height: '$2' }} />
};

export function BorderStyle({ style = '' }) {
  return <Box css={{ borderBottom: `4px ${style} $colors$hiContrast`, width: '$12', height: '$1' }} />
};

export function TokensGrid({ tokens, hasRemValue = false, border = false, spacing = false, borderStyle = false }: TokensGridProps) {
  if (Object.entries(tokens).length === 0) {
    return <Text variant="gold">No tokens at this section</Text>
  }

  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
          {(border || spacing || borderStyle) && <th>Example</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>${key}</td>
              <td>{value}</td>
              {hasRemValue && (
                <td>{Number(value.replace('rem', '')) * 16}px</td>
              )}
              {border && (
                <td><Radio radius={`$${key}`} /></td>
              )}
              {spacing && (
                <td><Spacing spacing={`$${key}`} /></td>
              )}
              {borderStyle && (
                <td><BorderStyle style={`${key}`} /></td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
