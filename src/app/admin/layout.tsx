"use client";

import Sidebar from "@/components/sidebar/Sidebar.Component";
// import SidebarProvider from "@/context/Sidebar.Context";
import { GetActiveRoute } from "@/lib/navigation.utils";
import { MainSidebarRoutes } from "@/routes";

interface DashboardLayoutProps {
  [x: string]: any;
}

const AdminLayout = (props: DashboardLayoutProps) => {
  const { children } = props;

  return (
    <div className="flex w-full bg-cover top-0">
      <div className="z-40 h-full fixed">
        <Sidebar routes={MainSidebarRoutes} />
      </div>

      <main className="flex-grow ml-[223px]">
        <div>
          {/* <Topbar currentPageRoute={GetActiveRoute(SidebarRoute)} /> */}
        </div>
        <div className="mx-8 my-[50px]">
          <div>{children}</div>
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
