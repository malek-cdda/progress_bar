import React from "react";
export default function CirclePageLayout({ children }: any) {
  const mainStyles = {
    width: "80%",
    margin: "0 auto",
    padding: "6rem",
    minHeight: "100vh",
  };

  return <main style={mainStyles}>{children}</main>;
}
