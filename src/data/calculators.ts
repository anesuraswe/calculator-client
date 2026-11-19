
import {
  Activity,
  Droplets,
  Stethoscope,
  Syringe,
  HeartPulse,
  Ruler,
} from "lucide-react";
import type { ElementType } from "react";

export interface Calculator {
  id: string;
  title: string;
  description: string;
  icon: ElementType;
  category: string;
}

export const calculators: Calculator[] = [
  {
    id: "observations",
    title: "Observations",
    description:
      "View age-related reference ranges for paediatric vital signs.",
    icon: Activity,
    category: "Clinical References",
  },
  {
    id: "fluids",
    title: "Fluid Calculations",
    description:
      "Explore fluid maintenance and fluid balance calculation tools.",
    icon: Droplets,
    category: "Clinical Calculations",
  },
  {
    id: "equipment",
    title: "Equipment",
    description:
      "Explore paediatric equipment sizing reference information.",
    icon: Ruler,
    category: "Clinical References",
  },
  {
    id: "resuscitation",
    title: "Resuscitation",
    description:
      "Access resuscitation-related reference information and tools.",
    icon: HeartPulse,
    category: "Emergency References",
  },
  {
    id: "medications",
    title: "Medications",
    description:
      "Access medication reference information and calculation tools.",
    icon: Syringe,
    category: "Clinical Calculations",
  },
  {
    id: "assessment",
    title: "Clinical Assessment",
    description:
      "Explore additional paediatric assessment reference tools.",
    icon: Stethoscope,
    category: "Clinical References",
  },
];
