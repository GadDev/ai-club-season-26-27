import { SeasonGrid } from "./SeasonGrid";
import { SiteHeader, SiteFooter } from "./SiteChrome";
import { SecondaryPage, sessionHref } from "./Pages";
import { lazy, Suspense, useEffect, useState } from "react";
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
const CatalogPage = lazy(() => import("./CatalogPage"));
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
      className={`session-card ${s.status} ${s.track}`}
      aria-labelledby={`${s.id}-title`}
    >
      <div className="card-top">
        <span className="meta">
          {s.pairId ? `${s.pairId} / ` : ""}
          {s.format.join(" + ")}
        </span>
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
      <a className="session-link" href={sessionHref(s.id)}>
        View details <Arrow />
      </a>
      {s.location && <p className="card-meta">Location: {s.location}</p>}
      {s.status === "cancelled" && s.reason && <p>{s.reason}</p>}
    </article>
  );
}
export function App() {
  const [now, setNow] = useState(Date.now);
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 30_000);
    return () => clearInterval(id);
  }, []);
  const next = nextEvent(sessions, now);
  const params = new URLSearchParams(window.location.search);
  const sessionId = params.get("session");
  const page = sessionId ? "session" : params.get("page") || "season";
  useEffect(() => {
    const selected = sessions.find((s) => s.id === sessionId);
    document.title = `${selected?.title || { about: "About", catalog: "Topic Catalog", voting: "Voting preview", materials: "Materials preview" }[page] || "Season 26–27"} — AI Club SFEIR Luxembourg`;
  }, [page, sessionId]);
  if (page === "catalog")
    return (
      <Suspense
        fallback={
          <>
            <SiteHeader page="catalog" />
            <main className="page-content">
              <p className="eyebrow">TOPIC LIBRARY</p>
              <h1>Loading catalog…</h1>
            </main>
            <SiteFooter />
          </>
        }
      >
        <CatalogPage />
      </Suspense>
    );
  if (page !== "season")
    return (
      <SecondaryPage
        page={page}
        session={sessions.find((s) => s.id === sessionId)}
        sessions={sessions}
      />
    );
  const featured = tracks
    .map((t) => sessions.find((s) => s.track === t.id))
    .filter((s): s is Session => Boolean(s));
  return (
    <>
      <a className="skip-link" href="#season">
        Skip to the season
      </a>
      <SiteHeader />
      <main id="season" tabIndex={-1}>
        <h1 className="sr-only">AI Club — Season 2026–2027</h1>
        <section className="overview" aria-labelledby="overview-title">
          <h2 id="overview-title" className="sr-only">
            The season at a glance.
          </h2>
          <p className="programme-note">
            <span className="programme-year">2026–2027</span>{" "}
            <strong>Programme in progress.</strong>{" "}
            {sessions.some((s) => s.status === "scheduled")
              ? "Check each session for its proposed or confirmed status."
              : `${new Set(sessions.map((s) => s.pairId).filter(Boolean)).size} topic pairs proposed across three tracks; dates are not confirmed yet.`}
          </p>
          <SeasonGrid sessions={sessions} />
        </section>
        <section className="featured-band" aria-label="Programme highlights">
          <aside className="feature-intro">
            <p className="eyebrow">NEXT CONFIRMED EVENT</p>
            <h2>{next ? next.title : "No date confirmed yet."}</h2>
            <p>
              {next
                ? dateLabel(next.startsAt)
                : "Same curiosity. A whole season of ideas to explore."}
            </p>
            {next && (
              <a className="button" href={sessionHref(next.id)}>
                View session →
              </a>
            )}
            <span className="feature-arrow" aria-hidden="true">
              ↗
            </span>
          </aside>
          {featured.map((s, i) => (
            <article className={`editorial-card ${s.track}`} key={s.id}>
              <span className="meta">
                0{i + 1} / {monthLabel(sessionMonth(s), true)}
              </span>
              <span className="status">{s.status}</span>
              <h3>{s.title}</h3>
              <p>{s.summary}</p>
              <a href={sessionHref(s.id)}>View proposal →</a>
            </article>
          ))}
        </section>
        <div className="chapters shell">
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
                      className={`track-section ${list.length ? "has-sessions" : "is-empty"}`}
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
                          <p className="empty-state">No session planned yet.</p>
                        )}
                      </div>
                    </section>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
        <section
          id="about"
          className="about shell"
          aria-labelledby="about-title"
        >
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
          <a href="?page=about" className="button">
            About the club <Arrow />
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
