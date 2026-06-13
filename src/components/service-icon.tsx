import {
  AirVent,
  CirclePower,
  CookingPot,
  PlugZap,
  Refrigerator,
  WashingMachine,
  Wrench,
} from "lucide-react";
import type { ServiceIcon as ServiceIconName } from "@/data/services";

const iconMap = {
  "washing-machine": WashingMachine,
  refrigerator: Refrigerator,
  dishwasher: CookingPot,
  plumber: Wrench,
  electrician: PlugZap,
  "air-conditioner": AirVent,
} satisfies Record<ServiceIconName, typeof CirclePower>;

export function ServiceIcon({
  name,
  size = 34,
}: {
  name: ServiceIconName;
  size?: number;
}) {
  const Icon = iconMap[name];
  return <Icon size={size} strokeWidth={1.7} aria-hidden="true" />;
}

