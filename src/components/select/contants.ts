export interface SelectProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: ((value: string) => void) | undefined;
  placeholder?: string;
  disabled?: boolean;
  icon?: React.JSXElementConstructor<any> | undefined;
  itemIcon?: React.JSXElementConstructor<any> | undefined;
}

export interface MultiSelectProps {
  defaultValue?: string[];
  value?: string[];
  onValueChange?: ((value: string[]) => void) | undefined;
  placeholder?: string;
  disabled?: boolean;
  icon?: React.JSXElementConstructor<any> | undefined;
}

interface MockData {
  item: string;
  value: string;
}

export const mockData: MockData[] = [
  { item: "Example 1", value: "example-1" },
  { item: "Example 2", value: "example-2" },
  { item: "Example 3", value: "example-3" },
];
