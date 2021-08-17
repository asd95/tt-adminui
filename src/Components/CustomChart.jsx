import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "01/08/2020",
    uv: 79,
  },
  {
    name: "02/08/2020",
    uv: 100,
  },
  {
    name: "03/08/2020",
    uv: 58,
  },
  {
    name: "04/08/2020",
    uv: 44,
  },
];
const CustomChart = () => {
  return (
    <ResponsiveContainer width="100%" aspect={4 / 1}>
      <AreaChart
        maxWidth={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#036647" fill="#036647" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CustomChart;
