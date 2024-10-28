import type { Metadata } from "next";
import "./globals.css";
import {Inter} from 'next/font/google';
// Using variable font
const inter = Inter ({
    subsets: ['vietnamese'],
    display: "swap", // Use font-display: swap to ensure text is displayed immediately

});
export const metadata: Metadata = {
  title: "PK4ID giải pháp kinh doanh và quản lý cho doanh nghiệp",
  description: "PK4ID - Giải pháp kinh doanh và quản lý toàn diện, hỗ trợ tối ưu hoạt động cho cá nhân và doanh nghiệp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${inter.className} ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
