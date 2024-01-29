import React from "react";
import style from "./style.module.css";
const SkeletonLoader = ({
  width = "50%",
  circle = false,
  circlePosition = "center",
  line = 3,
}) => {
  let positionOfCircle =
    circlePosition === "center"
      ? "justify-center"
      : circlePosition === "left"
      ? "justify-start"
      : circlePosition === "right"
      ? "justify-end"
      : "";
  let widthOfSkeleton: any = width;
  //   CHECK if anyone can give px or other it will accept only % value
  if (/[&*^%$#@!~a-zA-Z]/.test(width)) {
    let widthValue = width.split("");
    let numericValues = widthValue.filter((item) => !isNaN(Number(item)));
    widthOfSkeleton = Number(numericValues.concat("").join(""));
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div style={{ width: widthOfSkeleton + "%" }}>
        <div className={style.card}>
          <div className="header w-full text-center">
            <div className={`flex ${positionOfCircle}  w-full`}>
              {circle && (
                <div className={`${style.header_img} ${style.skeleton}`}></div>
              )}
            </div>
          </div>
          <div data-body>
            {Array.from({ length: line }).map((item, index) => (
              <div
                className={`${style.skeleton} ${style.skeleton_text}`}
                key={index}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
