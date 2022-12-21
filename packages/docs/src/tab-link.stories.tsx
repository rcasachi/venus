import React from "react";
import { Flex, Box, TabLink, CodeIcon, ExclamationTriangleIcon, CommitIcon, VideoIcon, ActivityLogIcon, GearIcon, BarChartIcon, LockClosedIcon, ReaderIcon } from "@venusui/components";

export default { title: 'TabLink' };

export const links = () => (
  <>
    <Flex css={{ borderBottom: '1px solid $slate6' }}>
      <TabLink href="#" active>
        <Box css={{ marginRight: '$1' }}>
          <CodeIcon />
        </Box>
        Code
      </TabLink>
      <TabLink href="#">
        <Box css={{ marginRight: '$1' }}>
          <ExclamationTriangleIcon />
        </Box>
        Issues
      </TabLink>
      <TabLink href="#">
        <Box css={{ marginRight: '$1' }}>
          <CommitIcon />
        </Box>
        Pull requests
      </TabLink>
      <TabLink href="#">
        <Box css={{ marginRight: '$1' }}>
          <VideoIcon />
        </Box>
        Actions
      </TabLink>
      <TabLink href="#">
        <Box css={{ marginRight: '$1' }}>
          <ActivityLogIcon />
        </Box>
        Projects
      </TabLink>
      <TabLink href="#">
        <Box css={{ marginRight: '$1' }}>
          <ReaderIcon />
        </Box>
        Wiki
      </TabLink>
      <TabLink href="#">
        <Box css={{ marginRight: '$1' }}>
          <LockClosedIcon />
        </Box>
        Security
      </TabLink>
      <TabLink href="#">
        <Box css={{ marginRight: '$1' }}>
          <BarChartIcon />
        </Box>
        Insights
      </TabLink>
      <TabLink href="#">
        <Box css={{ marginRight: '$1' }}>
          <GearIcon />
        </Box>
        Settings
      </TabLink>
    </Flex>
  </>
);