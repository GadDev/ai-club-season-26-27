import { SiteFooter, SiteHeader } from "./SiteChrome";
import { catalogProgrammes } from "./content/catalog-programmes";
import "./ProgrammesPage.css";

export default function ProgrammesPage() {
  return (
    <>
      <a className="skip-link" href="#programmes-content">
        Skip to programmes
      </a>
      <SiteHeader page="programmes" />
      <main id="programmes-content" className="programmes-page" tabIndex={-1}>
        <div className="programmes-breadcrumb">
          <a href="?#season">← Back to season</a>
          <span>REFERENCE CURRICULA / ILLUSTRATIVE</span>
        </div>

        <section
          className="programmes-intro"
          aria-labelledby="programmes-title"
        >
          <p className="eyebrow">NINE WAYS TO RUN THE SEASON</p>
          <h1 id="programmes-title">
            Reference <span>Programmes</span>
          </h1>
          <p>
            Before the club's own season was written, nine full-length reference
            curricula were drafted to stress-test the idea space — each a
            complete, self-consistent nine-month programme with its own identity
            and monthly arc. They are illustrative source material, not a
            shortlist and not the confirmed programme. The{" "}
            <a href="?page=catalog">Topic Catalog</a> shows which of their 693
            topics belong to which programme.
          </p>
        </section>

        <div className="programmes-list">
          {catalogProgrammes.map((programme) => (
            <section
              className="programme"
              key={programme.code}
              aria-labelledby={`programme-${programme.code.toLowerCase()}-title`}
            >
              <header className="programme-heading">
                <span className="programme-code" aria-hidden="true">
                  {programme.code}
                </span>
                <div>
                  <h2 id={`programme-${programme.code.toLowerCase()}-title`}>
                    {programme.name}
                  </h2>
                  <p className="programme-tagline">{programme.tagline}</p>
                </div>
              </header>
              <p className="programme-description">{programme.description}</p>

              <div className="programme-narrative">
                <h3>Season narrative</h3>
                <p className="programme-narrative-note">
                  Each month, all three tracks examine the same topic at
                  increasing depth — Foundation builds the mental model,
                  Practitioner applies it, Advanced treats it as a systems
                  problem — so the season reads as one story, not three parallel
                  ones.
                </p>
                <ol>
                  {programme.narrative.map((month, index) => (
                    <li className="programme-month" key={month.month}>
                      <span
                        className="programme-month-index"
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="programme-month-heading">
                          <span className="programme-month-name">
                            {month.month}
                          </span>
                          <span className="programme-month-hook">
                            {month.hook}
                          </span>
                        </p>
                        <p className="programme-month-topic">{month.topic}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
