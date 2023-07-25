import type { Meta, StoryObj } from "@storybook/react";
import { DefaultDateRangePicker as DateRangePicker } from "./DateRangePicker";

const meta = {
  title: "Taggify/DatePicker/DateRangePicker",
  component: DateRangePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultDateRangePicker: Story = {
  args: {},
};
