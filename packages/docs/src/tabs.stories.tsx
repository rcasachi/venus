import React from "react";
import { Heading, Tabs, TabsList, TabsTrigger, TabsContent, Text } from "@venusui/components";

export default { title: 'Tabs' };

export const tabses = () => (
  <>
    <Heading css={{ marginBottom: '$6' }}>Default</Heading>
    <Tabs defaultValue="tab-one">
      <TabsList>
        <TabsTrigger value="tab-one">General</TabsTrigger>
        <TabsTrigger value="tab-two">Hosting</TabsTrigger>
        <TabsTrigger value="tab-three">Editor</TabsTrigger>
        <TabsTrigger value="tab-four">Billing</TabsTrigger>
        <TabsTrigger value="tab-five">SEO</TabsTrigger>
      </TabsList>
      <TabsContent value="tab-one">
        <Text>Tabs Content 1</Text>
      </TabsContent>
      <TabsContent value="tab-two">
        <Text>Tabs Content 2</Text>
      </TabsContent>
      <TabsContent value="tab-three">
        <Text>Tabs Content 3</Text>
      </TabsContent>
      <TabsContent value="tab-four">
        <Text>Tabs Content 4</Text>
      </TabsContent>
      <TabsContent value="tab-five">
        <Text>Tabs Content 5</Text>
      </TabsContent>
    </Tabs>

    <Heading css={{ marginBottom: '$6', marginTop: '$7' }}>Vertical orientation</Heading>
    <Tabs defaultValue="tab-one" orientation="vertical">
      <TabsList>
        <TabsTrigger value="tab-one">General</TabsTrigger>
        <TabsTrigger value="tab-two">Hosting</TabsTrigger>
        <TabsTrigger value="tab-three">Editor</TabsTrigger>
        <TabsTrigger value="tab-four">Billing</TabsTrigger>
        <TabsTrigger value="tab-five">SEO</TabsTrigger>
        <TabsTrigger value="tab-six">Forms</TabsTrigger>
        <TabsTrigger value="tab-seven">Fonts</TabsTrigger>
        <TabsTrigger value="tab-eight">Backups</TabsTrigger>
        <TabsTrigger value="tab-nine">Integrations</TabsTrigger>
        <TabsTrigger value="tab-ten">Custom code</TabsTrigger>
      </TabsList>
      <TabsContent value="tab-one">
        <Text>Panel 1</Text>
      </TabsContent>
      <TabsContent value="tab-two">
        <Text>Panel 2</Text>
      </TabsContent>
      <TabsContent value="tab-three">
        <Text>Panel 3</Text>
      </TabsContent>
      <TabsContent value="tab-four">
        <Text>Panel 4</Text>
      </TabsContent>
      <TabsContent value="tab-five">
        <Text>Panel 5</Text>
      </TabsContent>
      <TabsContent value="tab-six">
        <Text>Panel 6</Text>
      </TabsContent>
      <TabsContent value="tab-seven">
        <Text>Panel 7</Text>
      </TabsContent>
      <TabsContent value="tab-eight">
        <Text>Panel 8</Text>
      </TabsContent>
      <TabsContent value="tab-nine">
        <Text>Panel 9</Text>
      </TabsContent>
      <TabsContent value="tab-ten">
        <Text>Panel 10</Text>
      </TabsContent>
    </Tabs>
  </>
);