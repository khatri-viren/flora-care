import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  TimeScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { Line } from "react-chartjs-2";
import data from "./TestData";

const ChartComponent = () => {
  ChartJS.register(
    LineElement,
    TimeScale,
    LinearScale,
    PointElement,
    Tooltip
    // Legend
  );

  const timestamps = data.map((item) =>
    new Date(item.timestamp.$date).toISOString()
  );
  const sm1Values = data.map((item) => item.sm1);

  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: "sm1",
        data: sm1Values,
        fill: false,
        borderColor: "#7A8222", // You can customize the color here
      },
    ],
  };
  const options = {
    responsive: true,
    scales: {
      x: {
        type: "time",
        time: {
          unit: "minute", // You can adjust this to your preference
        },
        display: false,
        grid: {
          display: false, // This will hide the grid lines for the x-axis
        },
      },
      y: {
        grid: {
          display: false, // This will hide the grid lines for the x-axis
        },
        display: false,
      },
    },
  };

  return (
    <>
      <div className="w-100 flex m-5 bg-white p-5 shadow-lg rounded-xl">
        <Line data={chartData} options={options} />
      </div>
    </>
  );
};

export default ChartComponent;
