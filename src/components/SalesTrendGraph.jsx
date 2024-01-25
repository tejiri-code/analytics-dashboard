import React, { useMemo, useState } from "react";
import { Bar, Line } from "@visx/shape";
import { LinearGradient } from "@visx/gradient";
import { scaleBand, scaleLinear } from "@visx/scale";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import millify from "millify";
import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react";

const monthlySalesData = [
  { month: "Jan", sales: 10000 },
  { month: "Feb", sales: 15000 },
  { month: "Mar", sales: 12000 },
  { month: "Apr", sales: 18000 },
  { month: "May", sales: 20000 },
  { month: "Jun", sales: 25000 },
  { month: "Jul", sales: 22000 },
  { month: "Aug", sales: 30000 },
  { month: "Sep", sales: 28000 },
  { month: "Oct", sales: 35000 },
  { month: "Nov", sales: 32000 },
  { month: "Dec", sales: 40000 },
];

const verticalMargin = 60;

// accessors
const getMonth = (d) => d.month;
const getSales = (d) => d.sales;

export default function SalesTrendGraph() {
  const [overlay, setOverlay] = useState({
    title: "",
    value: "",
    date: 0,
  });

  const [sortBy, setSortBy] = useState("month"); // Initial sorting by month

  // bounds
  const width = 610;
  const height = 300;
  const xMax = width - 100;
  const yMax = height - 40;

  // scales, memoize for performance
  const xScale = useMemo(
    () =>
      scaleBand({
        range: [0, xMax],
        domain: monthlySalesData.map(getMonth),
        padding: 0.4,
      }),
    [xMax, monthlySalesData]
  );

  const yScale = useMemo(
    () =>
      scaleLinear({
        range: [yMax, 0],
        domain: [0, 50000],
        nice: true,
      }),
    [yMax]
  );

  const barRadius = {
    topLeft: 20,
    topRight: 20,
    bottomLeft: 0,
    bottomRight: 0,
  };

  // Define the left margin for the bars
  const leftMargin = 20;

  // Function to sort data based on the selected option
  const sortData = (data, sortBy) => {
    if (sortBy === "month") {
      return [...data].sort((a, b) => a.month.localeCompare(b.month));
    } else if (sortBy === "sales") {
      return [...data].sort((a, b) => a.sales - b.sales);
    }
    return data;
  };

  // Get sorted data based on the current sorting option
  const sortedData = sortData(monthlySalesData, sortBy);
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);
  const gradientColors = {
    lightMode: { from: "#37ecba", to: "#FFF" },
    darkMode: { from: "#37ecba", to: "#000" },
  };
  return (
    <div className={`p-2 border rounded-lg shadow-md ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
   <div className=" shrink-0">
      <div className="flex justify-between ">
      <h2 className="text-xl font-semibold mb-4">Sales Trend</h2>
      {/* Dropdown for sorting */}
      <div className="mb-4">
        <label className="mr-2">Sort By:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className={`p-1 w-20 h-6 border rounded-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
         
        >
          <option value="month">Month</option>
          <option value="sales">Sales</option>
        </select>
      </div>
      </div>
        <svg width="100%" height={height}>
        <LinearGradient
          id="bar-gradient"
          from={darkMode ? gradientColors.darkMode.from : gradientColors.lightMode.from}
          to={darkMode ? gradientColors.darkMode.to : gradientColors.lightMode.to}
        />
          {monthlySalesData.map((d) => {
            const month = getMonth(d);
            const barWidth = xScale.bandwidth();
            const barHeight = yMax - (yScale(getSales(d)) ?? 0);
            const barX = xScale(month) + leftMargin; // Add left margin
            const barY = yMax - barHeight;
            const radii = [20, 0, 0, 0]; // top-left, top-right, bottom-right, bottom-left
            return (
              <Group key={`bar-${month}`}>
                <Bar
                  x={barX}
                  y={barY}
                  width={barWidth}
                  height={barHeight}
                  fill="url(#bar-gradient)"
                  onMouseMove={() => {
                    const left = barX + barWidth / 2;
                    setOverlay({
                      title: month,
                      value: millify(getSales(d)),
                      date: 0,
                    });
                  }}
                  rx={radii[0]}
                  ry={radii[0]}
                />
              </Group>
            );
          })}
          {yScale.ticks().map((sales, index) => {
            const x = 22;
            const y = yScale(sales);
            const textY = yScale(sales); // Adjusted y-coordinate for sales text
            return (
              <React.Fragment key={index}>
                <Text x={x} y={textY} textAnchor="end" fill="gray">
                  {millify(sales, 2)}
                </Text>
                <Line
                  from={{ x: x + 5, y }}
                  to={{ x: xMax, y }}
                  stroke="#EAEAEA"
                  strokeDasharray="3,3"
                />
              </React.Fragment>
            );
          })}
          {xScale.domain().map((month, index) => {
            const x = xScale(month) + xScale.bandwidth() / 2 + leftMargin; // Add left margin
            const y = yMax + 15;
            return (
              <Text key={index} x={x} y={y} textAnchor="middle" fill="gray">
                {month}
              </Text>
            );
          })}
        </svg>
        </div>
        <div>
          <strong>{overlay.title}</strong>: ${overlay.value}
        </div>
      </div>
    );
  }
  