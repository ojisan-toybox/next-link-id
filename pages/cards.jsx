import React, { useState } from "react";

export default () => {
  const [ids] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <div>
      {ids.map((id) => (
        <div
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
      ))}
    </div>
  );
};
