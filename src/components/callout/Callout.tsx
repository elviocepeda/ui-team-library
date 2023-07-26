
import { Callout } from "@tremor/react";
import { CalloutProps } from "@tremor/react";


interface ICprops extends CalloutProps {
   title: string;
   children: string;
 }

export const DefaultCallout = ({
icon,
color,
title,
children,
}: ICprops) => {
return (
   <Callout title={title} color={color} icon={icon}>
       {children}
   </Callout>
);
};
