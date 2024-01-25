import React from 'react';
import { scaleTime, scaleLinear } from '@visx/scale';
import CurveChart from './CurveChart';
import { useTheme } from '../context/ThemeContext';
import { useEffect } from 'react';

const TotalOrdersGraph = () => {
  const totalOrdersData = [
    { date: '2024-01-01', value: 1 },
    { date: '2024-01-02', value: 15 },
    { date: '2024-01-03', value: 8 },
    { date: '2024-01-04', value: 20 },
    { date: '2024-01-05', value: 1},
    { date: '2024-01-06', value: 18 },
    { date: '2024-01-07', value: 14 },
    { date: '2024-01-08', value: 2 },
    { date: '2024-01-09', value: 16 },
    { date: '2024-01-10', value: 25 },
    { date: '2024-01-11', value: 30 },
    { date: '2024-01-12', value: 28 },
    { date: '2024-01-13', value: 3 },
    { date: '2024-01-14', value: 40 },
    { date: '2024-01-15', value: 38 },
    { date: '2024-01-16', value: 45 },
    { date: '2024-01-17', value: 5},
    { date: '2024-01-18', value: 48 },
    { date: '2024-01-19', value: 55 },
    { date: '2024-01-20', value: 60 },
    { date: '2024-01-21', value: 5 },
    { date: '2024-01-22', value: 65 },
    { date: '2024-01-23', value: 70 },
    { date: '2024-01-24', value: 68 },
    { date: '2024-01-25', value: 7 },
    { date: '2024-01-26', value: 80 },
    { date: '2024-01-27', value: 78 },
    { date: '2024-01-28', value: 85 },
    { date: '2024-01-29', value: 9 },
    { date: '2024-01-30', value: 88 },
    { date: '2024-01-31', value: 9 },
  ];
  
  

  // Dimensions and margin
  const width = '100%';
  const height = 30;
  const margin = { top: 20, right: 20, bottom: 40, left: 40 };

  // Accessors
  const getX = (d) => new Date(d.date);
  const getY = (d) => Number(d.value);

  // Scales
  const xScale = scaleTime({
    domain: [Math.min(...totalOrdersData.map(getX)), Math.max(...totalOrdersData.map(getX))],
    range: [margin.left, width - margin.right],
  });

  const yScale = scaleLinear({
    domain: [0, Math.max(...totalOrdersData.map(getY))],
    range: [height - margin.bottom, margin.top],
    nice: true,
  });
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);
  return (
    <div className={` p-2 border rounded-lg shadow-md ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="mt-1">
      <div className="flex justify-between items-center ">
        <div className='border p-3 rounded-full'>
      <i className="fa-solid fa-cart-shopping fa-xl" style={{color: "#63E6BE",}} />
      </div>
      <div className='my-5'>
      <svg width={width} height={height}>
        <CurveChart
          data={totalOrdersData}
          xScale={xScale}
          yScale={yScale}
          width={width}
          height={height}
          margin={margin}
          stroke="#ED544E"
          strokeWidth={2}
          shadowColor="#59b196"
        />
      </svg>
      </div>
      </div>
      <div className="block justify-between  text-sm">
      <h2 className="text-xl text-gray-400 mb-2">Average Sales</h2>
        <p className={`text-xl  mb-2 ${darkMode ? ' text-white' : 'text-black'}`}>1567</p>
        </div>
        <div className="flex justify-between  text-sm">
          <div className=' rounded-full w-20 text-center h-6 items-center justify-center bg-[#ED544E1F]'>
          <h5 className='text-[#ED544E]'><i className="fa-solid fa-arrow-trend-down fa-sm" style={{color: "#ED544E", padding:'2%',} } />23.5%</h5>
          </div>
          <p className="text-sm text-gray-400 mb-4">vs. previous month</p>
          </div>
          </div>
    </div>
  );
};

export default TotalOrdersGraph;
