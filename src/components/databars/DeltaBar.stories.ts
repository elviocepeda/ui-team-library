import type { Meta, StoryObj } from "@storybook/react";
import { DefaultDeltaBar as DeltaBar } from "./DeltaBar";

const meta = {
  title: "Taggify/DataBars/DeltaBar",
  component: DeltaBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof DeltaBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultDeltaBar: Story = {
  args: {
    title: "Taggify",
    value: 45,
    amount: 9000,
  },
};
