import React, { useState } from "react";
import Link from "next/link";

export default () => {
  const [ids] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <div>
      {ids.map((id) => {
        return (
          <div>
            <Link href={`cards#${id}`}>
              <a>{id}へJUMP</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
