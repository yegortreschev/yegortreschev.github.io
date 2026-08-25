import NextCase from "../NextCase";
import ResultBadge from "../ResultBadge";

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

function DashedInfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="constraintCard mtsInfoCard">
    <svg className="constraintBorder" aria-hidden="true"><rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="27" fill="none" stroke="#CBCBCB" strokeWidth="2" strokeDasharray="12 12" strokeDashoffset="6" strokeLinecap="round" vectorEffect="non-scaling-stroke" /></svg>
    <h3>{title}</h3>
    {children}
  </div>;
}

export default function FormDesignSystemPage() {
  return <div className="creditCase designSystemCase">
    <Header />
    <main className="caseShell">
      <section className="caseIntro">
        <h1>Лидирование дизайн-системы<br />{" "}анкет сайта Альфа-Банка</h1>
        <div className="caseMeta">
          <div>
            <span>Команда</span>
            <p>3 продуктовых дизайнера</p>
          </div>
          <div>
            <span>Моя роль</span>
            <p>Ведущий дизайнер, ответственный за раздел анкет</p>
          </div>
        </div>
      </section>

      <section className="caseOverview" aria-label="О проекте">
        <div>
          <h2>Проблема</h2>
          <p>Анкеты на сайте Альфа-Банка разрослись, каждая форма имеет уникальный дизайн, что портит UX</p>
        </div>
        <div>
          <h2>Задача</h2>
          <p>Нужно организовать работу дизайн-команды для создания единой дизайн-системы анкет</p>
        </div>
        <div>
          <h2>Результат</h2>
          <p>За 6 месяцев создали систему компонентов, виджетов и гайдов, составили бэклог для фронтовых доработок. За 10 месяцев донесли все изменения до боя</p>
        </div>
      </section>

      <section className="caseHeroVisual" aria-label="Работа над дизайн-системой анкет">
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
        <DashedInfoCard title="Детали">
          <ul>
            <li>Нужно было систематизировать исследование в jira-задачи. Понять, какие элементы можно сразу добавлять в систему, какие нуждаются в дополнительном ресерче от дизайнера (ставил задачу на ресерч), какие хорошо бы удалить, а какие переиспользовать из основной либы</li>
            <li>В задаче оставлял дизайнерам свободу решений. Многие вопросы консистентности нуждаются в глубокой проработке, и загонять дизайнера в жесткие рамки только помешает</li>
            <li>Следил, чтобы описание задач согласовывалось с гайдами анкет, за которые отвечал другой дизайнер</li>
          </ul>
        </DashedInfoCard>
        <ImageCard className="dsImageOnly dsBacklog"><img loading="lazy" decoding="async" src="/case-design-system/Backlog.webp" alt="Бэклог задач дизайн-системы анкет" /></ImageCard>
      </section>

      <section className="caseSection">
        <h2>Создание библиотеки</h2>
        <DashedInfoCard title="Ход работы">
          <ul>
            <li>Библиотеку создал я сам, перенёс туда универсальные компоненты и виджеты, которые уже были готовы и использовались на сайте</li>
            <li>Поставил задачи на дизайнеров по созданию новых или доработке существующих элементов дизайн-системы. Шаблон описания и принципы сборки мастеров использовали из общей системы, не создавали своё</li>
            <li>Контролировал ход работы в бранчах, помогал, отвечал на вопросы, проводил ревью дизайнерских веток</li>
            <li>Согласовывал работу с дизайн-лидом, который ставил свой финальный ок</li>
            <li>Если нужна была задача на фронт, контролировал постановку от дизайнера и линковку к нужным эпикам. После реализации на фронте мерджил ветки в мастер</li>
          </ul>
        </DashedInfoCard>
        <ImageCard className="dsBranches"><h3>Ветки</h3><img loading="lazy" decoding="async" src="/case-design-system/Branches.webp" alt="Ветки компонентов дизайн-системы" /></ImageCard>
        <ImageCard><h3>Пример описания виджета библиотеки анкет</h3><img loading="lazy" decoding="async" src="/case-design-system/Description.webp" alt="Документация виджета библиотеки анкет" /></ImageCard>
      </section>

      <section className="caseSection">
        <h2>Гайды</h2>
        <p>Гайды дизайн-системы анкет лидил другой дизайнер. Я помогал в их ревью, проверял соответствие с библиотекой виджетов и компонентов</p>
        <ImageCard className="dsStructure"><h3>Структура гайдов анкет</h3><img loading="lazy" decoding="async" src="/case-design-system/Structure.webp" alt="Структура гайдов дизайн-системы анкет" /></ImageCard>
        <ImageCard><h3>Пример описания гайдов анкет</h3><img loading="lazy" decoding="async" src="/case-design-system/Guides.webp" alt="Пример гайда по системе отступов в анкетах" /></ImageCard>
      </section>

      <section className="caseSection dsFrontend">
        <h2>Задачи на фронтенд</h2>
        <p>После каждой дизайнерской задачи создавалась задача на фронт для внесения изменений в виджет или компонент. Задачи линковали к фронтовым эпикам, выставляли их приоритет</p>
      </section>

      <section className="caseResult">
        <h2>Результат</h2>
        <div className="dsResults">
          <ResultBadge value="6 мес.">Создание<br />дизайн-системы</ResultBadge>
          <ResultBadge value="4 мес.">Доработка виджетов на<br />фронте под новую ДС</ResultBadge>
        </div>
      </section>
    </main>
    <NextCase href="/credit-redesign" image="Case1.webp" title="Анкета на кредит в мобильном приложении Альфа-Банка" />
    <footer className="caseFooter caseShell"><span>© Егор Трещев 2026</span><a href="https://t.me/yegortreschev" target="_blank" rel="noreferrer">Написать в телеграм</a></footer>
  </div>;
}
