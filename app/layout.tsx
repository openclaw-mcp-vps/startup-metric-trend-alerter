import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Startup Metric Trend Alerter",
  description: "Alert on concerning startup metric trends before they become crises."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ee492baa-569e-44d8-87b9-81950d976aeb"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
