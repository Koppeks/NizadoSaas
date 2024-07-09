import type { Metadata } from "next";

import "../sass/index.scss"
import { AuthWrapper } from "./(Wrappers)/AuthWrapper";

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
    <AuthWrapper>
      <html lang="en">
        <body>{children}</body>
      </html>
    </AuthWrapper>
  );
}
