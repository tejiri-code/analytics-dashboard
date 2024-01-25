import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const TopPlatforms = () => {
  const topPlatformsData = [
    { platform: 'Book Bazaar', amountInvested: 5000000, percentIncrease: 15, color: '#6160DC' },
    { platform: 'Artisan Aisle', amountInvested: 8000000, percentIncrease: 25, color: '#54C5EB' },
    { platform: 'Toy Troop', amountInvested: 3000000, percentIncrease: 10, color: '#FFB74A' },
    { platform: 'XStore', amountInvested: 1500000, percentIncrease: 10, color: '#FF4A55' },
    // Add more platforms as needed
  ];

  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div className={`p-4 mt-5 border rounded-lg shadow-md mb-4 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-between">
        <h2 className="text-xl  mb-4">Top Platforms</h2>
        <h2 className="text-sm mb-4 text-[#34CAA5]">See All</h2>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {topPlatformsData.map((platform, index) => (
          <div key={index} className={`block items-center justify-between mb-2 `}>
            <div>
              <p className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>{platform.platform}</p>
              <div className={`w-full rounded-full h-4 overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div
                  className="h-full rounded-full"
                  style={{ width: `${platform.percentIncrease}%`, background: platform.color }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between">
              <p className={`text-gray-500 ${darkMode ? 'text-gray-400' : ''}`}>${platform.amountInvested}</p>
              <p className={`text-sm text-gray-500 mt-2 ${darkMode ? 'text-gray-400' : ''}`}>+{platform.percentIncrease}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPlatforms;
