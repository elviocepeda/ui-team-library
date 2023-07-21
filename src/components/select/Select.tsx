import * as React from "react";
import { Select, SelectItem } from "@tremor/react";
import { SelectProps, mockData } from "./contants";

export const DefaultSelect = ({
  defaultValue,
  value,
  onValueChange,
  placeholder,
  disabled,
  icon,
  itemIcon,
}: SelectProps) => (
  <Select
    className="max-w-full sm:max-w-xs"
    defaultValue={defaultValue}
    value={value}
    onValueChange={onValueChange}
    placeholder={placeholder}
    disabled={disabled}
    icon={icon}
  >
    {mockData.map(({ item, value }) => (
      <SelectItem value={value} icon={itemIcon}>
        {item}
      </SelectItem>
    ))}
  </Select>
);
