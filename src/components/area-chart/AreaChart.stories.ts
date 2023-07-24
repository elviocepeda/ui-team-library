import type { Meta, StoryObj } from "@storybook/react";
import { DefaultAreaChart as AreaChart } from "./AreaChart";
import { mockChartData } from "./constants";

const meta = {
  title: "Taggify/Chart/AreaChart",
  component: AreaChart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof AreaChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultAreaChart: Story = {
  args: {
    data: mockChartData,
    categories: ["SemiAnalysis", "The Pragmatic Engineer"],
    index: "date",
  },
};
