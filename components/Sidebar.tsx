"use client";

import { usePathname } from "next/navigation"
import { useMemo } from "react";
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import Box from "./Box";
import SidebarItem from "./SidebarItem";
interface SidebarPRops {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarPRops> = ({ children }) => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            label: 'Home',
            icon: HiHome,
            active: pathname !== '/search',
            href: '/'
        },
        {
            label: 'Search',
            icon: HiHome,
            active: pathname === '/search',
            href: '/search'
        }
    ], [pathname]);

    return (
        <div className="flex h-full">
            <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
                <Box className="flex flex-col gap-y-4 px-5 py-4">
                    {routes.map((item) => (<div>
                        <SidebarItem key={item.label} {...item} />
                    </div>))}
                </Box>
                <Box className="overflow-y-auto h-full">
                    Song libary
                </Box>
            </div>
        </div>
    )
}

export default Sidebar