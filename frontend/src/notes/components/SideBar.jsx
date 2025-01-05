import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Archive, Home } from 'lucide-react';
import { Link } from 'react-router';

export const SideBar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="m-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          Note Taking
        </h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link to={'/'}>
                <SidebarMenuButton className="text-1xl my-2">
                  <Home className="mr-2 h-4 w-4" />
                  <span>Home</span>
                </SidebarMenuButton>
              </Link>
              <Link to={'/notes?archived=true'}>
                <SidebarMenuButton className="text-1xl my-2">
                  <Archive className="mr-2 h-4 w-4" />
                  <span>Archive</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
