import React from "react";
import { IconButton, PaperPlaneIcon } from "@venusui/components";

export default { title: 'ButtonIcon' };

export const buttons = () => (
  <>
    <IconButton>
      <PaperPlaneIcon />
    </IconButton>
    <IconButton size="1">
      <PaperPlaneIcon />
    </IconButton>
    <IconButton size="2">
      <PaperPlaneIcon />
    </IconButton>
    <IconButton size="3">
      <PaperPlaneIcon />
    </IconButton>
    <IconButton size="4">
      <PaperPlaneIcon />
    </IconButton>
    <IconButton variant="ghost">
      <PaperPlaneIcon />
    </IconButton>
    <IconButton variant="ghost" state="active">
      <PaperPlaneIcon />
    </IconButton>
    <IconButton variant="ghost" state="waiting">
      <PaperPlaneIcon />
    </IconButton>
    <IconButton variant="raised">
      <PaperPlaneIcon />
    </IconButton>
    <IconButton variant="raised" state="active">
      <PaperPlaneIcon />
    </IconButton>
    <IconButton variant="raised" state="waiting">
      <PaperPlaneIcon />
    </IconButton>
  </>
);