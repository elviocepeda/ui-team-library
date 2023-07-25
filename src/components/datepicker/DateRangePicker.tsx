import { DateRangePicker, DateRangePickerProps } from "@tremor/react";

export const DefaultDateRangePicker = ({
  value,
  defaultValue,
  onValueChange,
  enableSelect,
  minDate,
  maxDate,
  placeholder,
  selectPlaceholder,
  disabled,
  locale,
  enableClear,
}: DateRangePickerProps) => {
  return (
    <DateRangePicker
      className="max-w-sm mx-auto"
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      enableSelect={enableSelect}
      minDate={minDate}
      maxDate={maxDate}
      placeholder={placeholder}
      selectPlaceholder={selectPlaceholder}
      disabled={disabled}
      locale={locale}
      enableClear={enableClear}
    />
  );
};
