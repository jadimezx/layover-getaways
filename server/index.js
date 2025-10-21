const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const tours = [
  { id: "canal-half", name: "Panama Canal Half Day", price: 90 },
  { id: "casco", name: "Casco Viejo + Rooftop", price: 45 },
  { id: "monkey", name: "Monkey Island & Rainforest", price: 120 },
];

// GET tours
app.get("/api/tours", (req, res) => res.json(tours));

// POST booking
app.post("/api/book", (req, res) => {
  const booking = req.body;
  console.log("📘 Booking received:", booking);
  res.status(201).json({ success: true, message: "Booking saved!" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
