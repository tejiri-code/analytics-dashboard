// components/TotalRefundGraph.jsx
import React from 'react';
import AnalyticsChart from './AnalyticsChart';

const Totalincome = () => {
  // Add your total refund graph data and configuration here
  return (
    <div className="p-4 border rounded shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-4">Total Income</h2>
      <AnalyticsChart />
      {/* Additional content or legends */}
    </div>
  );
};

export default Totalincome;
