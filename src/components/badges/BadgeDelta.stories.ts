import type { Meta, StoryObj } from "@storybook/react";
import { DefaultBadgeDelta as BadgeDelta } from "./BadgeDelta";

const meta = {
  title: "Taggify/Badge/Badge",
  component: BadgeDelta,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof BadgeDelta>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultBadgeDelta: Story = {
  args: { title: "taggify" },
};
