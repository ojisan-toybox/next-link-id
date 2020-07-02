import React, { useState, useEffect, useRef } from "react";

export default () => {
  const [cards, setCards] = useState([]);
  const [hashId, setId] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((d) => setCards(d));

    // TODO: 安全にnumber変換
    setId(Number(window.location.hash.replace("#", "")));
  }, []);

  return cards ? (
    <div>
      {cards.map((id) => (
        <Child id={id} isScroll={id === hashId}></Child>
      ))}
    </div>
  ) : (
    "loading"
  );
};

const Child = ({ id, isScroll }) => {
  const ref = useRef();
  useEffect(() => {
    if (isScroll) {
      ref.current.scrollIntoView();
    }
  }, []);
  return (
    <div
      ref={ref}
      id={id}
      style={{
        width: "300px",
        height: "300px",
        background: "gray",
        margin: "12px",
      }}
    >
      <p style={{ fontSize: "40px", color: "white", textAlign: "center" }}>
        {id}
      </p>
    </div>
  );
};
