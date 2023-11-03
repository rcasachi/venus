import {
  Root,
  Scrollbar,
  Viewport,
  Thumb,
  Corner,
  ScrollAreaProps,
} from '@radix-ui/react-scroll-area'

import styles from './scroll-area.module.css'

export const ScrollArea = ({
  asChild = false,
  type = 'hover',
  scrollHideDelay = 600,
  children,
  dir,
  style,
}: ScrollAreaProps) => {
  return (
    <Root
      asChild={asChild}
      type={type}
      scrollHideDelay={scrollHideDelay}
      dir={dir}
      style={style}
      className={styles['scroll-area-root']}
    >
      <Viewport className={styles['scroll-area-viewport']}>{children}</Viewport>
      <Scrollbar
        className={styles['scroll-area-scrollbar']}
        orientation="vertical"
      >
        <Thumb className={styles['scroll-area-thumb']} />
      </Scrollbar>
      <Scrollbar
        className={styles['scroll-area-scrollbar']}
        orientation="horizontal"
      >
        <Thumb className={styles['scroll-area-thumb']} />
      </Scrollbar>
      <Corner className={styles['scroll-area-corner']} />
    </Root>
  )
}
