import { cva } from 'class-variance-authority'
import styles from './flex.module.css'

export const flex = cva('base', {
  variants: {
    direction: {
      row: 'flex-direction-row',
      column: 'flex-direction-column',
      rowReverse: 'flex-direction-row-reverse',
      columnReverse: 'flex-direction-column-reverse',
    },
    align: {
      start: 'flex-align-start',
      center: 'flex-align-center',
      end: 'flex-align-end',
      stretch: 'flex-align-stretch',
      baseline: 'flex-align-baseline',
    },
    justify: {
      start: 'flex-justify-start',
      center: 'flex-justify-center',
      end: 'flex-justify-end',
      between: 'flex-justify-space-between',
      around: 'flex-justify-space-around',
    },
    wrap: {
      noWrap: 'flex-no-wrap',
      wrap: 'flex-wrap',
      wrapReverse: 'flex-wrap-reverse',
    },
    gap: {
      1: 'flex-gap-1',
      2: 'flex-gap-2',
      3: 'flex-gap-3',
      4: 'flex-gap-4',
      5: 'flex-gap-5',
      6: 'flex-gap-6',
      7: 'flex-gap-7',
      8: 'flex-gap-8',
      9: 'flex-gap-9',
    },
  },
  defaultVariants: {
    direction: 'row',
    align: 'stretch',
    justify: 'start',
    wrap: 'noWrap',
  },
})
