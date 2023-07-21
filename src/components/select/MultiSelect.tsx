import * as React from "react";
import { MultiSelect, MultiSelectItem } from "@tremor/react";
import { MultiSelectProps, mockData } from "./contants";

export const DefaultMultiSelect = ({
  defaultValue,
  value,
  onValueChange,
  placeholder,
  disabled,
  icon,
}: MultiSelectProps) => (
  <MultiSelect
    className="max-w-full sm:max-w-xs"
    defaultValue={defaultValue}
    value={value}
    onValueChange={onValueChange}
    placeholder={placeholder}
    disabled={disabled}
    icon={icon}
  >
    {mockData.map(({ item, value }) => (
      <MultiSelectItem value={value}>{item}</MultiSelectItem>
    ))}
  </MultiSelect>
);
