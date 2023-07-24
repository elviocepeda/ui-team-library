import type { Meta, StoryObj } from "@storybook/react";
import { DefaultTextInput as Input } from "./TextInput";

const meta = {
  title: "Taggify/Input/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultSelect: Story = {
  args: {},
};
