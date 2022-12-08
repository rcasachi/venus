export const blur = {
  blur4: '4px',
  blur8: '8px',
  blur16: '16px',
  blur32: '32px',
  blur64: '64px',
};

export const position = {
  position0: '0px 0px',
  position2: '0px 2px',
  position4: '0px 4px',
  position8: '0px 8px',
  position16: '0px 16px',
  position32: '0px 32px',
  position64: '0px 64px',
};

export const opacity = {
  opacity04: '4%',
  opacity06: '6%',
  opacity08: '8%',
  opacity10: '10%',
  opacity12: '12%',
  opacity16: '16%',
  opacity24: '24%',
  opacity32: '32%',
};

export const shadows = {
  ...blur,
  ...opacity,
  ...position,
};
