"use client";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "jan",
    expense: 4000,
    income: 2400,
    amt: 2400,
  },
  {
    name: "feb",
    expense: 3000,
    income: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    expense: 2000,
    income: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    expense: 2780,
    income: 3908,
    amt: 2000,
  },
  {
    name: "May",
    expense: 1890,
    income: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    expense: 2390,
    income: 3800,
    amt: 2500,
  },
  {
    name: "July",
    expense: 3490,
    income: 4300,
    amt: 2100,
  },
];
import { BsThreeDots } from "react-icons/bs";
export default function FinanceBarChart() {
  return (
    <div>
      {" "}
      {/* title */}
      <div className="flex justify-between">
        <h1>Finance</h1>
        <div className="  px-2  flex items-center justify-center">
          <BsThreeDots />
        </div>
      </div>
      {/* chart */}
      <div className="my-4" style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="expense" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
