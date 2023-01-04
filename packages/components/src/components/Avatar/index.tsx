// import { ElementRef, forwardRef } from 'react'
// import { Box } from '@components/Box'
// import { Status } from '@components/Status'

// import {
//   StyledAvatar,
//   StyledAvatarFallback,
//   StyledAvatarGroup,
//   StyledAvatarImage,
//   StyledAvatarNestedItem,
// } from './styles'
// import { AvatarOwnProps } from './types'

// export const Avatar = forwardRef<
//   ElementRef<typeof StyledAvatar>,
//   AvatarOwnProps
// >(function AvatarRef(
//   { alt, src, fallback, size, variant, shape, css, status, ...props },
//   forwardedRef,
// ) {
//   return (
//     <Box
//       css={{
//         ...css,
//         position: 'relative',
//         height: 'fit-content',
//         width: 'fit-content',
//       }}
//     >
//       <StyledAvatar
//         {...props}
//         ref={forwardedRef}
//         size={size}
//         variant={variant}
//         shape={shape}
//       >
//         <StyledAvatarImage alt={alt} src={src} />
//         <StyledAvatarFallback size={size}>{fallback}</StyledAvatarFallback>
//       </StyledAvatar>
//       {status && (
//         <Box
//           css={{
//             position: 'absolute',
//             bottom: '0',
//             right: '0',
//             boxShadow: '0 0 0 3px $colors$loContrast',
//             borderRadius: '$round',
//             mr: '-3px',
//             mb: '-3px',
//           }}
//         >
//           <Status size={size && size > 2 ? '2' : '1'} variant={status} />
//         </Box>
//       )}
//     </Box>
//   )
// })

// export const AvatarGroup = StyledAvatarGroup
// export const AvatarNestedItem = StyledAvatarNestedItem
import { PersonIcon } from '@radix-ui/react-icons'
import { ComponentProps } from 'react'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <PersonIcon />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
