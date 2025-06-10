import { RightSidebar } from '~/features/right-sidebar/RightSidebar';
import { Outlet } from 'react-router';
import { LeftSidebar } from '~/features/left-sidebar/LeftSidebar';

export const navigationItems = [
  { href: '/apps-discovery', label: 'Apps Discovery' },
  { href: '/apps-inventory', label: 'Apps Inventory' },
  { href: '/settings', label: 'Settings' },
];

export default function Layout() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <LeftSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
      <RightSidebar />
    </div>
  );
}
