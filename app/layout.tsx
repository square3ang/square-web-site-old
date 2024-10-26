import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "정사각형의 사이트",
  description: "그냥 정사각형의 사이트입니다",
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
