import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Navlinks = [
  { name: "Refer", href: "#", active: true },
  { name: "Benefits", href: "#", active: false },
  { name: "FAQs", href: "#", active: false },
  { name: "Support", href: "#", active: false },
];
