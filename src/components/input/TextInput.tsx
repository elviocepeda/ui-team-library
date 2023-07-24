import { TextInput } from "@tremor/react";

export interface TextInputProps {
  type?: "text" | "password";
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  icon?: React.JSXElementConstructor<any> | undefined;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
}

export const DefaultTextInput = ({
  type,
  defaultValue,
  value,
  placeholder,
  icon,
  error,
  errorMessage,
  disabled,
}: TextInputProps) => {
  return (
    <TextInput
      type={type}
      defaultValue={defaultValue}
      value={value}
      placeholder={placeholder}
      icon={icon}
      error={error}
      errorMessage={errorMessage}
      disabled={disabled}
    />
  );
};
