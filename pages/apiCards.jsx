import React, { useState, useEffect } from "react";

export default () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((d) => setCards(d));
  }, []);

  return cards ? (
    <div>
      {cards.map((id) => (
        <div
          id={id}
          style={{
            width: "300px",
            height: "300px",
            background: "gray",
            margin: "12px",
          }}
        ></div>
      ))}
    </div>
  ) : (
    "loading"
  );
};
