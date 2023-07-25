import type { Meta, StoryObj } from "@storybook/react";
import {DefaultCallout  as Callout } from "./Callout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/pro-solid-svg-icons'

const iconValue: React.FC = () => {
    return <FontAwesomeIcon icon={faCircleCheck} size="xl" pull="left" ></FontAwesomeIcon>;
  };

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
export const DefaultCalloutS: Story = {
 args: { title: "-" , children: " - "},
};

export const WarningCallout: Story = {
    args: { 
        title: "Oops! Something went wrong." , 
        children: "We encountered an unexpected error while processing your request. Our team has been notified of the issue and is working diligently to fix it. Please try again later." , 
        color: "red", 
        icon: iconValue
    },
};

   export const OKCallout: Story = {
    args: { 
        title: "No critical system data." , 
        children: "All systems are currently within their default operating ranges." , 
        color: "green", 
        icon: iconValue
    },
};