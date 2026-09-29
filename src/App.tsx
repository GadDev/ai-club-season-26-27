import { useEffect, useState } from "react";
import data from "./content/generated.json";
import {
  tracks,
  months,
  monthLabel,
  sessionMonth,
  nextEvent,
  dateLabel,
  type Session,
} from "./content/model";
const sessions = data.sessions as Session[];
function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M4 12h15m-6-6 6 6-6 6" />
    </svg>
  );
}
function SessionCard({ session: s }: { session: Session }) {
  return (
    <article
      id={s.id}
      className={`session-card ${s.status}`}
      aria-labelledby={`${s.id}-title`}
    >
      <div className="card-top">
        <span className="meta">{s.format.join(" + ")}</span>
        <span className="status">
          {s.status === "proposed" ? "Proposed" : s.status}
        </span>
      </div>
      <h4 id={`${s.id}-title`}>{s.title}</h4>
      <p>{s.summary}</p>
      <div className="card-meta">
        {s.status === "proposed" ? (
          `Proposed for ${monthLabel(s.targetMonth)}`
        ) : "startsAt" in s && s.startsAt ? (
          <time dateTime={s.startsAt}>{dateLabel(s.startsAt)}</time>
        ) : (
          `Target: ${monthLabel(sessionMonth(s))}`
        )}
      </div>
      {s.location && <p className="card-meta">Location: {s.location}</p>}
      {s.status === "cancelled" && s.reason && <p>{s.reason}</p>}
    </article>
  );
}
function Matrix({ group }: { group: string[] }) {
  return (
    <table className="season-matrix">
      <caption className="sr-only">
        Session proposals and events by track, {monthLabel(group[0])} to{" "}
        {monthLabel(group[group.length - 1])}
      </caption>
      <thead>
        <tr>
          <th scope="col">
            <span className="meta">Three tracks</span>
          </th>
          {group.map((m) => (
            <th scope="col" key={m}>
              <a href={`#month-${m}`}>{monthLabel(m, true)}</a>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tracks.map((t) => (
          <tr key={t.id}>
            <th scope="row" className={`track-label ${t.id}`}>
              {t.name}
            </th>
            {group.map((m) => {
              const list = sessions.filter(
                (s) => sessionMonth(s) === m && s.track === t.id,
              );
              return (
                <td key={m}>
                  {list.length ? (
                    <a
                      href={`#${m}-${t.id}`}
                      aria-label={`${monthLabel(m)}, ${t.name}, ${list.length} sessions`}
                    >
                      <span
                        className={`count-mark ${t.id}`}
                        aria-hidden="true"
                      />
                      {list.length}
                      <span className="sr-only"> sessions</span>
                    </a>
                  ) : (
                    <span aria-label="No session planned">—</span>
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export function App() {
  const [now, setNow] = useState(Date.now);
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 30_000);
    return () => clearInterval(id);
  }, []);
  const next = nextEvent(sessions, now);
  return (
    <>
      <a className="skip-link" href="#season">
        Skip to the season
      </a>
      <header className="masthead">
        <div className="shell">
          <nav className="top-nav" aria-label="Main">
            <span className="meta">SFEIR / LUXEMBOURG</span>
            <div>
              <a href="#season">
                Season <Arrow />
              </a>
              <a href="#about">About</a>
            </div>
          </nav>
          <div className="hero">
            <div>
              <p className="eyebrow">Ideas. Practice. Deeper understanding.</p>
              <h1>
                AI CLUB<span className="sr-only"> — Season 2026–2027</span>
              </h1>
              <p className="hero-note">
                Same curiosity.
                <br />A whole season of new perspectives.
              </p>
            </div>
            <div className="season-number" aria-hidden="true">
              <span>26</span>
              <span>27</span>
            </div>
          </div>
          <div className="hero-footer">
            <span>OCTOBER 2026 — JUNE 2027</span>
            <span>
              THE SIGNAL INDEX <Arrow />
            </span>
          </div>
        </div>
      </header>
      <main id="season" className="shell" tabIndex={-1}>
        <section className="overview" aria-labelledby="overview-title">
          <div className="section-intro">
            <div>
              <p className="eyebrow">01 / THE PROGRAMME</p>
              <h2 id="overview-title">The season at a glance.</h2>
            </div>
            <p>
              Three parallel tracks.
              <br />
              Find your entry point.
            </p>
          </div>
          {data.season.editorialStatus === "draft" && (
            <p className="draft-note">
              <strong>Programme in progress.</strong> These are proposed topics
              and months. Dates are not confirmed yet.
            </p>
          )}
          <div className="wide-index">
            <Matrix group={months} />
          </div>
          <div className="tablet-index">
            {[0, 3, 6].map((n) => (
              <Matrix key={n} group={months.slice(n, n + 3)} />
            ))}
          </div>
          <nav className="mobile-index" aria-label="Jump to month">
            {months.map((m) => (
              <a key={m} href={`#month-${m}`}>
                <span>{monthLabel(m, true).split(" ")[0]}</span>
                <small>{m.slice(0, 4)}</small>
                <Arrow />
              </a>
            ))}
          </nav>
        </section>
        <aside className="next-event" aria-labelledby="next-title">
          <div>
            <p className="eyebrow">NEXT CONFIRMED EVENT</p>
            <h2 id="next-title">
              {next ? next.title : "No date confirmed yet."}
            </h2>
            <p>
              {next
                ? dateLabel(next.startsAt)
                : "Explore the proposals below. We’ll add dates as the programme takes shape."}
            </p>
            {next?.location && <p>Location: {next.location}</p>}
          </div>
          {next ? (
            <a className="button" href={`#${next.id}`}>
              View session <Arrow />
            </a>
          ) : (
            <span className="next-arrow" aria-hidden="true">
              ↗
            </span>
          )}
        </aside>
        <div className="chapters">
          {months.map((m, i) => (
            <section
              key={m}
              id={`month-${m}`}
              className="month-chapter"
              aria-labelledby={`title-${m}`}
              tabIndex={-1}
            >
              <div className="month-heading">
                <span className="chapter-number" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 id={`title-${m}`}>{monthLabel(m)}</h2>
                <a href="#season" className="back-link">
                  Back to index ↑
                </a>
              </div>
              <div className="track-grid">
                {tracks.map((t) => {
                  const list = sessions.filter(
                    (s) => sessionMonth(s) === m && s.track === t.id,
                  );
                  return (
                    <section
                      key={t.id}
                      id={`${m}-${t.id}`}
                      className="track-section"
                      aria-labelledby={`${m}-${t.id}-title`}
                      tabIndex={-1}
                    >
                      <header className={`track-band ${t.id}`}>
                        <h3 id={`${m}-${t.id}-title`}>{t.name}</h3>
                        <span>{t.level}</span>
                      </header>
                      <div className="track-content">
                        {list.length ? (
                          list.map((s) => (
                            <SessionCard key={s.id} session={s} />
                          ))
                        ) : (
                          <p className="empty-state">
                            No session planned yet.
                            <span>Room for the next good idea.</span>
                          </p>
                        )}
                      </div>
                    </section>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
        <section id="about" className="about" aria-labelledby="about-title">
          <p className="eyebrow">SFEIR LUXEMBOURG / AI CLUB</p>
          <h2 id="about-title">
            Learn together.
            <br />
            Go deeper.
          </h2>
          <p>
            Talks, demonstrations and hands-on workshops for curious engineers.
            Foundations, Engineering and Deep Dive describe your familiarity
            with a subject — not your seniority.
          </p>
          <a href="#season" className="button">
            Explore the season <Arrow />
          </a>
        </section>
      </main>
      <footer className="site-footer shell">
        <span>AI CLUB / SFEIR LUXEMBOURG</span>
        <span>SEASON 26–27</span>
      </footer>
    </>
  );
}
