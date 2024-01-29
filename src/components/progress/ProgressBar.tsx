"use client";
import SkeletonLoader from "@/app/utils/skletonLoader/SkeletonLoader";
import React, { use, useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState([]);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        setProgress(json);
        setToggle(true);
      });
  }, []);

  return (
    <div className="container mx-auto">
      {toggle ? (
        <div className="flex flex-wrap gap-3 justify-center">
          {progress.map((item: any) => (
            <div
              key={item.id}
              className="bg-blue-300 w-16 h-16 rounded-md flex justify-center items-center p-2">
              {item.id}
            </div>
          ))}
        </div>
      ) : (
        <SkeletonLoader
          circle={false}
          circlePosition="left"
          line={5}
          width="30"
        />
      )}
    </div>
  );
};

export default ProgressBar;
