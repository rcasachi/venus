import { Status } from '@components/Status'
import { Box } from '@components/surfaces/Box'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'
import { AvatarProps } from './types'

export function Avatar({
  children,
  inactive,
  interactive,
  shape,
  size,
  status,
  variant,
  ...props
}: AvatarProps) {
  return (
    <Box
      css={{
        position: 'relative',
        height: 'fit-content',
        width: 'fit-content',
      }}
    >
      <AvatarContainer
        size={size}
        shape={shape}
        inactive={inactive}
        variant={variant}
        interactive={interactive}
      >
        <AvatarImage {...props} />

        <AvatarFallback delayMs={600} size={size}>
          {children}
        </AvatarFallback>
      </AvatarContainer>
      {status && (
        <Box
          css={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            boxShadow: '0 0 0 2px $colors$loContrast',
            borderRadius: '$round',
          }}
        >
          <Status size={size && size > 2 ? 2 : 1} variant={status} />
        </Box>
      )}
    </Box>
  )
}

export { AvatarGroup, AvatarNestedItem } from './styles'

Avatar.displayName = 'Avatar'
