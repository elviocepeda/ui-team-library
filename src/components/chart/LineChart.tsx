import { Card, Title, LineChart } from "@tremor/react";
import { ChartProps } from "./constants";

export const DefaultLineChart = ({
  title,
  data,
  categories,
  index,
  colors,
  valueFormatter,
  startEndOnly,
  showXAxis,
  showYAxis,
  yAxisWidth,
  showAnimation,
  animationDuration,
  showTooltip,
  showLegend,
  showGridLines,
  showGradient,
  autoMinValue,
  minValue,
  maxValue,
  allowDecimals,
  noDataText,
}: ChartProps) => {
  return (
    <Card>
      <Title>{title}</Title>
      <LineChart
        className="h-72 mt-4"
        data={data}
        index={index}
        categories={categories}
        colors={colors}
        valueFormatter={valueFormatter}
        startEndOnly={startEndOnly}
        showXAxis={showXAxis}
        showYAxis={showYAxis}
        yAxisWidth={yAxisWidth}
        showAnimation={showAnimation}
        animationDuration={animationDuration}
        showTooltip={showTooltip}
        showLegend={showLegend}
        showGridLines={showGridLines}
        showGradient={showGradient}
        autoMinValue={autoMinValue}
        minValue={minValue}
        maxValue={maxValue}
        allowDecimals={allowDecimals}
        noDataText={noDataText}
      />
    </Card>
  );
};
