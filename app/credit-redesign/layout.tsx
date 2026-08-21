import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Анкета на кредит в мобильном приложении Альфа-Банка — Егор Трещев",
  description: "Редизайн кредитной анкеты по результатам UX-исследования: проблемы, решения и рост конверсии в выдачу на 11 п.п.",
  openGraph: {
    title: "Анкета на кредит в мобильном приложении Альфа-Банка",
    description: "UX-исследование и редизайн кредитной анкеты с ростом конверсии на 11 п.п.",
    images: [],
  },
  twitter: {
    title: "Анкета на кредит в мобильном приложении Альфа-Банка",
    description: "UX-исследование и редизайн кредитной анкеты с ростом конверсии на 11 п.п.",
    images: [],
  },
};

export default function CreditRedesignLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
