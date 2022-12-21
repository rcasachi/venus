import { CSS, VariantProps } from "@venusui/tokens";

import { Text } from "../Text";
import { DEFAULT_TAG } from ".";

export type TextSizeVariants = Pick<VariantProps<typeof Text>, "size">;

export type HeadingSizeVariants = "1" | "2" | "3" | "4";

export type HeadingVariants = { size?: HeadingSizeVariants } & Omit<
  VariantProps<typeof Text>,
  "size"
>;

export type HeadingProps = React.ComponentProps<typeof DEFAULT_TAG> &
  HeadingVariants & { css?: CSS; as?: any };
