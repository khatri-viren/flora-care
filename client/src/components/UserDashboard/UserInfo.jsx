import { useEffect, useState } from "react";
import ChartComponent from "./ChartComponent";
// import data from "./data.json";
import axios from "axios";
import { ring } from "ldrs";

const UserInfo = () => {
  const [loading, setLoading] = useState(true);
  ring.register();

  const [attributes, setAttributes] = useState({
    Soil_Moisture_1: [],
    Soil_Moisture_2: [],
    Soil_Moisture_3: [],
    Soil_Moisture_4: [],
    Ambient_Light_Sensor: [],
    UV_Light_Sensor: [],
    Temperature: [],
    Humidity: [],
    timestamps: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/data/d1`);
        const data = response.data;

        const timestamps = data.map((item) =>
          new Date(item.timestamp).toISOString()
        );

        // Extract and format data for each attribute
        const sm1Data = data.map((item) => item.sm1);
        const sm2Data = data.map((item) => item.sm2);
        const sm3Data = data.map((item) => item.sm3);
        const sm4Data = data.map((item) => item.sm4);
        const ALSData = data.map((item) => item.ALS);
        const UVSData = data.map((item) => item.UVS);
        const tempData = data.map((item) => item.temp);
        const humData = data.map((item) => item.hum);

        setAttributes({
          timestamps,
          Soil_Moisture_1: sm1Data,
          Soil_Moisture_2: sm2Data,
          Soil_Moisture_3: sm3Data,
          Soil_Moisture_4: sm4Data,
          Ambient_Light_Sensor: ALSData,
          UV_Light_Sensor: UVSData,
          Temperature: tempData,
          Humidity: humData,
        });
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false when data is fetched
      }
    };

    fetchData();
  }, []);

  return (
    <section className="userInfo">
      <hr className="border border-solid border-umedium my-3" />
      <h2 className="text-2xl font-semibold">Your Device Data</h2>
      <div className="grid md:grid-cols-2 gap-10 my-5">
        {loading ? (
          <div className="w-full col-span-2 my-20 flex justify-center items-center">
            <l-ring
              size="40"
              stroke="5"
              bg-opacity="0"
              speed="2"
              color="black"
            ></l-ring>
          </div>
        ) : (
          Object.keys(attributes)
            .slice(1, 9)
            .map((attribute) => (
              <ChartComponent
                key={attribute}
                data={{
                  timestamps: attributes.timestamps,
                  values: attributes[attribute],
                }}
                label={attribute}
              />
            ))
        )}
      </div>
    </section>
  );
};

export default UserInfo;
