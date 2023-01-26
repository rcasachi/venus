import { ScrollAreaCorner, ScrollAreaRoot, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from './styles'
import { ScrollAreaProps } from './types';

export const ScrollArea = ({
  asChild = false,
  type = 'hover',
  scrollHideDelay = 600,
  children,
  dir,
  css
}: ScrollAreaProps) => {
  return (
    <ScrollAreaRoot
      asChild={asChild}
      type={type}
      scrollHideDelay={scrollHideDelay}
      dir={dir}
      css={css}
    >
      <ScrollAreaViewport>
        {children}
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollAreaRoot>
  )
};

ScrollArea.displayName = 'ScrollArea'
