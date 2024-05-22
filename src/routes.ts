import {
  BookText,
  Gem,
  Lightbulb,
  PieChart,
  Settings,
  Ticket,
  User2,
  UsersRound,
} from "lucide-react";
import { IRoute } from "./types/navigation";

export const MainSidebarRoutes: IRoute[] = [
  {
    name: "Overview",
    layout: "/admin",
    path: "/overview",
    icon: PieChart,
  },
  {
    name: "Tickets",
    layout: "/admin",
    path: "/tickets",
    icon: Ticket,
  },
  {
    name: "Ideas",
    layout: "/admin",
    path: "/ideas",
    icon: Lightbulb,
  },
  {
    name: "Contacts",
    layout: "/admin",
    path: "/contacts",
    icon: UsersRound,
  },
  {
    name: "Agents",
    layout: "/admin",
    path: "/agents",
    icon: User2,
  },
  {
    name: "Articles",
    layout: "/admin",
    path: "/articles",
    icon: BookText,
  },
];

export const SecondarySidebarRoute: IRoute[] = [
  {
    name: "Settings",
    layout: "/admin",
    path: "/settings",
    icon: Settings,
  },
  {
    name: "Subscription",
    layout: "/admin",
    path: "/subscriptions",
    icon: Gem,
  },
];
