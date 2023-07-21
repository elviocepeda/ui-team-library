import type { Meta, StoryObj } from "@storybook/react";
import { DefaultButton as Button } from "./Button";

const meta = {
  title: "Taggify/Button/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: "ButtonTextPrimary",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "ButtonTextSecondary",
    variant: "secondary",
  },
};

export const Light: Story = {
  args: {
    children: "ButtonTextLight",
    variant: "light",
  },
};
