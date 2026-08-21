import NextCase from "../NextCase";

const wireframes = [
  { title: "Авторизация", image: "Wire1.webp" },
  { title: "Плеер", image: "Wire2.webp" },
  { title: "Подписка", image: "Wire3.webp" },
] as const;

const designs = [
  { title: "Главная", images: ["Main1.webp", "Main2.webp", "Main3.webp"] },
  { title: "Плеер", images: ["Pleer1.webp", "Pleer2.webp"] },
  { title: "Предпочтения", description: "В первый заход спрашиваем у пользователя о его любимой музыке", images: ["Predp1.webp", "Predp2.webp"] },
  { title: "Авторизация", images: ["Auth1.webp", "Auth2.webp"] },
  { title: "Подписка", images: ["Subs.webp", "Subs2.webp"] },
  { title: "Поиск", images: ["Search.webp"] },
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

export default function MtsMusicPage() {
  return <div className="creditCase mtsCase">
    <Header />
    <main className="caseShell">
      <section className="caseIntro">
        <h1>Приложение МТС Музыки<br />для автомобиля</h1>
        <p className="caseRole">Моя роль: продуктовый дизайнер</p>
      </section>

      <section className="caseSection taskSection">
        <h2>Задача</h2>
        <p>Сделать MVP-версию основных сценариев приложения, чтобы запуститься<br />и начать тестировать</p>
        <div className="taskVisual"><img decoding="async" fetchPriority="high" src="/case-mts/Thumb.webp" alt="Плеер МТС Музыки для автомобиля" /></div>
      </section>

      <section className="caseSection">
        <h2>Исследование конкурентов<br />и поиск референсов</h2>
        <p>Проанализировал конкурентов в музыкальном сегменте и механики<br />автомобильных приложений</p>
        <ImageCard className="mtsImageOnly"><img loading="lazy" decoding="async" src="/case-mts/Issled.webp" alt="Исследование музыкальных сервисов и автомобильных приложений" /></ImageCard>
      </section>

      <section className="caseSection solutionSection">
        <h2>Вайрфрейминг</h2>
        <p>Сделал вайрфреймы основных экранов и согласовал<br />их со стейкхолдерами продукта</p>
        <div className="solutionStack mtsWireStack">{wireframes.map(item => <ImageCard key={item.image}><h3>{item.title}</h3><img loading="lazy" decoding="async" src={`/case-mts/${item.image}`} alt={`Вайрфреймы: ${item.title.toLowerCase()}`} /></ImageCard>)}</div>
      </section>

      <section className="caseSection solutionSection">
        <h2>Дизайн</h2>
        <div className="solutionStack mtsDesignStack">{designs.map(item => <ImageCard key={item.title}><h3>{item.title}</h3>{"description" in item && <p>{item.description}</p>}<div className="mtsDesignImages">{item.images.map(image => <img loading="lazy" decoding="async" key={image} src={`/case-mts/${image}`} alt={`${item.title} — макет и комментарии`} />)}</div></ImageCard>)}</div>
      </section>

      <section className="caseSection">
        <h2>Состояния и подготовка к разработке</h2>
        <p>Подготовил состояния, UI-kit и интерактивный прототип<br />для разработки</p>
        <ImageCard><h3>Состояния и документация</h3><img loading="lazy" decoding="async" src="/case-mts/All.webp" alt="Состояния и документация приложения" /></ImageCard>
      </section>

      <section className="caseResult">
        <h2>Результат</h2>
        <div className="mtsResults"><div className="resultBadge"><strong>2 мес.</strong><span>На весь дизайн-процесс</span></div><div className="resultBadge"><strong>6 мес.</strong><span>От старта дизайна<br />до первых тестов MVP</span></div></div>
      </section>
    </main>
    <NextCase href="/cs-money" image="cs-money-thumb.webp" title="Редизайн сайта Cs.Money" />
    <footer className="caseFooter caseShell"><span>© Егор Трещев 2026</span><a href="https://t.me/yegortreschev" target="_blank" rel="noreferrer">Написать в телеграм</a></footer>
  </div>;
}
