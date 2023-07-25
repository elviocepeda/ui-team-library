import { DatePicker, DatePickerProps } from "@tremor/react";

export const DefaultDatePicker = ({
  value,
  defaultValue,
  onValueChange,
  minDate,
  maxDate,
  placeholder,
  disabled,
  locale,
  enableClear,
}: DatePickerProps) => {
  return (
    <DatePicker
      className="max-w-sm mx-auto"
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      minDate={minDate}
      maxDate={maxDate}
      placeholder={placeholder}
      disabled={disabled}
      locale={locale}
      enableClear={enableClear}
    />
  );
};
