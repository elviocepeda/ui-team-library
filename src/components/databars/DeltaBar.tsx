import { Card, Flex, Text, DeltaBar, DeltaBarProps } from "@tremor/react";

interface DeltaBarInterface extends DeltaBarProps {
  title: string;
  amount: number;
}

export const DefaultDeltaBar = ({
  title,
  value,
  isIncreasePositive,
  tooltip,
  showAnimation,
  amount,
}: DeltaBarInterface) => (
  <Card className="max-w-sm">
    <Flex className="gap-20">
      <Text>{title}</Text>
      <Flex alignItems="baseline" justifyContent="end" className="space-x-1">
        <Text>+$ {amount}</Text>
        <Text>(+ {value}%)</Text>
      </Flex>
    </Flex>
    <DeltaBar
      value={value}
      isIncreasePositive={isIncreasePositive}
      tooltip={tooltip}
      showAnimation={showAnimation}
      className="mt-3"
    />
  </Card>
);
