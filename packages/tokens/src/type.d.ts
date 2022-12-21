import { CSS, CSSProperties } from "@stitches/react";

type WithPropertyValue<P> = {
  readonly [K in $$Sym]: P;
};

export type PropertyValue<
  Property extends keyof CSSProperties,
  Config = null
> = Config extends null
  ? WithPropertyValue<Property>
  : Config extends { [K: string]: any }
  ? CSS<Config["utils"]>[Property]
  : never;
