import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Редизайн сайта Cs.Money — Егор Трещев",
  description: "Кейс о редизайне ключевых сценариев Cs.Money: исследование, архитектура, дизайн и рост продуктовых метрик.",
  openGraph: { title: "Редизайн сайта Cs.Money", description: "Исследование и редизайн ключевых сценариев Cs.Money.", images: [] },
  twitter: { title: "Редизайн сайта Cs.Money", description: "Исследование и редизайн ключевых сценариев Cs.Money.", images: [] },
};

export default function CsMoneyLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
