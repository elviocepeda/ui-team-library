import type { Meta, StoryObj } from "@storybook/react";
import {DefaultCallout  as Callout } from "./Callout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faWarning, faCircleXmark } from '@fortawesome/pro-solid-svg-icons'

const checkIcon: React.FC = () => {
    return <FontAwesomeIcon icon={faCircleCheck} size="xl" pull="left" ></FontAwesomeIcon>;
  };

const wrongIcon: React.FC = () => {
  return <FontAwesomeIcon icon={faCircleXmark} size="xl" pull="left" ></FontAwesomeIcon>;
};

const warningIcon: React.FC = () => {
  return <FontAwesomeIcon icon={faWarning} size="xl" pull="left" ></FontAwesomeIcon>;
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
 args: { title: "Title" , children: "Some random text"},
};

export const WrongCallout: Story = {
  args: { 
    title: "Oops! Something went wrong." , 
    children: "We encountered an unexpected error while processing your request. Our team has been notified of the issue and is working diligently to fix it. Please try again later." , 
    color: "red", 
    icon: wrongIcon
  },
};

export const WarningCallout: Story = {
  args: { 
    title: "Security Alert: Potential Data Breach." , 
    children: "We have detected suspicious activity on our website, indicating a possible data breach." , 
    color: "yellow", 
    icon: warningIcon
  },
};

export const OKCallout: Story = {
  args: { 
    title: "No critical system data." , 
    children: "All systems are currently within their default operating ranges." , 
    color: "green", 
    icon: checkIcon
  },
};
