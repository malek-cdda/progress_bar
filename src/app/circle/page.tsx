import ProgressBar from "@/components/progress/ProgressBar";
import Image from "next/image";
import React from "react";
export const getData = async () => {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res.json());
    }, 210);
  });
};

const priceBar = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "10px 0",
};
export default async function Circle() {
  const data: any = await getData();
  return <ProgressBar />;
}
