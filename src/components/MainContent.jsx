// components/AnalyticsDashboard.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useEffect } from 'react';
import SalesTrendGraph from './SalesTrendGraph';
import TotalOrdersGraph from './TotalOrdersGraph';
import TotalRefundGraph from './TotalRefundGraph';
import AverageSales from './AverageSales';
import TotalIncome from './TotalIncome';
import LastOrdersTable from './LastOrdersTable';
import TopPlatforms from './TopPlatforms';

const AnalyticsDashboard = () => {
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);
  return (
    
      <div className={`bg-[#fafafa]   text-black lg:w-full ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>

        <div className='mx-4 mt-5'>
        <div className="grid   lg:grid-cols-2 gap-4">
          <div className='sticky'>
          <SalesTrendGraph />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <TotalOrdersGraph />
          <TotalRefundGraph />
          <AverageSales />
          <TotalIncome />
          </div>
          
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
          <LastOrdersTable />
          <TopPlatforms />
          </div>
          </div>
    </div>
  );
};

export default AnalyticsDashboard;
