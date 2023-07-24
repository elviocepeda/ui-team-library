import { Card, Title, Text, Flex, Tracker } from "@tremor/react";
import { TrackerProps } from "./constants";

export const DefaultTracker = ({ data }: TrackerProps) => {
  return (
    <Card className="max-w-md mx-auto">
      <Title>TRACKER</Title>
      <Text>Taggify Library Tracker component &bull; July 2023</Text>
      <Flex justifyContent="end" className="mt-4">
        <Text>Uptime 92%</Text>
      </Flex>
      <Tracker data={data} className="mt-2" />
    </Card>
  );
};
