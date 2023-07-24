import type { Meta, StoryObj } from "@storybook/react";
import { DefaultDonutChart as DonutChart } from "./DonutChart";
import { mockDonutChartData } from "./constants";

const meta = {
  title: "Taggify/Chart/DonutChart",
  component: DonutChart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof DonutChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultDonutChart: Story = {
  args: {
    data: mockDonutChartData,
    variant: "donut",
    category: "sales",
    index: "name",
    title: "La primer plataforma programática DOOH",
  },
};
