import { GlobalData } from "@/components/@pages/globalData";
import { HomeHeader } from "@/components/@pages/homeHeader";

export default function Home() {
  return (
    <div className="flex flex-col w-full p-6 pt-6">
      <HomeHeader />
      <GlobalData />
    </div>
  );
}
