import { Earnings } from "@/components/@pages/home/Earnings";
import { OrderAnalytics } from "@/components/@pages/home/OrderAnalytics";
import { OrderList } from "@/components/@pages/home/OrderList";
import { GlobalData } from "@/components/@pages/home/globalData";
import { HomeHeader } from "@/components/@pages/home/homeHeader";

export default function Home() {
  return (
    <div className="flex flex-col w-full p-6 pt-6">
      <HomeHeader />
      <GlobalData />
      <div className="mt-6 flex justify-between">
        <OrderAnalytics />
        <Earnings />
      </div>
      <OrderList />
    </div>
  );
}
