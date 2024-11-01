export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full py-2">
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
            <div className="border w-[40%] rounded bg-blue-500/20 pt-4">
              <h1>ohui</h1>
            </div>

            <div className="border w-[60%] rounded bg-green-500/20 pt-4">
              <h1>ohui</h1>g
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
