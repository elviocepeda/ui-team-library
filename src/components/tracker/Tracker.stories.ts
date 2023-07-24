import type { Meta, StoryObj } from "@storybook/react";
import { DefaultTracker as Tracker } from "./Tracker";

const meta = {
  title: "Taggify/Tracker/Tracker",
  component: Tracker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Tracker>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultTracker: Story = {
  args: {
    data: [
      { color: "emerald", tooltip: "Operational" },
      { color: "emerald", tooltip: "Operational" },
      { color: "emerald", tooltip: "Operational" },
      { color: "emerald", tooltip: "Operational" },
      { color: "emerald", tooltip: "Operational" },
      { color: "emerald", tooltip: "Operational" },
      { color: "emerald", tooltip: "Operational" },
      { color: "emerald", tooltip: "Operational" },
      { color: "emerald", tooltip: "Operational" },
      { color: "emerald", tooltip: "Operational" },
      { color: "emerald", tooltip: "Operational" },
      { color: "emerald", tooltip: "Operational" },
      { color: "emerald", tooltip: "Operational" },
      { color: "emerald", tooltip: "Operational" },
      { color: "rose", tooltip: "Downtime" },
      { color: "emerald", tooltip: "Operational" },
      { color: "emerald", tooltip: "Operational" },
      { color: "emerald", tooltip: "Operational" },
      { color: "emerald", tooltip: "Operational" },
      { color: "gray", tooltip: "Maintenance" },
      { color: "emerald", tooltip: "Operational" },
      { color: "emerald", tooltip: "Operational" },
      { color: "emerald", tooltip: "Operational" },
      { color: "yellow", tooltip: "Degraded" },
      { color: "emerald", tooltip: "Operational" },
    ],
  },
};
