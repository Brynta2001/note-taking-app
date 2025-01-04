import PropTypes from 'prop-types';
import { SideBar } from '../components/SideBar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export const NotesLayout = ({ children }) => {
  return (
    <SidebarProvider>
      {/* Navbar */}
      
      {/* Sidebar */}
      <SideBar />
      <SidebarTrigger />
      {/* Main */}
      {children}
      {/* Footer */}
    </SidebarProvider>
  );
};

NotesLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
