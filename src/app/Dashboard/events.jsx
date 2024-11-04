"use client";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { BsThreeDots } from "react-icons/bs";
import { Calendar } from "@/components/ui/calendar";

export default function Events() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="w-full border bg-white ">
      {/* calendar */}
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md  w-full  border"
      />
      {/* title */}
      <div className=" px-4 flex justify-between">
        <h1 className="text-xl font-semibold">Events</h1>
        <div className="text-xl font-semibold  px-2  flex items-center justify-center">
          <BsThreeDots />
        </div>
      </div>
      {/* events */}
      <div className=" overflow-y-scroll h-80  space-y-4 p-4">
        <div className="group  py-4  rounded-lg border bg-card p-4 transition-colors hover:bg-muted/50">
          <div className="flex justify-between">
            <h3 className="font-medium">Summer Camp Trip</h3>
            <span className="text-sm text-muted-foreground">
              10:00 AM - 2:00 PM
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Outdoor activities and games for all students.
          </p>
        </div>

        <div className="group py-4  rounded-lg border bg-card p-4 transition-colors hover:bg-muted/50">
          <div className="flex justify-between">
            <h3 className="font-medium">Music Concert</h3>
            <span className="text-sm text-muted-foreground">
              3:00 PM - 5:00 PM
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Classic music concert for all students and teachers.
          </p>
        </div>

        <div className="group py-4 rounded-lg border bg-card p-4 transition-colors hover:bg-muted/50">
          <div className="flex justify-between">
            <h3 className="font-medium">Science Fair</h3>
            <span className="text-sm text-muted-foreground">
              2:00 PM - 4:00 PM
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Traditional science festival for all students.
          </p>
        </div>
        <div className="group py-4 rounded-lg border bg-card p-4 transition-colors hover:bg-muted/50">
          <div className="flex justify-between">
            <h3 className="font-medium">Science Fair</h3>
            <span className="text-sm text-muted-foreground">
              2:00 PM - 4:00 PM
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Traditional science festival for all students.
          </p>
        </div>
        <div className="group py-4 rounded-lg border bg-card p-4 transition-colors hover:bg-muted/50">
          <div className="flex justify-between">
            <h3 className="font-medium">Science Fair</h3>
            <span className="text-sm text-muted-foreground">
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
