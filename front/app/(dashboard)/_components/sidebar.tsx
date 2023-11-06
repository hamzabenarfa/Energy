import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6 ">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>

      <div className="flex items-end gap-1 justify-center mt-auto py-4 px-1">
        {/* <small className="text-xs text-center text-gray-600">All rights reserved </small>
        <Link
          className="text-sm text-center font-bold"
          href="https://www.facebook.com/benarfahamza/"
        >
          Hamza Benarfa
        </Link> */}
      </div>
    </div>
  );
};
