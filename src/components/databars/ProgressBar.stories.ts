import type { Meta, StoryObj } from "@storybook/react";
import { DefaultProgressBar as ProgressBar } from "./ProgressBar";

const meta = {
  title: "Taggify/DataBars/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultProgressBar: Story = {
  args: {
    value: 45,
    minValue: 9012,
    maxValue: 20000,
    color: "purple",
  },
};
