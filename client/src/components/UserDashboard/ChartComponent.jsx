import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  TimeScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { Line } from "react-chartjs-2";
import data from './TestData';

const ChartComponent = () => {

  ChartJS.register(
    LineElement,
    TimeScale,
    LinearScale,
    PointElement,
    Tooltip,
    // Legend
  );

  const timestamps = data.map((item) =>
    new Date(item.timestamp.$date).toISOString()
  );
  const sm1Values = data.map((item) => item.sm1);
  const sm2Values = data.map((item) => item.sm2);
  const sm3Values = data.map((item) => item.sm3);
  const sm4Values = data.map((item) => item.sm4);
  const ALSValues = data.map((item) => item.ALS);
  const UVSValues = data.map((item) => item.UVS);

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
  const chartData2 = {
    labels: timestamps,
    datasets: [
      {
        label: "sm2",
        data: sm2Values,
        fill: false,
        borderColor: "#7A8222", // You can customize the color here
      },
    ],
  };
  const chartData3 = {
    labels: timestamps,
    datasets: [
      {
        label: "sm3",
        data: sm3Values,
        fill: false,
        borderColor: "#7A8222", // You can customize the color here
      },
    ],
  };
  const chartData4 = {
    labels: timestamps,
    datasets: [
      {
        label: "sm4",
        data: sm4Values,
        fill: false,
        borderColor: "#7A8222", // You can customize the color here
      },
    ],
  };
  const chartData5 = {
    labels: timestamps,
    datasets: [
      {
        label: "ALS",
        data: ALSValues,
        fill: false,
        borderColor: "#7A8222", // You can customize the color here
      },
    ],
  };
  const chartData6 = {
    labels: timestamps,
    datasets: [
      {
        label: "UVS",
        data: UVSValues,
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
        {/* <Line data={chartData2} options={options} /> */}
        {/* <Line data={chartData3} options={options} />
        <Line data={chartData4} options={options} />
        <Line data={chartData5} options={options} />
        <Line data={chartData6} options={options} /> */}
      </div>
    </>
  );
};

export default ChartComponent;
