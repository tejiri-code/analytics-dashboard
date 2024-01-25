// components/AnalyticsDashboard.jsx
import React from 'react';

import SalesTrendGraph from './SalesTrendGraph';
import TotalOrdersGraph from './TotalOrdersGraph';
import TotalRefundGraph from './TotalRefundGraph';
import AverageSales from './AverageSales';
import TotalIncome from './TotalIncome';
import LastOrdersTable from './LastOrdersTable';
import TopPlatforms from './TopPlatforms';

const AnalyticsDashboard = () => {
  return (
    <div className="bg-white mt-5 mx-5 text-black min-h-screen">
        <div className="grid   lg:grid-cols-2 gap-4">
          <SalesTrendGraph />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
          <TotalOrdersGraph />
          <TotalRefundGraph />
          <AverageSales />
          <TotalIncome />
          </div>
          
        </div>
        <div>
          <LastOrdersTable />
          <TopPlatforms />
          </div>
    </div>
  );
};

export default AnalyticsDashboard;
