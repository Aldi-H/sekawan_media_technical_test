import { ElementType } from "react";

export interface IRoute {
  name: string;
  layout: string;
  path: string;
  icon: ElementType;
  secondary?: boolean;
}
