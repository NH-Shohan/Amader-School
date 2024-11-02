import { BsThreeDots } from "react-icons/bs";
import MiddleLeftChart from "./Dashboard/middleLeftChart";
import MiddleRightChart from "./Dashboard/middleRightChart.jsx";
import FinanceBarChart from "./Dashboard/financeBarChart";
export default function Home() {
  return (
    <div className="bg-[#F6F8FA] flex flex-col items-center justify-center h-full w-full py-2">
      <div className="h-full p-2 w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* 1st row */}
        <div className="border col-span-2 p-2">
          <div className="grid lg:grid-cols-4 gap-3">
            <div className="border rounded bg-blue-500/20 pt-4">
              <div className="px-4">
                <p className="text-xs bg-white text-green-500 rounded-full w-16 pl-2 py-1">
                  21/2024
                </p>
                <h1 className="font-bold text-lg my-1">1222</h1>
                <h1 className="text-xs font-semibold opacity-70 pb-4">
                  Students
                </h1>
              </div>
            </div>
            <div className="border rounded bg-red-500/20 pt-4">
              <div className="px-4">
                <p className="text-xs bg-white text-green-500 rounded-full w-16 pl-2 py-1">
                  21/2024
                </p>
                <h1 className="font-bold text-lg my-1">1222</h1>
                <h1 className="text-xs font-semibold opacity-70 pb-4">
                  Students
                </h1>
              </div>
            </div>
            <div className="border rounded bg-purple-500/20 pt-4">
              <div className="px-4">
                <p className="text-xs bg-white text-green-500 rounded-full w-16 pl-2 py-1">
                  21/2024
                </p>
                <h1 className="font-bold text-lg my-1">1222</h1>
                <h1 className="text-xs font-semibold opacity-70 pb-4">
                  Students
                </h1>
              </div>
            </div>
            <div className="border rounded bg-green-500/20 pt-4">
              <div className="px-4">
                <p className="text-xs bg-white text-green-500 rounded-full w-16 pl-2 py-1">
                  21/2024
                </p>
                <h1 className="font-bold text-lg my-1">1222</h1>
                <h1 className="text-xs font-semibold opacity-70 pb-4">
                  Students
                </h1>
              </div>
            </div>
          </div>

          {/* 2nd row */}
          <div className="my-2 lg:flex   gap-3">
            <div className=" px-4  border w-[33%] rounded bg-white  pt-4">
              {/* title */}
              <div className="flex justify-between">
                <h1>Students</h1>
                <div className="  px-2  flex items-center justify-center">
                  <BsThreeDots />
                </div>
              </div>
              {/* chart */}
              <MiddleLeftChart />
            </div>

            <div className=" px-2 border w-[67%] rounded bg-white  pt-4">
              {/* title */}
              <div className="flex justify-between">
                <h1>Attendance</h1>
                <div className="  px-2  flex items-center justify-center">
                  <BsThreeDots />
                </div>
              </div>

              <MiddleRightChart />
            </div>
          </div>
          {/* 3rd row */}
          <div className="border rounded bg-white pt-4">
            <div className="px-4">
              <FinanceBarChart />
            </div>
          </div>
        </div>

        <div className="border  rounded col-span-1">
          <h1>ohui</h1>
        </div>
      </div>
    </div>
  );
}
