import React, { FC, ReactNode } from "react";
import { ArrowReverseIcon, CheckIcon, ProductIcon, UsersIcon } from "../@layout/icons";

export const GlobalData = () => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 pr-0 grid grid-cols-4 gap-4 mt-8">
      <GlobalDataCard
        totalUsers="89,935"
        changeThisWeek="10.2"
        percentageChange={1.01}
        icon={<UsersIcon color="#347AE2" className="w-4" />}
      />
      <GlobalDataCard
        totalUsers="23,283.5"
        changeThisWeek="3.1"
        percentageChange={0.49}
        icon={<ProductIcon color="#347AE2" className="w-4" />}
      />
      <GlobalDataCard
        totalUsers="46,827"
        changeThisWeek="2.56"
        percentageChange={-0.91}
        icon={<CheckIcon color="#347AE2" className="w-4" />}
      />
      <GlobalDataCard
        totalUsers="124,854"
        changeThisWeek="7.2"
        percentageChange={1.51}
        icon={<ArrowReverseIcon color="#347AE2" className="w-4" />}
        isLast={true}
      />
    </div>
  );
};

interface GlobalDataCardProps {
  totalUsers: number | string;
  changeThisWeek: number | string;
  percentageChange: number;
  icon: ReactNode;
  isLast?: boolean;
}

const GlobalDataCard: FC<GlobalDataCardProps> = ({
  totalUsers,
  percentageChange,
  changeThisWeek,
  icon,
  isLast,
}) => {
  return (
    <div
      className={`relative flex flex-col border-gray-200 ${
        isLast ? "mr-0" : "border-r mr-6"
      }`}
    >
      <h1 className="text-2xl font-semibold">{totalUsers}</h1>
      <h4 className="text-sm font-medium mb-2">Total users</h4>
      <span className={`app-color-gray text-xs mt-1`}>
        <i
          className={`${
            percentageChange > 0
              ? "bi-arrow-up-right  text-green-500"
              : "bi-arrow-down-left  text-red-600"
          }`}
        ></i>{" "}
        {changeThisWeek} &nbsp; {percentageChange}% this week
      </span>
      <div className="absolute right-0 top-0 mr-8 w-8 h-8 rounded-lg flex items-center justify-center shadow-md border border-gray-100">
        {icon}
      </div>
    </div>
  );
};
