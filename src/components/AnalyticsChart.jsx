// components/AnalyticsChart.jsx
import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const AnalyticsChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  // Example data and options (replace with your actual data and options)
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: '',
        data: [300, 450, 600, 800, 700, 900],
        borderColor: 'white',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    const currentChartRef = chartRef.current;

    // If there's an existing instance, destroy it
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create a new chart
    const newChartInstance = new Chart(currentChartRef, {
      type: 'line',
      data: data,
      options: options,
    });

    // Update the chart instance reference
    chartInstanceRef.current = newChartInstance;
  }, [data, options]);

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default AnalyticsChart;
