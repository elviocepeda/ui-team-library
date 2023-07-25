import { Badge, BadgeProps } from "@tremor/react";

interface IBadgeProps extends BadgeProps {
  title: string;
}

export const DefaultBadge = ({
  size,
  icon,
  color,
  tooltip,
  title,
}: IBadgeProps) => {
  return (
    <Badge size={size} icon={icon} color={color} tooltip={tooltip}>
      {title}
    </Badge>
  );
};
