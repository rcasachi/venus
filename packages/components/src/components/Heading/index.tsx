import { Text } from '../Text'
import { HeadingProps } from './types'

export const DEFAULT_TAG = 'h1'

export function Heading(props: HeadingProps) {
  return <Text as={DEFAULT_TAG} {...props} />
}

Heading.displayName = 'Heading'
