import { Router } from "express";
import Data from "../models/iotData.js";
import expressSSE from "express-sse"; // Import for Server-Sent Events

const SSE = expressSSE;
const router = Router();
const sse = new SSE(); // Create an SSE instance

// Accumulated data structure
const accumulatedData = {};

router.post("/api/data", async (req, res) => {
  try {
    const { id, sm1, sm2, sm3, sm4, temp, hum, ALS, UVS } = req.body;

    const newData = new Data({
      id,
      sm1,
      sm2,
      sm3,
      sm4,
      temp,
      hum,
      ALS,
      UVS,
    });

    // Save the data entry to the database
    await newData.save();

    accumulatedData[id] = accumulatedData[id] || [];
    accumulatedData[id].push(newData);

    // Emit SSE event for new data
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    sse.send( newData );

    res.status(201).json({ message: "Data received and stored successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/api/sse",(req, res, next) => {
  res.flush = () => {}; 
  next();
}, sse.init);

router.get("/api/data/:id", async (req, res) => {
  try {
    const deviceID = req.params.id;

    if (!accumulatedData[deviceID]) {
      // Fetch data from MongoDB if not yet accumulated
      const fetchedData = await Data.find({ id: deviceID }).sort({ timestamp: 1 });
      accumulatedData[deviceID] = fetchedData;
    }

    const data = accumulatedData[deviceID];

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
