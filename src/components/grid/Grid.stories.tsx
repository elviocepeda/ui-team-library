import type { Meta, StoryObj } from "@storybook/react";
import { DefaultGrid as Grid } from "./Grid";

const meta = {
 title: "Taggify/Grid/Grid",
 component: Grid,
 parameters: {
   layout: "padded",
 },
 tags: ["autodocs"],
 argTypes: {},
} satisfies Meta<typeof Grid>;


export default meta;
type Story = StoryObj<typeof meta>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultGrid: Story = {
 args: {children: "Some information 123.456"},
};