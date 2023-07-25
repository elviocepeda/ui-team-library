import { Card, Flex, Text, MarkerBar, MarkerBarProps } from "@tremor/react";

interface MarkerBarInterface extends MarkerBarProps {
  minAmount: number;
  maxAmount: number;
}

export const DefaultMarkerBar = ({
  value,
  minValue,
  maxValue,
  markerTooltip,
  rangeTooltip,
  showAnimation,
  color,
  minAmount,
  maxAmount,
}: MarkerBarInterface) => (
  <Card className="max-w-sm">
    <Flex className="gap-20">
      <Text>
        $ {minAmount} &bull; {value}%
      </Text>
      <Text>$ {maxAmount}</Text>
    </Flex>
    <MarkerBar
      value={value}
      minValue={minValue}
      maxValue={maxValue}
      color={color}
      markerTooltip={markerTooltip}
      rangeTooltip={rangeTooltip}
      showAnimation={showAnimation}
      className="mt-4"
    />
  </Card>
);
