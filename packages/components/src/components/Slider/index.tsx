import React from 'react';

import { SliderRange, SliderThumb, SliderTrack, StyledSlider } from './styles';
import { SliderProps } from './types';


export const Slider = React.forwardRef<React.ElementRef<typeof StyledSlider>, SliderProps>(
  (props, forwardedRef) => {
    const hasRange = Array.isArray(props.defaultValue || (props as any).value);
    const thumbsArray = hasRange
      ? props.defaultValue || (props as any).value
      : [props.defaultValue || (props as any).value];

    return (
      <StyledSlider {...props} ref={forwardedRef}>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        {thumbsArray.map((_: any, i: number) => (
          <SliderThumb key={i} />
        ))}
      </StyledSlider>
    );
  }
);