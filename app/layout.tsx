import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steamforce Medical",
  description: "Dissinkfect",
  generator: "v0.dev",
  icons: {
    icon: "./medicalicon.png", // Path to your favicon in the public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./medicalicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
