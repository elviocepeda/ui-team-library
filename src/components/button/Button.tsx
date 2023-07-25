import * as React from "react";
import { Button, ButtonVariant, HorizontalPosition } from "@tremor/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlicorn, faPaperPlane, faPercent } from "@fortawesome/pro-solid-svg-icons";

const iconValue: React.FC = () => {
  return <FontAwesomeIcon icon={faPaperPlane} size="xl" pull="left" ></FontAwesomeIcon>;
};


export interface ButtonProps {
  icon?: React.ElementType;
  iconPosition?: HorizontalPosition;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?:
    | "slate"
    | "gray"
    | "zinc"
    | "neutral"
    | "stone"
    | "red"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "green"
    | "emerald"
    | "teal"
    | "cyan"
    | "sky"
    | "blue"
    | "indigo"
    | "violet"
    | "purple"
    | "fuchsia"
    | "pink"
    | "rose"
    | undefined;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  tooltip?: string;
  children: string;
}

export const DefaultButton = ({
  icon=iconValue,
  iconPosition= "left",
  size = "xl",
  color = "blue",
  variant,
  disabled,
  loading,
  loadingText,
  tooltip,
  children,
}: ButtonProps) => {
  return (
    <Button
      icon={icon}
      iconPosition={iconPosition}
      size={size}
      color={color}
      variant={variant}
      disabled={disabled}
      loading={loading}
      loadingText={loadingText}
      tooltip={tooltip}
    >
      {children}
    </Button>
  );
};
