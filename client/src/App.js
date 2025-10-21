import React, { useEffect, useState } from "react";

function App() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    // Use relative path for Azure deployment
    fetch("/api/tours")
      .then(res => res.json())
      .then(data => setTours(data))
      .catch(err => console.error(err));
  }, []);

  const handleBook = (tourId) => {
    const booking = {
      name: "John Doe",
      tourId,
      flight: "CM123",
      referralCode: "CREW10"
    };

    fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then(res => res.json())
      .then(data => alert(data.message))
      .catch(err => console.error(err));
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h1>Layover Getaways ✈️</h1>
      <h3>Available Tours</h3>
      {tours.map((tour) => (
        <div key={tour.id} style={{ marginBottom: "1rem" }}>
          <strong>{tour.name}</strong> — ${tour.price}
          <button
            style={{ marginLeft: "1rem" }}
            onClick={() => handleBook(tour.id)}
          >
            Book
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
