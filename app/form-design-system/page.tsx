import NextCase from "../NextCase";

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

export default function FormDesignSystemPage() {
  return <div className="creditCase designSystemCase">
    <Header />
    <main className="caseShell">
      <section className="caseIntro">
        <h1>Лидирование дизайн-системы<br />анкет сайта Альфа-Банка</h1>
        <p className="caseRole">Моя роль: ответственный за новый раздел дизайн-системы</p>
      </section>

      <section className="caseSection taskSection">
        <h2>Задача</h2>
        <p>Анкеты на сайте Альфа-Банка разрослись, каждая форма имеет уникальный дизайн, что портит UX.<br />Нужно организовать работу дизайн-команды для создания единой дизайн-системы анкет</p>
        <div className="taskVisual"><img decoding="async" fetchPriority="high" src="/case-design-system/Thumb.webp" alt="Работа над задачами, ветками и документацией дизайн-системы" /></div>
      </section>

      <section className="caseSection">
        <h2>Исследование</h2>
        <p>Собрал все анкеты на сайте, изучил, насколько они отличаются</p>
        <ImageCard>
          <h3>Конкуренты, игры, схожие сервисы</h3>
          <img loading="lazy" decoding="async" src="/case-design-system/Reserch.webp" alt="Исследование анкет, конкурентов, игр и схожих сервисов" />
        </ImageCard>
      </section>

      <section className="caseSection">
        <h2>Наполнение бэклога</h2>
        <p>Вместе с ответственным за гайды дизайн-системы анкет сделали бэклог задач на создание<br />компонентов, виджетов и гайдов.</p>
        <ImageCard className="dsImageOnly dsBacklog"><img loading="lazy" decoding="async" src="/case-design-system/Backlog.webp" alt="Бэклог задач дизайн-системы анкет" /></ImageCard>
      </section>

      <section className="caseSection">
        <h2>Ревью созданных компонентов и виджетов,<br />работа с ветками</h2>
        <p>Вёл задачу от постановки на дизайнера до контроля разработки. Проводил ревью дизайнерской ветки,<br />объединял с main-веткой, следил за обновлениями из общебанковской дизайн-системы.</p>
        <ImageCard className="dsBranches"><h3>Ветки</h3><img loading="lazy" decoding="async" src="/case-design-system/Branches.webp" alt="Ветки компонентов дизайн-системы" /></ImageCard>
        <ImageCard><h3>Пример описания виджета библиотеки анкет</h3><img loading="lazy" decoding="async" src="/case-design-system/Description.webp" alt="Документация виджета библиотеки анкет" /></ImageCard>
      </section>

      <section className="caseSection">
        <h2>Гайды</h2>
        <p>Гайды дизайн-системы анкет лидил другой дизайнер. Я помогал в их ревью, проверял соответствие<br />с библиотекой виджетов и компонентов</p>
        <ImageCard className="dsStructure"><h3>Структура гайдов анкет</h3><img loading="lazy" decoding="async" src="/case-design-system/Structure.webp" alt="Структура гайдов дизайн-системы анкет" /></ImageCard>
        <ImageCard><h3>Пример описания гайдов анкет</h3><img loading="lazy" decoding="async" src="/case-design-system/Guides.webp" alt="Пример гайда по системе отступов в анкетах" /></ImageCard>
      </section>

      <section className="caseSection dsFrontend">
        <h2>Задачи на фронтенд</h2>
        <p>После каждой дизайнерской задачи создавалась задача на фронт для внесения изменений в виджет<br />или компонент. Задачи линковали к фронтовым эпикам, выставляли их приоритет</p>
      </section>

      <section className="caseResult">
        <h2>Результат</h2>
        <div className="dsResults">
          <div className="resultBadge"><strong>6 мес.</strong><span>Создание<br />дизайн-системы</span></div>
          <div className="resultBadge"><strong>4 мес.</strong><span>Доработка виджетов на<br />фронте под новую ДС</span></div>
        </div>
      </section>
    </main>
    <NextCase href="/credit-redesign" image="Case1.webp" title="Анкета на кредит в мобильном приложении Альфа-Банка" />
    <footer className="caseFooter caseShell"><span>© Егор Трещев 2026</span><a href="https://t.me/yegortreschev" target="_blank" rel="noreferrer">Написать в телеграм</a></footer>
  </div>;
}
