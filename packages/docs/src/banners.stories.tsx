import React from "react";
import { Banner } from "@venusui/components";

export default { title: 'Banner' };

export const banners = () => (
  <>
    <Banner css={{marginBottom: '$2'}}>Banner</Banner>
    <Banner css={{marginBottom: '$2'}} variant="loContrast">Banner</Banner>
    <Banner css={{marginBottom: '$2'}} variant="gray">Banner</Banner>
    <Banner css={{marginBottom: '$2'}} variant="blue">Banner</Banner>
    <Banner css={{marginBottom: '$2'}} variant="green">Banner</Banner>
    <Banner css={{marginBottom: '$2'}} variant="red">Banner</Banner>
    <Banner css={{marginBottom: '$2'}} size="1">Banner</Banner>
    <Banner css={{marginBottom: '$2'}} rounded>Banner</Banner>
    <Banner css={{marginBottom: '$2'}} border variant="gray">Banner</Banner>
    <Banner css={{marginBottom: '$2'}} border variant="blue">Banner</Banner>
    <Banner css={{marginBottom: '$2'}} border variant="loContrast">Banner</Banner>
  </>
);