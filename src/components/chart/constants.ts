import { Color, CurveType, ValueFormatter } from "@tremor/react";

export interface ChartProps {
  title: string;
  data: any[];
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

export interface DonutChartProps extends Omit<ChartProps, "categories"> {
  variant: "donut" | "pie";
  category: string;
}

export const mockAreaChartData = [
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

export const mockBarChartData = [
  {
    name: "Topic 1",
    "Group A": 890,
    "Group B": 338,
    "Group C": 538,
    "Group D": 396,
    "Group E": 138,
    "Group F": 436,
  },
  {
    name: "Topic 2",
    "Group A": 289,
    "Group B": 233,
    "Group C": 253,
    "Group D": 333,
    "Group E": 133,
    "Group F": 533,
  },
];

export const mockLineChartData = [
  {
    year: 1970,
    "Export Growth Rate": 2.04,
    "Import Growth Rate": 1.53,
  },
  {
    year: 1971,
    "Export Growth Rate": 1.96,
    "Import Growth Rate": 1.58,
  },
  {
    year: 1972,
    "Export Growth Rate": 1.96,
    "Import Growth Rate": 1.61,
  },
  {
    year: 1973,
    "Export Growth Rate": 1.93,
    "Import Growth Rate": 1.61,
  },
  {
    year: 1974,
    "Export Growth Rate": 1.88,
    "Import Growth Rate": 1.67,
  },
  //...
];

export const mockDonutChartData = [
  {
    name: "New York",
    sales: 9800,
  },
  {
    name: "London",
    sales: 4567,
  },
  {
    name: "Hong Kong",
    sales: 3908,
  },
  {
    name: "San Francisco",
    sales: 2400,
  },
  {
    name: "Singapore",
    sales: 1908,
  },
  {
    name: "Zurich",
    sales: 1398,
  },
];
