
import type { Meta, StoryObj } from "@storybook/react";
import {DefaultCallout  as Callout } from "./Callout";


const meta = {
 title: "Taggify/Callout/Callout",
 component: Callout,
 parameters: {
   layout: "centered",
 },
 tags: ["autodocs"],
 argTypes: {},
} satisfies Meta<typeof Callout>;


export default meta;
type Story = StoryObj<typeof meta>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaulDefaultCalloutBadge: Story = {
 args: { title: "Warning" , children: " :) "},
};
