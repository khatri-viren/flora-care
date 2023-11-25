import { Router } from "express";

const router = Router();

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

    res.status(201).json({ message: "Data received and stored successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/api/data/:id", async (req, res) => {
  try {
    const deviceID = req.params.id;

    // Find all data entries with the given device ID
    const data = await Data.find({ id: deviceID }).sort({ timestamp: 1 });
    // console.log(data);

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
