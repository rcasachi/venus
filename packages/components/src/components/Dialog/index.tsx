import { styled, keyframes } from '@venusui/tokens';
import { Cross1Icon } from '@radix-ui/react-icons';
import { Root, Overlay, Content, Close, Trigger } from '@radix-ui/react-dialog';
import React, { ReactNode } from 'react';

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeout = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const scaleIn = keyframes({
  from: { transform: 'scale(0.9)' },
  to: { transform: 'scale(1)' },
})

const StyledOverlay = styled(Overlay, {
  // overlay styles
  '&[data-state="open"]': {
    animation: `${fadeIn} 300ms ease-out`,
  },

  '&[data-state="closed"]': {
    animation: `${fadeout} 200ms ease-out`,
  },
});

interface IDialog {
  children: ReactNode;
}

export function Dialog({ children, ...props }: IDialog) {
  return (
    <Root {...props}>
      <StyledOverlay />
      {children}
    </Root>
  );
}

const StyledContent = styled(Content, {
  // content styles
  variants: {
    animation: {
      fade: {
        '&[data-state="open"]': {
          animation: `${fadeIn} 300ms ease-out`,
        },

        '&[data-state="closed"]': {
          animation: `${fadeout} 200ms ease-out`,
        },
      },
      scale: {
        animation: `${fadeIn} 300ms ease-out, ${scaleIn} 200ms ease-out`,
      },
    },
  },
});

const StyledCloseButton = styled(Close, {
  // close button styles
});

export const DialogContent = React.forwardRef(({ children, ...props }: any, forwardedRef) => (
    <StyledContent {...props} ref={forwardedRef}>
      {children}
      <StyledCloseButton>
        <Cross1Icon />
      </StyledCloseButton>
    </StyledContent>
  ));

export const DialogTrigger = Trigger;