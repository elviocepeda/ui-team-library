import type { Meta, StoryObj } from "@storybook/react";
import { DefaultBadge as Badge } from "./Badge";

const meta = {
  title: "Taggify/Badge/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultBadge: Story = {
  args: { title: "+12.3%" },
};
