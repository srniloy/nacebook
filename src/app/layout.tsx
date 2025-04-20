import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "NaceBook",
  description: "A Place to share your thoughts, feelings and experiances",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
