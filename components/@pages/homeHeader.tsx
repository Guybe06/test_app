"use client";

import React, { useState } from "react";
import { BellIcon, SearchIcon } from "../@layout/icons";
import { TopBar } from "../@layout/head";

export const HomeHeader = () => {
  const [username, setUsername] = useState("Marci");
  const [userFullName, setUserFullName] = useState("Marci Fumous");

  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-col">
        <h1 className="text-xl font-medium">Welcome Back, {username}</h1>
        <span className="app-color-gray text-xs">
          Here is the information about all your orders
        </span>
      </div>
      <div className="flex items-start">
        <div className="flex self-center w-8 h-8  mr-4">
          <SearchIcon color="#000000" className="w-4" />
        </div>
        <div className="flex self-center relative w-8 h-8  mr-4">
          <BellIcon color="#000000" className="w-4" />
          <span className="w-1 h-1 bg-red-400 rounded-full absolute top-0 left-0 ml-4"></span>
        </div>
        <TopBar userFullName={userFullName} />
      </div>
    </div>
  );
};
