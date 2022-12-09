import { styled } from '@venusui/tokens';

export const Button = styled('button', {
  // borderRadius: '$round',
  // fontSize: '$4',
  // padding: '$2 $3',

  variants: {
    color: {
      turq: {
        // border: '2px solid $turq',
        '&:hover': {
          // backgroundColor: '$turq',
          // color: '$black',
        },
      },
      orange: {
        // border: '2px solid $orange',
        '&:hover': {
          // backgroundColor: '$orange',
          // color: '$black',
        },
      },
    },
  },

  defaultVariants: {
    color: 'turq',
  },
});