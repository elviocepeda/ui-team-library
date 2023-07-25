import { Card, Flex, Text, CategoryBar, CategoryBarProps } from "@tremor/react";

interface CategoryBarInterface extends CategoryBarProps {
  title: string;
}

export const DefaultCategoryBar = ({
  title,
  values,
  markerValue,
  colors,
  showLabels,
  tooltip,
  showAnimation,
  color,
}: CategoryBarInterface) => (
  <Card className="max-w-sm mx-auto">
    <Flex className="gap-40">
      <Text>{title}</Text>
      <Text>{markerValue}%</Text>
    </Flex>
    <CategoryBar
      values={values}
      markerValue={markerValue}
      colors={colors}
      showLabels={showLabels}
      tooltip={tooltip}
      showAnimation={showAnimation}
      color={color}
      className="mt-3"
    />
  </Card>
);
