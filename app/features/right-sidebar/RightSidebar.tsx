import { useSearchParams } from 'react-router';

export const RightSidebar = () => {
  const searchParams = useSearchParams();
  const appName = searchParams[0].get('appName') || '';
  const category = searchParams[0].get('category') || '';
  const handleAppNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchParams = new URLSearchParams(searchParams[0]);
    newSearchParams.set('appName', e.target.value);
    searchParams[1](newSearchParams);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchParams = new URLSearchParams(searchParams[0]);
    newSearchParams.set('category', e.target.value);
    searchParams[1](newSearchParams);
  };

  return (
    <aside className="w-64 bg-[#393939] shadow-lg border-l border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Filters</h2>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Name filter"
            className="w-full px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            value={appName}
            onChange={handleAppNameChange}
          />
          <input
            type="text"
            placeholder="Category Filter"
            className="w-full px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            value={category}
            onChange={handleCategoryChange}
          />
        </div>
      </div>
    </aside>
  );
};
