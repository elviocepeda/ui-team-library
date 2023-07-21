import type { Meta, StoryObj } from "@storybook/react";
import { DefaultMultiSelect as Select } from "./MultiSelect";

const meta = {
  title: "Taggify/Select/MultiSelect",
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
    value: [],
  },
};
