import * as React from "react";
import {
  SearchSelect,
  SearchSelectItem,
  SearchSelectItemProps,
} from "@tremor/react";

interface SelectProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: ((value: string) => void) | undefined;
  placeholder?: string;
  disabled?: boolean;
  icon?: React.JSXElementConstructor<any> | undefined;
  itemValue: string;
  itemIcon?: React.JSXElementConstructor<any> | undefined;
  itemEnableClear?: boolean;
}

interface MockData {
  item: string;
  value: string;
}

const mockData: MockData[] = [
  { item: "Example 1", value: "example-1" },
  { item: "Example 2", value: "example-2" },
  { item: "Example 3", value: "example-3" },
];

export const DefaultSearchSelect = ({
  defaultValue,
  value,
  onValueChange,
  placeholder,
  disabled,
  icon,
  itemValue,
  itemIcon,
  itemEnableClear,
}: SelectProps) => {
  return (
    <SearchSelect
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      placeholder={placeholder}
      disabled={disabled}
      icon={icon}
    >
      {mockData.map(({ item, value }) => (
        <SearchSelectItem value={value} icon={itemIcon}>
          {item}
        </SearchSelectItem>
      ))}
    </SearchSelect>
  );
};
