import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default () => {
  const [ids] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const router = useRouter();
  return (
    <div>
      <h2>linkでjump</h2>
      {ids.map((id) => {
        return (
          <div>
            <Link href={`cards#${id}`}>
              <a>{id}へJUMP</a>
            </Link>
          </div>
        );
      })}
      <hr></hr>
      <h2>linkを使わずにrouterでjump</h2>
      {ids.map((id) => {
        return (
          <div
            onClick={() => {
              router.push(`/cards#${id}`);
            }}
          >
            {id}へJUMP
          </div>
        );
      })}
      <hr></hr>
      <h2>linkを使わずにrouterでjump(ただしcardはapi取得）</h2>
      {ids.map((id) => {
        return (
          <div
            onClick={() => {
              router.push(`/apiCards#${id}`);
            }}
          >
            {id}へJUMP
          </div>
        );
      })}{" "}
      <hr></hr>
      <h2>linkを使わずにrouterでjump(ただしcardはapi取得/refでscro;;）</h2>
      {ids.map((id) => {
        return (
          <div
            onClick={() => {
              router.push(`/apiRefCards#${id}`);
            }}
          >
            {id}へJUMP
          </div>
        );
      })}
    </div>
  );
};
