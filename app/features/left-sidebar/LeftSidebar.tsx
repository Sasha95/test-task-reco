import { navigationItems } from '~/components/Layout';
import { NavLink } from 'react-router';
import logo from '@assets/Logo.svg';

type Props = {};

export const LeftSidebar = ({}: Props) => {
  return (
    <aside className="w-64 bg-[#393939] shadow-lg border-r border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <img src={logo} alt="App Dashboard" className="mb-[10px]" />
        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `block px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? 'border-l-4 border-[#B5E600]'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};
