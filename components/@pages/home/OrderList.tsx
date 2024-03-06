import React from "react";

export const OrderList = () => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 mt-6">
      <div className="flex justify-between w-full items-center mb-4">
        <h1 className="text-lg font-semibold">Order List</h1>
        <button
          type="button"
         
          className="flex items-center rounded-md border border-input bg-background px-3 text-xs py-1 rounded-lg items-center justify-center shadow-md border border-gray-100"
          id="timeframe"
        >
          <span>Monthly</span>
          <i className="bi-chevron-down ml-2"></i>
        </button>
      </div>
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead className="">
            <tr className="border-b">
              <th className="h-12 px-4 text-left font-medium">No</th>
              <th className="h-12 px-4 text-left font-medium">
                ID <i className="bi-arrow-down-up text-gray-600 text-xs"></i>
              </th>
              <th className="h-12 px-4 text-left font-medium">Date</th>
              <th className="h-12 px-4 text-left font-medium">
                Customer Name{" "}
                <i className="bi-arrow-down-up text-gray-600 text-xs"></i>
              </th>
              <th className="h-12 px-4 text-left font-medium">Location</th>
              <th className="h-12 px-4 text-left font-medium">
                Amount{" "}
                <i className="bi-arrow-down-up text-gray-600 text-xs"></i>
              </th>
              <th className="h-12 px-4 text-left font-medium">
                Status Order{" "}
                <i className="bi-arrow-down-up text-gray-600 text-xs"></i>
              </th>
              <th className="h-12 px-4 text-right font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="border-b">
              <td className="p-4 align-middle">1</td>
              <td className="p-4 align-middle">#12594</td>
              <td className="p-4 align-middle">Dec 1, 2021</td>
              <td className="p-4 align-middle">Frank Murlo</td>
              <td className="p-4 align-middle">312 S Wilmette Ave</td>
              <td className="p-4 align-middle">$847.69</td>
              <td className="p-4 align-middle">
                <div className="p-1 text-xs rounded-lg flex items-center justify-center shadow-md border border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>{" "}
                  New Order
                </div>
              </td>
              <td className="p-4 align-middle text-right">
                <button className="">
                  <i className="bi-three-dots"></i>
                </button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-4 align-middle">1</td>
              <td className="p-4 align-middle">#12594</td>
              <td className="p-4 align-middle">Dec 1, 2021</td>
              <td className="p-4 align-middle">Frank Murlo</td>
              <td className="p-4 align-middle">312 S Wilmette Ave</td>
              <td className="p-4 align-middle">$847.69</td>
              <td className="p-4 align-middle">
                <div className="p-1 text-xs rounded-lg flex items-center justify-center shadow-md border border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>{" "}
                  New Order
                </div>
              </td>
              <td className="p-4 align-middle text-right">
                <button className="">
                  <i className="bi-three-dots"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
