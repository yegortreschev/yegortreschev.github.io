import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "МТС Музыка для автомобиля — Егор Трещев",
  description: "Кейс о дизайне MVP приложения МТС Музыки для автомобиля.",
  openGraph: { title: "МТС Музыка для автомобиля", description: "Исследование, вайрфреймы и дизайн MVP автомобильного приложения.", images: [] },
  twitter: { title: "МТС Музыка для автомобиля", description: "Исследование, вайрфреймы и дизайн MVP автомобильного приложения.", images: [] },
};

export default function MtsMusicLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
