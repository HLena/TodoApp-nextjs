'use client';
import { setCookie } from "cookies-next";
import { useState } from "react";

const tabs = [1, 2, 3, 4, 5, 6]

interface TabBar {
  currentTab?: number
}

export const TabBar = ({ currentTab = 1}: TabBar) => {

  const [selectedTab, setSelectedTab ] = useState(currentTab);

  const onTabSelected = (tab: number) => {
    setSelectedTab(tab);
    setCookie('selectedTab',tab.toString());
  }

  return (
    <div className="grid w-full grid-cols-6 space-x-2 rounded-xl bg-gray-200 p-2">
      {
        tabs.map(tab => (
          <div key={`tab-${tab}`}>
            <input 
              type="radio" 
              id={tab.toString()} 
              checked={selectedTab === tab}
              onChange={() => {}}
              className="peer hidden" 
            />
            <label
              onClick={() => onTabSelected(tab)} 
              className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
                { tab }
            </label>
          </div>
        ))
      }
    </div>
  )
}