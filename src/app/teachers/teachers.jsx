import React from "react";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import TeachersTable from "@/components/ui/teachersTable";
const Teachers = () => {
  return (
    <div className="p-4 m-4 border rounded-lg">
      <div className=" mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">All Teachers</h1>
        <div className="flex items-center gap-2">
          <input
            className="w-full  border rounded-3xl p-2"
            placeholder="Search"
            type="text"
          />
          <Button className=" bg-yellow-300 text-black  hover:bg-black hover:text-white flex items-center  rounded-full">
            <FaPlus />
          </Button>
        </div>
      </div>
      {/* table */}
      <TeachersTable />
    </div>
  );
};

export default Teachers;
