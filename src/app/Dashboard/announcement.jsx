import { BsThreeDots } from "react-icons/bs";

export default function Announcement() {
  return (
    <div className="bg-white border mt-4 rounded-lg overflow-hidden">
      {/* Announcement title */}
      <div className="px-4 py-2 flex justify-between items-center bg-white">
        <h1 className="text-xl font-semibold">Announcement</h1>
        <div className="text-xl font-semibold px-2 flex items-center justify-center cursor-pointer">
          <BsThreeDots />
        </div>
      </div>

      {/* Announcement items */}
      <div className="overflow-y-scroll h-80 space-y-4 p-4">
        <div className="group py-4 rounded-lg border bg-blue-500/30 p-4 transition-colors hover:bg-blue-500/50">
          <div className="flex justify-between">
            <h3 className="font-medium">About 4A Math Test</h3>
            <span className="text-sm border bg-white/50 px-2 rounded-md text-muted-foreground">
              10:00 AM - 2:00 PM
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Outdoor activities and games for all students.
          </p>
        </div>

        <div className="group py-4 rounded-lg border bg-purple-500/30 p-4 transition-colors hover:bg-purple-500/50">
          <div className="flex justify-between">
            <h3 className="font-medium">About 4A Math Test</h3>
            <span className="text-sm border bg-white/50 px-2 rounded-md text-muted-foreground">
              10:00 AM - 2:00 PM
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Classic music concert for all students and teachers.
          </p>
        </div>

        <div className="group py-4 rounded-lg border bg-green-500/30 p-4 transition-colors hover:bg-green-500/50">
          <div className="flex justify-between">
            <h3 className="font-medium">About 4A Math Test</h3>
            <span className="text-sm border bg-white/50 px-2 rounded-md text-muted-foreground">
              2:00 PM - 4:00 PM
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Traditional science festival for all students.
          </p>
        </div>
      </div>
    </div>
  );
}
