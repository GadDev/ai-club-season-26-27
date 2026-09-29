import type { Session } from "./content/model";
import { tracks, monthLabel, sessionMonth, dateLabel } from "./content/model";
import { SiteHeader, SiteFooter } from "./SiteChrome";
export const sessionHref = (id: string) => `?session=${encodeURIComponent(id)}`;
export function SecondaryPage({
  page,
  session,
  sessions,
}: {
  page: string;
  session?: Session;
  sessions: Session[];
}) {
  const track = tracks.find((t) => t.id === session?.track);
  const companion = session?.pairId
    ? sessions.find((s) => s.pairId === session.pairId && s.id !== session.id)
    : undefined;
  const title =
    session?.title ??
    {
      about: "Learn together. Go deeper.",
      voting: "Choose the next session.",
      materials: "Keep exploring.",
    }[page] ??
    "Session not found.";
  return (
    <>
      <a className="skip-link" href="#page-content">
        Skip to content
      </a>
      <SiteHeader page={page} />
      <main id="page-content" className="page-content" tabIndex={-1}>
        <div className="breadcrumb">
          <a href="?#season">← Back to season</a>
          <span>
            {page === "voting" || page === "materials"
              ? "DESIGN PREVIEW / NOT YET AVAILABLE"
              : "SEASON 26–27"}
          </span>
        </div>
        {page === "session" && session ? (
          <>
            <div className="detail-grid">
              <div>
                <p className="eyebrow">
                  {session.format.join(" + ")} /{" "}
                  {monthLabel(sessionMonth(session))}
                </p>
                <h1>{title}</h1>
                <div className="detail-badges">
                  <span className={`track-tag ${session.track}`}>
                    {track?.name}
                  </span>
                  <span className="status">{session.status}</span>
                </div>
                <div className={`replay-surface ${session.track}`}>
                  <span className="eyebrow">SESSION MATERIALS</span>
                  <h2>The ideas come first.</h2>
                  <p>
                    No replay or presentation has been published for this
                    session.
                  </p>
                </div>
              </div>
              <div className="detail-copy">
                <h2>
                  {session.status === "proposed"
                    ? "The proposal"
                    : "About this session"}
                </h2>
                <p>{session.summary}</p>
                {companion && (
                  <p>
                    <a href={sessionHref(companion.id)}>
                      Explore the companion {companion.format.join(" + ")} →
                    </a>
                  </p>
                )}
                <dl>
                  <dt>Track</dt>
                  <dd>
                    {track?.name} / {track?.level}
                  </dd>
                  <dt>
                    {session.status === "proposed" ? "Proposed month" : "Date"}
                  </dt>
                  <dd>
                    {"startsAt" in session && session.startsAt
                      ? dateLabel(session.startsAt)
                      : monthLabel(sessionMonth(session))}
                  </dd>
                  <dt>Location</dt>
                  <dd>{session.location || "Not confirmed yet."}</dd>
                </dl>
                {session.status === "proposed" && (
                  <p className="draft-note">
                    This is a proposed topic. Its date, location, and final
                    programme are not confirmed.
                  </p>
                )}
                {session.status === "cancelled" && session.reason && (
                  <p>{session.reason}</p>
                )}
                <h2>Materials</h2>
                <p>
                  Approved slides, code, and recordings will appear here when
                  available.
                </p>
                <a className="button" href={`?#${session.id}`}>
                  Back to this session →
                </a>
              </div>
            </div>
          </>
        ) : page === "about" ? (
          <>
            <p className="eyebrow">THE CLUB / LUXEMBOURG</p>
            <h1>{title}</h1>
            <div className="about-lead">
              <p>
                AI is a subject to explore together. The SFEIR Luxembourg AI
                Club brings curious engineers together through talks,
                demonstrations, and hands-on workshops.
              </p>
              <p>
                From a first mental model to the systems behind it: pick an
                entry point, ask questions, and put an idea into practice.
              </p>
            </div>
            <div className="page-card-grid">
              {tracks.map((t, i) => (
                <article key={t.id} className={`editorial-card ${t.id}`}>
                  <span className="meta">
                    0{i + 1} / {t.level}
                  </span>
                  <h2>{t.name}</h2>
                  <p>{t.description}.</p>
                  <p>
                    {
                      [
                        "Build the vocabulary and intuition to understand how AI works.",
                        "Connect models to software, workflows, and practical engineering problems.",
                        "Examine architecture, research, reliability, and the trade-offs behind the tools.",
                      ][i]
                    }
                  </p>
                </article>
              ))}
            </div>
            <div className="about-lead">
              <h2>Familiarity, not seniority.</h2>
              <div>
                <p>
                  The tracks describe your familiarity with a subject. An
                  experienced engineer can start in Foundations and explore Deep
                  Dive on another topic.
                </p>
                <p>
                  The programme is public. Proposed topics remain clearly
                  separate from confirmed events.
                </p>
                <a className="button" href="?#season">
                  Explore the season →
                </a>
              </div>
            </div>
          </>
        ) : page === "voting" ? (
          <>
            <p className="eyebrow">FUTURE / YOUR VOICE IN THE PROGRAMME</p>
            <h1>
              Choose <span>the next session.</span>
            </h1>
            <p className="page-intro">
              One choice per eligible SFEIR account — when voting opens.
            </p>
            <div className="preview-notice">
              <strong>Voting is not open.</strong> This page previews the
              layout. No account is connected and no vote is collected.
              Eligibility, the shortlist, and the closing date still need to be
              confirmed.
            </div>
            <div className="page-card-grid">
              {tracks
                .map((t) => sessions.find((s) => s.track === t.id))
                .filter((s): s is Session => Boolean(s))
                .map((s, i) => (
                  <article className={`editorial-card ${s.track}`} key={s.id}>
                    <span className="meta">0{i + 1} / EXAMPLE PROPOSAL</span>
                    <h2>{s.title}</h2>
                    <p>{s.summary}</p>
                    <span className="status">Proposed</span>
                    <a href={sessionHref(s.id)}>Explore topic →</a>
                  </article>
                ))}
            </div>
            <div className="preview-notice">
              The proposals above illustrate the design; they are not an
              approved ballot. Voting will require SFEIR sign-in and one
              effective choice enforced by the server.
            </div>
          </>
        ) : page === "materials" ? (
          <>
            <p className="eyebrow">FUTURE / SLIDES, CODE & REPLAYS</p>
            <h1>
              Keep <span>exploring.</span>
            </h1>
            <div className="detail-grid">
              <div className="replay-surface engineering">
                <span className="eyebrow">THE SESSION LIBRARY</span>
                <h2>Ideas worth revisiting.</h2>
                <p>No replay is available yet.</p>
              </div>
              <div className="detail-copy">
                <h2>After the session.</h2>
                <p>
                  This is a preview of the future materials area. Approved
                  resources will be linked from each session.
                </p>
                <div className="resource-placeholder">
                  <span>01 / PRESENTATIONS</span>
                  <h3>Slides & reading</h3>
                  <p>No presentation published.</p>
                </div>
                <div className="resource-placeholder">
                  <span>02 / PRACTICE</span>
                  <h3>Code & exercises</h3>
                  <p>No repository or exercises published.</p>
                </div>
                <p className="draft-note">
                  Publication and access will be confirmed for each resource.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1>{title}</h1>
            <p>This session is not in the current programme.</p>
            <a href="?#season" className="button">
              Explore the season →
            </a>
          </>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
