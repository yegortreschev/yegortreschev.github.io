import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Лидирование дизайн-системы анкет сайта Альфа-Банка — Егор Трещев",
  description: "Как была организована работа дизайн-команды и создана единая дизайн-система анкет сайта Альфа-Банка.",
  openGraph: {
    title: "Лидирование дизайн-системы анкет сайта Альфа-Банка",
    description: "Исследование, бэклог, компоненты, ветки и гайды дизайн-системы анкет.",
    images: [],
  },
  twitter: {
    title: "Лидирование дизайн-системы анкет сайта Альфа-Банка",
    description: "Исследование, бэклог, компоненты, ветки и гайды дизайн-системы анкет.",
    images: [],
  },
};

export default function FormDesignSystemLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
