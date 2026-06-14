import {
  AirVent,
  Building2,
  Coffee,
  CookingPot,
  CupSoda,
  Drill,
  Flame,
  IceCreamBowl,
  Microwave,
  Refrigerator,
  Snowflake,
  Store,
  UtensilsCrossed,
  WashingMachine,
  Waves,
  Wind,
  Wine,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ServiceIcon as ServiceIconName } from "@/data/services";

const iconMap: Record<ServiceIconName, LucideIcon> = {
  "washing-machine": WashingMachine,
  refrigerator: Refrigerator,
  dishwasher: CookingPot,
  dryer: Wind,
  oven: Microwave,
  cooktop: Flame,
  "wine-cooler": Wine,
  "air-conditioner": AirVent,
  "appliance-installation": Drill,
  "commercial-equipment": Building2,
  "commercial-refrigeration": Snowflake,
  "walk-in-cooler": Store,
  "reach-in-cooler": Refrigerator,
  "ice-machine": IceCreamBowl,
  "commercial-oven": Microwave,
  fryer: CookingPot,
  grill: Flame,
  "commercial-dishwasher": Waves,
  "coffee-machine": Coffee,
  "slush-machine": CupSoda,
  "restaurant-installation": UtensilsCrossed,
};

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
