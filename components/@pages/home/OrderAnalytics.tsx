import React from "react";

export const OrderAnalytics = () => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 mt-6 w-full mr-6">
      <div className="flex justify-between w-full items-center mb-4">
        <h1 className="text-lg font-semibold">Orders Analytics</h1>
        <div className="flex items-center ml-8">
          <span className="flex items-center text-xs mr-4">
            <i
              className="bi-circle-fill mr-2 app-color-blue"
              style={{ fontSize: 8 }}
            ></i>{" "}
            Offline orders
          </span>
          <span className="flex items-center text-xs mr-4">
            <i
              className="bi-circle-fill mr-2 text-yellow-500"
              style={{ fontSize: 8 }}
            ></i>{" "}
            Online orders
          </span>
          <button
            type="button"
            className="flex items-center rounded-md border border-input bg-background px-3 text-xs py-1 rounded-lg items-center justify-center shadow-md border border-gray-100"
            id="timeframe"
          >
            <span>Monthly</span>
            <i className="bi-chevron-down ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
