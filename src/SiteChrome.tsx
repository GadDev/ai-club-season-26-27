import heroLettering from "./assets/hero-lettering.svg";
import heroReference from "../design/references/signal-index-concept.webp";

export function SiteHeader({ page = "season" }: { page?: string }) {
  return (
    <header className="masthead" id="top">
      <div className="reference-hero">
        <img src={heroReference} width="1672" height="941" fetchPriority="high"
          alt="AI Club. Season 26–27. Ideas. Practice. Deeper understanding. The Signal Index: a nine-month journey from curiosity to real impact." />
        <img className="hero-lettering" src={heroLettering} alt="" aria-hidden="true" width="1672" height="281" />
      </div>
      <nav className="reference-nav" aria-label="Main">
        <a className="reference-home" href="?">SFEIR / LUXEMBOURG</a>
        <div><a href="?#season" aria-current={page === "season" ? "page" : undefined}>Season</a>
        <a href="?page=about" aria-current={page === "about" ? "page" : undefined}>About</a></div>
      </nav>
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
