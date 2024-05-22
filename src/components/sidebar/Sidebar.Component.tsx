"use client";

import { IRoute } from "@/types/navigation";
import SidebarItems from "./SidebarItems.Component";
import { ScrollArea } from "../ui/scroll-area";

interface SidebarProps {
  routes: IRoute[];
}

const Sidebar = (props: SidebarProps) => {
  const { routes } = props;

  return (
    <aside
      className="flex flex-col h-screen p-2 px-0 gap-4 w-[223px] max-w-[223px] border-r border-secondary bg-background shadow"
      data-collapse
    >
      <ScrollArea>
        <div className="flex flex-col justify-center items-center">
          <div className="mb-7 mt-0">Dashboard Kit</div>
          <div className="xl:mb-1.5">
            <SidebarItems routes={routes} />
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
