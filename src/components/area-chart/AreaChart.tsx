import { Card, Title, AreaChart } from "@tremor/react";
import { ChartProps } from "./constants";

export const DefaultAreaChart = ({
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
  stack,
  curveType,
  connectNulls,
  allowDecimals,
  noDataText,
}: ChartProps) => {
  return (
    <Card>
      <Title>Newsletter revenue over time (USD)</Title>
      <AreaChart
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
        stack={stack}
        curveType={curveType}
        connectNulls={connectNulls}
        allowDecimals={allowDecimals}
        noDataText={noDataText}
      />
    </Card>
  );
};
