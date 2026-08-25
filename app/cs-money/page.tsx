import NextCase from "../NextCase";
import ResultBadge from "../ResultBadge";

const designBlocks = [
  { title: "Обмен", images: ["Trade.webp", "Trade2.webp"], alt: "Редизайн раздела обмена Cs.Money" },
  { title: "Магазин", images: ["Store.webp"], alt: "Редизайн магазина Cs.Money" },
  { title: "Продажа", images: ["Sell.webp"], alt: "Редизайн раздела продажи Cs.Money" },
  { title: "Карточка предмета", images: ["Card1.webp", "Card2.webp"], alt: "Редизайн карточки предмета Cs.Money" },
  { title: "Личный кабинет", description: <>В предыдущей версии не было личного кабинета. Только возможность изменить ник и номер телефона</>, images: ["Account.webp"], alt: "Новый личный кабинет Cs.Money" },
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

function DashedInfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="constraintCard mtsInfoCard">
    <svg className="constraintBorder" aria-hidden="true"><rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="27" fill="none" stroke="#CBCBCB" strokeWidth="2" strokeDasharray="12 12" strokeDashoffset="6" strokeLinecap="round" vectorEffect="non-scaling-stroke" /></svg>
    <h3>{title}</h3>
    {children}
  </div>;
}

export default function CsMoneyPage() {
  return <div className="creditCase csMoneyCase">
    <Header />
    <main className="caseShell">
      <section className="caseIntro">
        <h1>Редизайн сайта Cs.Money</h1>
        <div className="caseMeta">
          <div>
            <span>Команда</span>
            <p>2 Product owner-а, 2 системных аналитика, бизнес-аналитик, 6 frontend разработчиков, 3 backend разработчика, 3 QA-инженера</p>
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
          <p>Текущая версия сайта проигрывает конкурентам, не приносит достаточно продаж. Также она устарела технически: делалась без дизайн-системы, сторибука, что не позволяет быстро её обновлять</p>
        </div>
        <div>
          <h2>Задача</h2>
          <p>Поднять количество обменов и покупок на сайте. Обновить сценарии и визуал, создать дизайн-систему</p>
        </div>
        <div>
          <h2>Результат</h2>
          <p>Командой из 3 дизайнеров с нуля сделали редизайн, подняли количество обменов на 15 п.п., покупок на 20 п.п. Создали дизайн-систему и сделали сайт масштабируемым технически</p>
        </div>
      </section>

      <section className="caseHeroVisual" aria-label="Редизайн сайта Cs.Money">
        <div className="taskVisual"><img decoding="async" fetchPriority="high" src="/case-cs-money/Thumb.webp" alt="Обновлённый интерфейс обмена Cs.Money" /></div>
      </section>

      <section className="caseSection">
        <h2>Исследование</h2>
        <p>Визуально сайт должен оставаться в игровой тематике. Геймеры должны находиться в своей среде, но при этом UX сервиса должен быть понятен, ведь на нём есть конкретная цель: совершить обмен или покупку, сравнить цены, выбрать самое выгодное предложение</p>
        <ImageCard><h3>Конкуренты, игры, схожие сервисы</h3><img loading="lazy" decoding="async" src="/case-cs-money/research.webp" alt="Анализ конкурентов, игр и схожих сервисов" /></ImageCard>
        <ImageCard className="csResearchCard">
          <h3>Элементы дизайна конкурентов и схожих сервисов</h3>
          <div className="csResearchImages">
            <img loading="lazy" decoding="async" src="/case-cs-money/Research2.webp" alt="Анализ цвета, типографики и изображений" />
            <img loading="lazy" decoding="async" src="/case-cs-money/Research3.webp" alt="Анализ иконок, интерфейсов и лендингов" />
          </div>
        </ImageCard>
      </section>

      <section className="caseSection">
        <h2>Архитектура сайта</h2>
        <p>После исследования и сбора бизнес-требований, построили командой дизайна из 3 человек архитектуру нового сайта</p>
        <ImageCard className="csImageOnly"><img loading="lazy" decoding="async" src="/case-cs-money/Arch.webp" alt="Архитектура нового сайта Cs.Money" /></ImageCard>
      </section>

      <section className="caseSection solutionSection">
        <h2>Дизайн</h2>
        <DashedInfoCard title="Детали работы">
          <ul>
            <li>Интерфейс должен оставаться в геймерском стиле. Это соответствует бренду, маркетингу и привлекает новых клиентов</li>
            <li>UX должен полностью поменяться. Первый приоритет — удобство обмена, продажи, выбора предмета, сравнения цен. Некий e-com в игровой индустрии</li>
            <li>После концепции нужно создать дизайн-систему, чтобы сервис был масштабируемым</li>
          </ul>
        </DashedInfoCard>
        <div className="solutionStack csDesignStack">
          {designBlocks.map(block => <ImageCard key={block.title}>
            <h3>{block.title}</h3>
            {"description" in block && <p>{block.description}</p>}
            <div className="csDesignImages">{block.images.map(image => <img loading="lazy" decoding="async" key={image} src={`/case-cs-money/${image}`} alt={block.alt} />)}</div>
          </ImageCard>)}
        </div>
      </section>

      <section className="caseSection">
        <h2>Дизайн-система</h2>
        <p>С нуля собрали систему компонентов и виджетов, правила их использования. С фронтенд-разработчиками на бою организовали это в сторибук</p>
        <ImageCard className="csDesignSystemCard"><img decoding="async" src="/case-cs-money/DSblock_pic.webp" alt="Компоненты и правила дизайн-системы Cs.Money" /></ImageCard>
      </section>

      <section className="caseResult">
        <h2>Результат</h2>
        <p>За полгода маленькой командой полностью переосмыслили сервис, сделали новый дизайн, согласовали его, упаковали в дизайн-систему и подняли показатели</p>
        <div className="csResults">
          <ResultBadge value="+15 п.п.">Количество<br />обменов</ResultBadge>
          <ResultBadge value="+20 п.п.">Количество<br />покупок</ResultBadge>
        </div>
      </section>
    </main>
    <NextCase href="/form-design-system" image="Case4.webp" title="Лидирование дизайн-системы анкет сайта Альфа-Банка" />
    <footer className="caseFooter caseShell"><span>© Егор Трещев 2026</span><a href="https://t.me/yegortreschev" target="_blank" rel="noreferrer">Написать в телеграм</a></footer>
  </div>;
}
