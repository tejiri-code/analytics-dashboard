import React from "react";
import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import image from './img.jpg'

const LastOrdersTable = () => {
  // Example data
  const ordersData = [
    {
      name: "Marcus Bergson",
      date: "Nov 15, 2023",
      amount: 150000.0,
      status: "Shipped",
     
    },
    {
      name: "Jaydon Vaccaro",
      date: "Nov 15, 2023",
      amount: 120000.0,
      status: "Processing",
   
    },
    {
      name: "Corey Schleifer",
      date: "Nov 14, 2023",
      amount: 200000.0,
      status: "Delivered",
    
    },
    {
      name: "Cooper Press",
      date: "Nov 14, 2023",
      amount: 80000.0,
      status: "Shipped",
     
    },
    {
      name: "Phillip Lubin",
      date: "Nov 14, 2023",
      amount: 100000.0,
      status: "Processing",
      
    },
  ];
 
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div className={`container mx-auto p-4 mt-5 border rounded-lg shadow-md ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
  
        <div className="flex justify-between">
      <h2 className="text-xl  mb-4">Last Orders</h2>
      <h2 className="text-sm mb-4 text-[#34CAA5]">See All</h2>
      </div>
      <table className="min-w-full border rounded overflow-hidden">
        <thead className=" border-b border-gray-200 text-gray-400 text-left font-light">
          <tr>
            <th className="py-2 ">Name</th>
            <th className="py-2 ">Date</th>
            <th className="py-2 ">Amount</th>
            <th className="py-2 ">Status</th>
            <th className="py-2 ">Invoice</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map((order, index) => (
            <tr key={index} className="border-b border-gray-200 text-left">
              <td className="py-3 flex items-center "><img src={image} alt="profile" className="rounded-full h-7 w-7 " /><h2 className="pl-2">{order.name}</h2></td>
              <td className="py-2 text-gray-400 ">{order.date}</td>
              <td className="py-2 ">${order.amount.toFixed(2)}</td>
              <td className="py-2 ">{order.status}</td>
              <td className=" py-5 flex items-center "><i className="fa-solid fa-file-invoice "/> <h2 className="pl-2">view</h2></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LastOrdersTable;
