import NextCase from "../NextCase";

const designBlocks = [
  { title: "Обмен", images: ["Trade.webp", "Trade2.webp"], alt: "Редизайн раздела обмена Cs.Money" },
  { title: "Магазин", images: ["Store.webp"], alt: "Редизайн магазина Cs.Money" },
  { title: "Продажа", images: ["Sell.webp"], alt: "Редизайн раздела продажи Cs.Money" },
  { title: "Карточка предмета", images: ["Card1.webp", "Card2.webp"], alt: "Редизайн карточки предмета Cs.Money" },
  { title: "Личный кабинет", description: <>В предыдущей версии не было личного кабинета.<br />Только возможность изменить ник и номер телефона</>, images: ["Account.webp"], alt: "Новый личный кабинет Cs.Money" },
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

export default function CsMoneyPage() {
  return <div className="creditCase csMoneyCase">
    <Header />
    <main className="caseShell">
      <section className="caseIntro">
        <h1>Редизайн сайта Cs.Money</h1>
        <p className="caseRole">Моя роль: продуктовый дизайнер</p>
      </section>

      <section className="caseSection taskSection">
        <h2>Задача</h2>
        <p>Текущая версия сайта устарела, нужно обновить сценарии и визуал.<br />Поднять метрики: <strong>количество обменов, количество покупок</strong></p>
        <div className="taskVisual"><img decoding="async" fetchPriority="high" src="/case-cs-money/Thumb.webp" alt="Обновлённый интерфейс обмена Cs.Money" /></div>
      </section>

      <section className="caseSection">
        <h2>Исследование</h2>
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
        <p>После исследования и сбора бизнес-требований, построили командой дизайна<br />из 3 человек архитектуру нового сайта</p>
        <ImageCard className="csImageOnly"><img loading="lazy" decoding="async" src="/case-cs-money/Arch.webp" alt="Архитектура нового сайта Cs.Money" /></ImageCard>
      </section>

      <section className="caseSection solutionSection">
        <h2>Дизайн</h2>
        <div className="solutionStack csDesignStack">
          {designBlocks.map(block => <ImageCard key={block.title}>
            <h3>{block.title}</h3>
            {"description" in block && <p>{block.description}</p>}
            <div className="csDesignImages">{block.images.map(image => <img loading="lazy" decoding="async" key={image} src={`/case-cs-money/${image}`} alt={block.alt} />)}</div>
          </ImageCard>)}
        </div>
      </section>

      <section className="caseResult">
        <h2>Результат</h2>
        <div className="csResults">
          <div className="resultBadge"><strong>+15 п.п.</strong><span>Количество<br />обменов</span></div>
          <div className="resultBadge"><strong>+20 п.п.</strong><span>Количество<br />покупок</span></div>
        </div>
      </section>
    </main>
    <NextCase href="/form-design-system" image="Case4.webp" title="Лидирование дизайн-системы анкет сайта Альфа-Банка" />
    <footer className="caseFooter caseShell"><span>© Егор Трещев 2026</span><a href="https://t.me/yegortreschev" target="_blank" rel="noreferrer">Написать в телеграм</a></footer>
  </div>;
}
