import type { Meta, StoryObj } from "@storybook/react";
import { DefaultBarChart as BarChart } from "./BarChart";
import { mockBarChartData } from "./constants";

const meta = {
  title: "Taggify/Chart/BarChart",
  component: BarChart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultBarChart: Story = {
  args: {
    data: mockBarChartData,
    categories: [
      "Group A",
      "Group B",
      "Group C",
      "Group D",
      "Group E",
      "Group F",
    ],
    index: "name",
    title: "La primer plataforma programática DOOH"
  },
};
