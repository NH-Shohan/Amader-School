"use client";
import React, { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Boys",
    uv: 2.63,
    pv: 4800,
    fill: "#CECEFE",
  },
  {
    name: "Girls",
    uv: 6.67,
    pv: 4800,
    fill: "#FAE27C",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

export default function MiddleLeftChart() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      {" "}
      {/* Fixed height here */}
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="50%"
          outerRadius="80%"
          barSize={15}
          data={data}
        >
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
