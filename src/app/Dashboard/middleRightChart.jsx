"use client";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sat",
    absant: 4000,
    present: 2400,
    amt: 2400,
  },
  {
    name: "Sun",
    absant: 3000,
    present: 1398,
    amt: 2210,
  },
  {
    name: "Mon",
    absant: 2000,
    present: 9800,
    amt: 2290,
  },
  {
    name: "Tues",
    absant: 2780,
    present: 3908,
    amt: 2000,
  },
  {
    name: "Wed",
    absant: 1890,
    present: 4800,
    amt: 2181,
  },
  {
    name: "Thurs",
    absant: 2390,
    present: 3800,
    amt: 2500,
  },
];
export default function MiddleRightChart() {
  return (
    <div className="mt-4" style={{ width: "100%", height: 400 }}>
      {" "}
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />

          <YAxis stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar dataKey="present" fill="#8884d8" />
          <Bar dataKey="absant" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
