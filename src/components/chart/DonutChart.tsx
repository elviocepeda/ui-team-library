import { Card, Title, DonutChart } from "@tremor/react";
import { DonutChartProps } from "./constants";

export const DefaultDonutChart = ({
  category,
  variant,
  title,
  data,
  index,
  colors,
  valueFormatter,
  showAnimation,
  animationDuration,
  showTooltip,
  noDataText,
}: DonutChartProps) => {
  const formatter = (number: number) =>
    `$ ${Intl.NumberFormat("us").format(number).toString()}`;

  return (
    <Card className="max-w-lg">
      <Title>{title}</Title>
      <DonutChart
        category={category}
        variant={variant}
        className="h-72 mt-4"
        data={data}
        index={index}
        colors={colors}
        valueFormatter={formatter}
        showAnimation={showAnimation}
        animationDuration={animationDuration}
        showTooltip={showTooltip}
        noDataText={noDataText}
      />
    </Card>
  );
};
