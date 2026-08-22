import NextCase from "../NextCase";

const blocks = [
  { title: "Первый шаг анкеты", image: "First_step.webp", alt: "Сравнение первого шага анкеты до и после редизайна" },
  { title: "Второй шаг анкеты", image: "Second_step.webp", alt: "Сравнение второго шага анкеты до и после редизайна" },
  { title: "Скоринг", image: "Scoring.webp", alt: "Сравнение экрана скоринга до и после редизайна" },
] as const;

function Header() {
  return <header className="caseHeader">
    <div className="deskShell caseHeaderInner">
      <nav><a href="/#work">Кейсы</a><a href="/#hobbies">Обо мне</a></nav>
      <nav><a href="/cv.pdf" download>Скачать CV</a><a href="https://t.me/yegortreschev" target="_blank" rel="noreferrer">Телеграм</a></nav>
    </div>
  </header>;
}

function ImageCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`caseCard ${className}`}>{children}</div>;
}

export default function CreditRedesignPage() {
  return <div className="creditCase">
    <Header />
    <main className="caseShell">
      <section className="caseIntro">
        <h1>Анкета на кредит в мобильном<br />{" "}приложении Альфа-Банка</h1>
        <p className="caseRole">Моя роль: продуктовый дизайнер</p>
      </section>

      <section className="caseSection taskSection">
        <h2>Задача</h2>
        <p>Поднять конверсию в выдачу кредита <span className="caseLink">(CR2)</span></p>
        <div className="taskVisual"><img decoding="async" fetchPriority="high" src="/case-credit/Case1.webp" alt="Новая анкета, экран скоринга и экран одобренного кредита" /></div>
      </section>

      <section className="caseSection">
        <h2>UX-исследование</h2>
        <p>Чтобы выявить проблемы текущей анкеты провёл глубинное<br />интервью с 7 респондентами</p>
        <ImageCard className="researchCard">
          <h3>Скриншоты подготовки исследования</h3>
          <p>План, гипотезы, часть скрипта</p>
          <img loading="lazy" decoding="async" src="/case-credit/Podgotovka_issled.webp" alt="План, гипотезы и часть скрипта исследования" />
        </ImageCard>

        <h2 className="researchResultsTitle">Результаты исследования</h2>
        <ImageCard>
          <h3>Главные проблемы текущей анкеты</h3>
          <p>Которые выявил на исследовании</p>
          <img loading="lazy" decoding="async" src="/case-credit/Results_issled.webp" alt="Основные проблемы текущей кредитной анкеты" />
        </ImageCard>
      </section>

      <section className="caseSection solutionSection">
        <h2>Решение</h2>
        <div className="solutionStack">
          {blocks.map(block => <ImageCard key={block.image}>
            <h3>{block.title}</h3>
            <img loading="lazy" decoding="async" src={`/case-credit/${block.image}`} alt={block.alt} />
          </ImageCard>)}
          <ImageCard>
            <h3>Одобренный кредит</h3>
            <p>На исследовании пользователи отмечали, что этот шаг считывается,<br />как каталог. В новом дизайне переходим в этот формат</p>
            <img loading="lazy" decoding="async" src="/case-credit/Odobrenny_credit.webp" alt="Сравнение экрана одобренного кредита до и после редизайна" />
          </ImageCard>
        </div>
      </section>

      <section className="caseResult" id="result">
        <h2>Результат</h2>
        <div className="resultBadge"><strong>+11 п.п.</strong><span>Общая конверсия<br />в выдачу кредита</span></div>
      </section>
    </main>
    <NextCase href="/mts-music" image="Case3.webp" title="Приложение МТС Музыки для автомобиля" />
    <footer className="caseFooter caseShell"><span>© Егор Трещев 2026</span><a href="https://t.me/yegortreschev" target="_blank" rel="noreferrer">Написать в телеграм</a></footer>
  </div>;
}
