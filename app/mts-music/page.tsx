import NextCase from "../NextCase";
import ResultBadge from "../ResultBadge";

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

export default function MtsMusicPage() {
  return <div className="creditCase mtsCase">
    <Header />
    <main className="caseShell">
      <section className="caseIntro">
        <h1>Приложение МТС Музыки<br />{" "}для автомобиля</h1>
        <div className="caseMeta">
          <div>
            <span>Команда</span>
            <p>Product owner, системный аналитик, 5 frontend разработчиков, 3 backend разработчика, 3 QA-инженера</p>
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
          <p>Нужно в сжатые сроки запустить приложение музыки для авто, так как партнёры в автосалонах через полгода начнут продвижение</p>
        </div>
        <div>
          <h2>Задача</h2>
          <p>Сделать MVP-версию основных сценариев приложения, чтобы запуститься, стартовать первые продажи и сбор метрик</p>
        </div>
        <div>
          <h2>Результат</h2>
          <p>За 2 месяца сделал дизайн от концепции до подготовки к разработке. Проект запустили в срок</p>
        </div>
      </section>

      <section className="caseHeroVisual" aria-label="Главный экран МТС Музыки для автомобиля">
        <div className="taskVisual"><img decoding="async" fetchPriority="high" src="/case-mts/Thumb.webp" alt="Плеер МТС Музыки для автомобиля" /></div>
      </section>

      <section className="caseSection">
        <h2>Исследование конкурентов<br />и поиск референсов</h2>
        <p>Проанализировал конкурентов в музыкальном сегменте и механики автомобильных приложений</p>
        <ImageCard className="mtsImageOnly"><img loading="lazy" decoding="async" src="/case-mts/Issled.webp" alt="Исследование музыкальных сервисов и автомобильных приложений" /></ImageCard>
      </section>

      <section className="caseSection solutionSection">
        <h2>Вайрфрейминг</h2>
        <DashedInfoCard title="Детали работы">
          <ul>
            <li>Для автомобильных интерфейсов важны крупные контролы, короткие сценарии, ограниченная глубина навигации, возможность управления воспроизведением с руля</li>
            <li>Запуск приложения планировался на определённых экранах нескольких моделей партнеров. Размеры планшетов мы знали заранее, что упростило работу — не надо адаптировать под многочисленные автомобильные мониторы</li>
            <li>Чтобы согласовать скелет дизайна с клиентом, начал с вайфреймов и обсуждения основного UX</li>
          </ul>
        </DashedInfoCard>
        <div className="solutionStack mtsWireStack">{wireframes.map(item => <ImageCard key={item.image}><h3>{item.title}</h3><img loading="lazy" decoding="async" src={`/case-mts/${item.image}`} alt={`Вайрфреймы: ${item.title.toLowerCase()}`} /></ImageCard>)}</div>
      </section>

      <section className="caseSection solutionSection">
        <h2>Дизайн</h2>
        <DashedInfoCard title="Ограничения">
          <ul>
            <li>Для ускорения работы нужно было адаптировать уже готовые на разработке элементы онлайн-кинотеатра для автомобилей к музыке</li>
            <li>Сценарии должны быть максимально простые и для пользователя, и для разработки</li>
            <li>После отрисовки экрана проходила обязательная проверка на соответствие автомобильному контексту</li>
          </ul>
        </DashedInfoCard>
        <div className="solutionStack mtsDesignStack">{designs.map(item => <ImageCard key={item.title}><h3>{item.title}</h3>{"description" in item && <p>{item.description}</p>}<div className="mtsDesignImages">{item.images.map(image => <img loading="lazy" decoding="async" key={image} src={`/case-mts/${image}`} alt={`${item.title} — макет и комментарии`} />)}</div></ImageCard>)}</div>
      </section>

      <section className="caseSection">
        <h2>Состояния и подготовка к разработке</h2>
        <p>Подготовил состояния, UI-kit и интерактивный прототип для разработки</p>
        <ImageCard><h3>Состояния и документация</h3><img loading="lazy" decoding="async" src="/case-mts/All.webp" alt="Состояния и документация приложения" /></ImageCard>
      </section>

      <section className="caseResult">
        <h2>Результат</h2>
        <div className="mtsResults"><ResultBadge value="2 мес.">На весь дизайн-процесс</ResultBadge><ResultBadge value="6 мес.">От старта дизайна<br />до первых тестов MVP</ResultBadge></div>
      </section>
    </main>
    <NextCase href="/cs-money" image="cs-money-thumb.webp" title="Редизайн сайта Cs.Money" />
    <footer className="caseFooter caseShell"><span>© Егор Трещев 2026</span><a href="https://t.me/yegortreschev" target="_blank" rel="noreferrer">Написать в телеграм</a></footer>
  </div>;
}
