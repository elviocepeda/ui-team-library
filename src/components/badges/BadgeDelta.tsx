import { BadgeDelta, BadgeDeltaProps } from "@tremor/react";

interface IBadgeProps extends BadgeDeltaProps {
  title?: string;
}

export const DefaultBadgeDelta = ({
  size,
  deltaType,
  isIncreasePositive,
  title,
}: IBadgeProps) => {
  return (
    <BadgeDelta
      size={size}
      deltaType={deltaType}
      isIncreasePositive={isIncreasePositive}
    >
      {title}
    </BadgeDelta>
  );
};
