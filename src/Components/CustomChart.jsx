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

const onTransformData = (data) => {
  return data.map((item) => {
    return {
      name: item.date,
      utilizatori: item.totalUsers,
    };
  });
};
const CustomChart = ({ dataChart }) => {
  const data = onTransformData(dataChart);
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
        <XAxis
          dataKey="name"
          style={{
            fontSize: ".8rem",
          }}
        />
        <YAxis
          style={{
            fontSize: ".8rem",
          }}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="utilizatori"
          stroke="#036647"
          fill="#036647"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CustomChart;
