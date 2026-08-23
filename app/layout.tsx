import type { Metadata } from "next";
import "./globals.css";
const title = "Егор Трещев — Продуктовый дизайнер";
const description = "Портфолио продуктового дизайнера Егора Трещева. 8+ лет опыта в продуктовых интерфейсах, growth-задачах и дизайн-системах.";
export const metadata: Metadata = {
  metadataBase: new URL("https://yegortreschev.github.io"),
  title,
  description,
  openGraph: { title, description, type: "website", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ru"><head><link rel="icon" href="/favicon.ico?v=2" sizes="any"/><link rel="icon" type="image/png" href="/favicon.png?v=2" sizes="512x512"/></head><body>{children}</body></html>}
