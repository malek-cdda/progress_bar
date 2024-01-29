// In /app/layout.jsx
"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        {children}
        <ProgressBar
          height="42px"
          color="#fffd00"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </body>
    </html>
  );
}
