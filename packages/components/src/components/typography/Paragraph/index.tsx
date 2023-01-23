import { Text } from '@components/typography/Text'
import { ParagraphProps } from './types'

export const DEFAULT_TAG_P = 'p'

export function Paragraph(props: ParagraphProps) {
  return <Text as={DEFAULT_TAG_P} {...props} />
}

Paragraph.displayName = 'Paragraph'
