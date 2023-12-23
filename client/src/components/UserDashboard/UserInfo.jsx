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

        setAttributes((prevAttributes) => ({
          ...prevAttributes,
          timestamps: [...prevAttributes.timestamps, ...data.map((item) => new Date(item.timestamp).toISOString())],
          Soil_Moisture_1: [...prevAttributes.Soil_Moisture_1, ...data.map((item) => item.sm1)],
          Soil_Moisture_2: [...prevAttributes.Soil_Moisture_2, ...data.map((item) => item.sm2)],
          Soil_Moisture_3: [...prevAttributes.Soil_Moisture_3, ...data.map((item) => item.sm3)],
          Soil_Moisture_4: [...prevAttributes.Soil_Moisture_4, ...data.map((item) => item.sm4)],
          Ambient_Light_Sensor: [...prevAttributes.Ambient_Light_Sensor, ...data.map((item) => item.ALS)],
          UV_Light_Sensor: [...prevAttributes.UV_Light_Sensor, ...data.map((item) => item.UVS)],
          Temperature: [...prevAttributes.Temperature, ...data.map((item) => item.temp)],
          Humidity: [...prevAttributes.Humidity, ...data.map((item) => item.hum)],
        }));

        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false when data is fetched
      }
    };

    fetchData();
    const eventSource = new EventSource("http://localhost:4000/api/sse");
    eventSource.onopen = () => {
      console.log("SSE connection opened");
    };

    eventSource.onerror = (error) => {
      console.error("SSE error:", error);
    };
    eventSource.onmessage = (event) => {
      console.log("Received SSE event:", event.data);
      console.log(typeof(event.data));
      try {
        const newData = JSON.parse(event.data); // Assuming server sends data in JSON format
        // Extract and format data for each attribute
      console.log(typeof(newData));
      console.log(newData);
      
      const newTimestamp = new Date(newData.timestamp).toISOString();
  
      setAttributes((prevAttributes) => ({
        ...prevAttributes,
        timestamps: [...prevAttributes.timestamps, newTimestamp],
        Soil_Moisture_1: [...prevAttributes.Soil_Moisture_1, newData.sm1],
        Soil_Moisture_2: [...prevAttributes.Soil_Moisture_2, newData.sm2],
        Soil_Moisture_3: [...prevAttributes.Soil_Moisture_3, newData.sm3],
        Soil_Moisture_4: [...prevAttributes.Soil_Moisture_4, newData.sm4],
        Ambient_Light_Sensor: [...prevAttributes.Ambient_Light_Sensor, newData.ALS],
        UV_Light_Sensor: [...prevAttributes.UV_Light_Sensor, newData.UVS],
        Temperature: [...prevAttributes.Temperature, newData.temp],
        Humidity: [...prevAttributes.Humidity, newData.hum],
      }));
      } catch (error) {
        console.error("Error parsing SSE data:", error);
        // Handle the error appropriately, e.g., display a message to the user
      }
    };

    return () => {
      // Cleanup on unmount
      eventSource.close();
    };  
  }, []);

  return (
    <section className="userInfo">
      <hr className="border border-solid border-umedium my-3" />
      <h2 className="text-2xl font-semibold">Your Device Data</h2>
      <div className="grid md:grid-cols-3 gap-10 my-5">
        {loading ? (
          <div className="w-full col-span-3 my-20 flex justify-center items-center">
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
            .slice(0, 8)
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
