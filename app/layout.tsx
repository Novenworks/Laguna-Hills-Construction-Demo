import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laguna Hills Construction, Inc. — Orange County Remodeling",
  description:
    "Family-owned general contractor in Laguna Hills serving Orange County with custom residential and commercial remodeling. License #1049889.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
