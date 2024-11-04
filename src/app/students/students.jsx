import { BsThreeDots } from "react-icons/bs";
import MiddleLeftChart from "@/app/Dashboard/middleLeftChart";
import MiddleRightChart from "@/app/Dashboard/middleRightChart";
import FinanceBarChart from "@/app/Dashboard/financeBarChart";
import Events from "@/app/Dashboard/events";
import Announcement from "@/app/Dashboard/announcement";
import BigCalendar from "@/app/Dashboard/bigCalendar";
export default function Students() {
  return (
    <div className="bg-[#F6F8FA] flex flex-col items-center justify-center h-full w-full py-2">
      <div className="h-full p-2 w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* left row */}
        <div className="border col-span-2 p-2">
          <h1>Students</h1>
          <BigCalendar />
        </div>
        {/* right row */}
        <div className="border px-4 rounded col-span-1">
          <Events />
          <Announcement />
        </div>
      </div>
    </div>
  );
}
