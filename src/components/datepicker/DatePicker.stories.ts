import type { Meta, StoryObj } from "@storybook/react";
import { DefaultDatePicker as DatePicker } from "./DatePicker";

const meta = {
  title: "Taggify/DatePicker/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultDatePicker: Story = {
  args: {},
};
