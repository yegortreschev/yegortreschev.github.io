import NextCase from "../NextCase";
import ResultBadge from "../ResultBadge";

const blocks = [
  { title: "Первый шаг анкеты", image: "First_step.webp", alt: "Сравнение первого шага анкеты до и после редизайна" },
  { title: "Второй шаг анкеты", image: "Second_step.webp", alt: "Сравнение второго шага анкеты до и после редизайна" },
  { title: "Скоринг", image: "Scoring.webp", alt: "Сравнение экрана скоринга до и после редизайна" },
] as const;

function Header() {
  return <header className="caseHeader">
    <div className="deskShell caseHeaderInner">
      <nav><a href="/#work">Кейсы</a><a href="/#hobbies">Обо мне</a></nav>
      <nav><a href="https://t.me/yegortreschev" target="_blank" rel="noreferrer">Написать в телеграм</a></nav>
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
        <div className="caseMeta">
          <div>
            <span>Команда</span>
            <p>Product owner, системный аналитик, 2 frontend разработчика, backend разработчик, QA-инженер</p>
          </div>
          <div>
            <span>Моя роль</span>
            <p>Продуктовый дизайнер</p>
          </div>
        </div>
      </section>

      <section className="caseOverview" aria-label="О проекте">
        <div>
          <h2>Проблема</h2>
          <p>Конверсия анкеты оказалась ниже плана, поэтому не удавалось достичь нужного количества выдач</p>
        </div>
        <div>
          <h2>Задача</h2>
          <p>Выявить точки роста конверсии в выдачу через исследование и выйти на плановые показатели <span className="caseLink">CR2</span></p>
        </div>
        <div>
          <h2>Результат</h2>
          <p>+11 п.п. к выдачам и выход на плановые показатели</p>
        </div>
      </section>

      <section className="caseHeroVisual" aria-label="Ключевые экраны анкеты">
        <div className="taskVisual"><img decoding="async" fetchPriority="high" src="/case-credit/Case1.webp" alt="Новая анкета, экран скоринга и экран одобренного кредита" /></div>
      </section>

      <section className="caseSection">
        <h2>UX-исследование</h2>
        <p>Чтобы выявить проблемы текущей анкеты провёл глубинное интервью с 7 респондентами. По количественным метрикам было не определить, где настоящие боли и барьеры в UX</p>
        <ImageCard className="researchCard">
          <h3>Скриншоты подготовки исследования</h3>
          <p>План, гипотезы, часть скрипта</p>
          <img loading="lazy" decoding="async" src="/case-credit/Podgotovka_issled.webp" alt="План, гипотезы и часть скрипта исследования" />
        </ImageCard>

        <div className="prototypeBlock">
          <h2>Вайбкод-прототип</h2>
          <p>На бою кредитной анкеты тест проводить не получится: у пользователей будет портиться кредитная история. Сделал кликабельный прототип в Figma Make, чтобы у респондентов опыт использования был максимально близок к реальному продукту</p>
          <ImageCard className="prototypeCard">
            <img loading="lazy" decoding="async" src="/case-credit/Vibe_for_case.webp" alt="Кликабельный вайбкод-прототип кредитной анкеты в Figma Make" />
          </ImageCard>
        </div>

        <h2 className="researchResultsTitle">Результаты исследования</h2>
        <p>Больше всего вызывал затруднения последний шаг,. На исследовании оказалось, что весь экран, начиная с шапки и заканчивая механикой карточек не очевиден. Пользователи его воспринимают не как шаг анкеты, а как <strong>каталог продуктов</strong></p>
        <ImageCard>
          <h3>Главные проблемы текущей анкеты</h3>
          <p>Которые выявил на исследовании</p>
          <img loading="lazy" decoding="async" src="/case-credit/Results_issled.webp" alt="Основные проблемы текущей кредитной анкеты" />
        </ImageCard>
      </section>

      <section className="caseSection solutionSection">
        <h2>Решение</h2>
        <div className="constraintCard">
          <svg className="constraintBorder" aria-hidden="true"><rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="27" fill="none" stroke="#CBCBCB" strokeWidth="2" strokeDasharray="12 12" strokeDashoffset="6" strokeLinecap="round" vectorEffect="non-scaling-stroke" /></svg>
          <h3>Ограничение</h3>
          <p>Данные, которые клиент оставляет банку, должны остаться такими же, как в текущей анкете. Если безвозвратно удалять поля, то увеличивается риск-профиль клиента и ломается скоринг-модель. Поэтому часть обратной связи, полученной на UX-исследовании, пришлось оставить на будущее</p>
        </div>
        <div className="solutionStack">
          {blocks.map(block => <ImageCard key={block.image}>
            <h3>{block.title}</h3>
            <img loading="lazy" decoding="async" src={`/case-credit/${block.image}`} alt={block.alt} />
          </ImageCard>)}
          <ImageCard>
            <h3>Одобренный кредит</h3>
            <p>На исследовании пользователи отмечали, что этот шаг считывается, как каталог. В новом дизайне переходим в этот формат</p>
            <img loading="lazy" decoding="async" src="/case-credit/Odobrenny_credit.webp" alt="Сравнение экрана одобренного кредита до и после редизайна" />
          </ImageCard>
        </div>
      </section>

      <section className="caseResult" id="result">
        <h2>Результат</h2>
        <p>Тестировали через A/B-тест старую анкету против новой. Смотрели всю воронку, но главное было поднять общую конверсию в выдачу</p>
        <ResultBadge value="+11 п.п.">Общая конверсия<br />в выдачу кредита</ResultBadge>
      </section>
    </main>
    <NextCase href="/mts-music" image="Case3.webp" title="Приложение МТС Музыки для автомобиля" />
    <footer className="caseFooter caseShell"><span>© Егор Трещев 2026</span><a href="https://t.me/yegortreschev" target="_blank" rel="noreferrer">Написать в телеграм</a></footer>
  </div>;
}
