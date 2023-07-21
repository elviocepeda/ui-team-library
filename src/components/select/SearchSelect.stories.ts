import type { Meta, StoryObj } from "@storybook/react";
import { DefaultSearchSelect as Select } from "./SearchSelect";

const meta = {
  title: "Taggify/Select/SearchSelect",
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
export const SearchSelect: Story = {
  args: {
    itemValue: "",
  },
};
