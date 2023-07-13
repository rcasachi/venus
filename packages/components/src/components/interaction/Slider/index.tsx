import { ElementRef, forwardRef } from 'react'
import { SliderRange, SliderThumb, SliderTrack, SliderRoot } from './styles'
import { SliderProps } from './types'

export const Slider = forwardRef<ElementRef<typeof SliderRoot>, SliderProps>(
  (props, forwardedRef) => {
    const hasRange = Array.isArray(props.defaultValue || (props as any).value)
    const thumbsArray = hasRange
      ? props.defaultValue || (props as any).value
      : [props.defaultValue || (props as any).value]

    return (
      <SliderRoot {...props} ref={forwardedRef}>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        {thumbsArray.map((_: any, i: number) => (
          <SliderThumb key={i} />
        ))}
      </SliderRoot>
    )
  },
)

Slider.displayName = 'Slider'
