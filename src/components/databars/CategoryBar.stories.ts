import type { Meta, StoryObj } from "@storybook/react";
import { DefaultCategoryBar as CategoryBar } from "./CategoryBar";

const meta = {
  title: "Taggify/DataBars/CategoryBar",
  component: CategoryBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CategoryBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultCategoryBar: Story = {
  args: {
    title: "Taggify",
    values: [40, 30, 20, 10],
    markerValue: 62,
    colors: ["emerald", "yellow", "orange", "rose"],
  },
};
