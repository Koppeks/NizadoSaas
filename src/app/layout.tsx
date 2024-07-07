import type { Metadata } from "next";

import "../sass/index.scss"

export const metadata: Metadata = {
  title: "Nizado",
  description: "Discover a new way to organize yourself and your team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
