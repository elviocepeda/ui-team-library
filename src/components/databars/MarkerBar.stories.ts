import type { Meta, StoryObj } from "@storybook/react";
import { DefaultMarkerBar as MarkerBar } from "./MarkerBar";

const meta = {
  title: "Taggify/DataBars/MarkerBar",
  component: MarkerBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof MarkerBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultMarkerBar: Story = {
  args: {
    minAmount: 9000,
    maxAmount: 20000,
    minValue: 25,
    maxValue: 65,
    value: 45,
    color: "blue",
  },
};
