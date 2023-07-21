import type { Meta, StoryObj } from "@storybook/react";
import { DefaultSelect as Select } from "./Select";

const meta = {
  title: "Taggify/Select/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultSelect: Story = {
  args: {
    value: "",
  },
};
