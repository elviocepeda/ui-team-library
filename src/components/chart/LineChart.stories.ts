import type { Meta, StoryObj } from "@storybook/react";
import { DefaultLineChart as LineChart } from "./LineChart";
import { mockLineChartData } from "./constants";

const meta = {
  title: "Taggify/Chart/LineChart",
  component: LineChart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultLineChart: Story = {
  args: {
    data: mockLineChartData,
    categories: ["Export Growth Rate", "Import Growth Rate"],
    index: "year",
    title: "La primer plataforma programática DOOH",
  },
};
