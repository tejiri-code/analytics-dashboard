import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

const TotalOrdersChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.twelvedata.com/ad?apikey=f02346b9dfd44a94aebf396dddc82a2a&interval=1min&symbol=USD&outputsize=12&dp=4&timezone=Africa/Lagos&start_date=2024-01-01 10:20:00&end_date=2024-01-31 10:20:00&format=JSON'
        );
        setChartData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  useEffect(() => {
    if (chartData && Array.isArray(chartData)) {
      // Process chartData and render the chart
      renderChart();
    }
  }, [chartData]);

  const renderChart = () => {
    // Ensure chartData is an array before mapping
    if (!Array.isArray(chartData)) {
      console.error('chartData is not an array');
      return;
    }

    // Assuming chartData is an array of objects with timestamp and value properties
    const labels = chartData.map((dataPoint) => dataPoint.timestamp);
    const values = chartData.map((dataPoint) => dataPoint.value);

    const ctx = document.getElementById('totalOrdersChart').getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Total Orders',
            data: values,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
          },
        },
      },
    });
  };

  return (
    <div>
      <h2>Total Orders Chart</h2>
      <canvas id="totalOrdersChart" width="400" height="200"></canvas>
    </div>
  );
};

export default TotalOrdersChart;
