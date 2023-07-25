import { Card, Flex, Text, ProgressBar, ProgressBarProps } from "@tremor/react";

interface ProgressBarInterface extends ProgressBarProps {
  minValue: number;
  maxValue: number;
}

export const DefaultProgressBar = ({
  value,
  label,
  color,
  tooltip,
  showAnimation,
  minValue,
  maxValue,
}: ProgressBarInterface) => (
  <Card className="max-w-sm mx-auto">
    <Flex className="gap-20">
      <Text>
        $ {minValue} &bull; {value}%
      </Text>
      <Text>$ {maxValue}</Text>
    </Flex>
    <ProgressBar
      className="mt-3"
      value={value}
      label={label}
      color={color}
      tooltip={tooltip}
      showAnimation={showAnimation}
    />
  </Card>
);
