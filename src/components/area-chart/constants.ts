import { Color, CurveType, ValueFormatter } from "@tremor/react";

export interface ChartProps {
  data: any;
  categories: string[];
  index: string;
  colors?: Color[];
  valueFormatter?: ValueFormatter;
  startEndOnly?: boolean;
  showXAxis?: boolean;
  showYAxis?: boolean;
  yAxisWidth?: number;
  showAnimation?: boolean;
  animationDuration?: number;
  showTooltip?: boolean;
  showLegend?: boolean;
  showGridLines?: boolean;
  showGradient?: boolean;
  autoMinValue?: boolean;
  minValue?: number;
  maxValue?: number;
  stack?: boolean;
  curveType?: CurveType;
  connectNulls?: boolean;
  allowDecimals?: boolean;
  noDataText?: string;
}

export const dataFormatter = (number: number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

export const mockChartData = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
];
