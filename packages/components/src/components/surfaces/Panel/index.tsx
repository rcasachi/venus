import { css, styled } from '@theme'

export const panelStyles = css({
  backgroundColor: '$panel',
  borderRadius: '$3',
  padding: '$1',
  boxShadow:
    '$colors$shadowLight 0px 10px 38px -10px, $colors$shadowDark 0px 10px 20px -15px',
})

export const Panel = styled('div', panelStyles)

Panel.displayName = 'Panel'
