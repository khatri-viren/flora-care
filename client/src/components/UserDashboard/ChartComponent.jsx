/* eslint-disable react/prop-types */
import {
  Chart as ChartJS,
  LineElement,
  TimeScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { useState } from "react";
import { Line } from "react-chartjs-2";

const ChartComponent = ({ data, label }) => {
  // console.log(data);
  const [viewMode, setViewMode] = useState("latest");

  const showLatest = () => setViewMode("latest");
  const showAll = () => setViewMode("all");

  ChartJS.register(
    LineElement,
    TimeScale,
    LinearScale,
    PointElement,
    Tooltip
    // Legend
  );
  const timestamps = data.timestamps;
  const values = data.values;
  const filteredTimestamps =
    viewMode === "latest" ? timestamps.slice(-50) : timestamps;
  const filteredSm1Values = viewMode === "latest" ? values.slice(-50) : values;

  const chartData = {
    labels: filteredTimestamps,
    datasets: [
      {
        label: { label },
        data: filteredSm1Values,
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
          unit: "minute",
        },
        display: true,
        grid: {
          display: false,
        },
        beginAtZero: true, // Start x-axis from 0
        title: {
          display: true,
          text: "Time (minutes)",
        },
      },
      y: {
        display: true,
        grid: {
          display: false,
        },
        beginAtZero: true, // Start y-axis from 0
        title: {
          display: true,
          text: `${label} Value`,
        },
      },
    },
  };

  return (
    <>
      <div className="w-full h-fit flex flex-col ">
        <div className="font-semibold text-xl my-1">Sensor: {label}</div>
        <Line data={chartData} options={options} />
        <div className="w-100 flex justify-evenly my-2">
          <button
            className="border hover:cursor-pointer border-solid border-udark px-2 py-1"
            onClick={showLatest}
          >
            Latest 50
          </button>
          <button
            className="border hover:cursor-pointer border-solid border-udark px-2 py-1"
            onClick={showAll}
          >
            All Readings
          </button>
        </div>
      </div>
    </>
  );
};

export default ChartComponent;
