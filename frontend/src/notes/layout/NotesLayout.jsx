import PropTypes from 'prop-types';
import { SideBar } from '../components/SideBar';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

export const NotesLayout = ({ children }) => {
  return (
    <SidebarProvider>
      {/* Sidebar */}
      <SideBar />
      <SidebarInset>
        <header className="flex h-16 items-center px-4 border-b">
          <SidebarTrigger />
          <h1 className="ml-4 text-3xl font-bold">My Notes</h1>
        </header>
        <main className="p-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

NotesLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
