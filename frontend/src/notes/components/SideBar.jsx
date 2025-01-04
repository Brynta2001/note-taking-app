import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Archive, Home, Tag } from 'lucide-react';

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
              <SidebarMenuButton>
                <Home />
                Home
              </SidebarMenuButton>
              <SidebarMenuButton>
                <Tag />
                Categories
              </SidebarMenuButton>
              <SidebarMenuButton>
                <Archive />
                Archive
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
