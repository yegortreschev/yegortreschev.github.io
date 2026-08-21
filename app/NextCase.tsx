type NextCaseProps = {
  href: string;
  image: string;
  title: string;
};

export default function NextCase({ href, image, title }: NextCaseProps) {
  return <section className="nextCase caseShell">
    <h2>Следующий кейс</h2>
    <a href={href}>
      <img className="nextCaseImage" src={`/portfolio/${image}`} alt="" loading="lazy" decoding="async" />
      <div className="nextCaseCopy">
        <h3>{title}</h3>
        <img src="/chevron-right-medium.svg" alt="" aria-hidden="true" />
      </div>
    </a>
  </section>;
}
