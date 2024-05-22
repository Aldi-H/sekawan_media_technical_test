import { useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IRoute } from "@/types/navigation";

interface SidebarItemsProps {
  routes: IRoute[];
}

const SidebarItems = (props: SidebarItemsProps) => {
  const { routes } = props;
  const pathName = usePathname();

  const activeRoute = useCallback(
    (routeName: string) => {
      return pathName?.includes(routeName);
    },
    [pathName],
  );

  const createLinks = (routes: IRoute[]) => {
    return routes.map((route, index: number) => {
      if (route.layout === "/admin" || route.layout === "/account") {
        const Icon = route.icon;

        return (
          <Link key={index} href={route.layout + route.path}>
            {activeRoute(route.layout + route.path) ? (
              <div className="flex flex-col">
                <div className="flex flex-row py-4 px-10 items-center align-middle gap-4 bg-secondary">
                  {Icon && <Icon />}
                  <span className="font-bold text-sm my-auto line-clamp-2">
                    {route.name}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col">
                <div className="flex flex-row py-4 px-10 items-center align-middle gap-4 hover:bg-secondary">
                  {Icon && <Icon />}
                  <span className="font-bold text-sm my-auto line-clamp-2">
                    {route.name}
                  </span>
                </div>
              </div>
            )}
          </Link>
        );
      }
    });
  };

  return createLinks(routes);
};

export default SidebarItems;
