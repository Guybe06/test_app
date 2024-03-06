import React from "react";

export const Earnings = () => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 mt-6">
      <div className="flex justify-between w-full items-center mb-4">
        <h1 className="text-lg font-semibold">Earnings</h1>
        <button
          type="button"
          className="flex items-center rounded-md"
          id="timeframe"
        >
          <i className="bi-three-dots ml-2"></i>
        </button>
      </div>

      <div className="flex items-center px-2 justify-between w-full">
        <span className="flex items-center text-xs mr-4">
          <i
            className="bi-circle-fill mr-2 text-green-500"
            style={{ fontSize: 8 }}
          ></i>{" "}
          Offline
        </span>
        <span className="flex items-center text-xs mr-4">
          <i
            className="bi-circle-fill mr-2 text-yellow-500"
            style={{ fontSize: 8 }}
          ></i>{" "}
          Online
        </span>
        <span className="flex items-center text-xs mr-4">
          <i
            className="bi-circle-fill mr-2 app-color-blue"
            style={{ fontSize: 8 }}
          ></i>{" "}
          Trade
        </span>
      </div>
    </div>
  );
};
