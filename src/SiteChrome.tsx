export function SiteHeader({ page = "season" }: { page?: string }) {
  return (
    <header className="masthead" id="top">
      <div className="poster-head">
        <a href="?" className="poster-wordmark" aria-label="AI Club home">
          AI CLUB
          <svg viewBox="0 0 180 60" aria-hidden="true">
            <path d="M4 52 163 10M128 4l38 5-25 28" />
          </svg>
        </a>
        <div className="poster-context">
          <p>
            SFEIR
            <br />
            <span>LUXEMBOURG</span>
          </p>
          <strong>SEASON 26–27</strong>
          <span className="poster-rule" />
          <span className="meta">
            Ideas. Practice. <br />
            Deeper understanding.
          </span>
        </div>
        <nav className="poster-nav" aria-label="Main">
          <a
            href="?#season"
            aria-current={page === "season" ? "page" : undefined}
          >
            Season
          </a>
          <a
            href="?page=about"
            aria-current={page === "about" ? "page" : undefined}
          >
            About
          </a>
        </nav>
        <div className="poster-year" aria-hidden="true">
          <span>26</span>
          <span>27</span>
        </div>
      </div>
    </header>
  );
}
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <p className="eyebrow">SFEIR LUXEMBOURG / SEASON 26–27</p>
          <p className="footer-statement">
            SAME CURIOSITY.
            <br />
            NEW PERSPECTIVES.
          </p>
        </div>
        <nav aria-label="Footer">
          <a href="?#season">Explore the season ↗</a>
          <a href="?page=about">About the club ↗</a>
          <a href="?page=voting">Voting preview ↗</a>
          <a href="?page=materials">Materials preview ↗</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>AI CLUB / THE SIGNAL INDEX</span>
        <span>October 2026 — June 2027</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
