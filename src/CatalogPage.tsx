import { useMemo, useState } from "react";
import { SiteFooter, SiteHeader } from "./SiteChrome";
import catalogData, { type CatalogTopic, type CatalogTrack } from "./content/catalog";
import "./CatalogPage.css";

type Track = CatalogTrack;

const topics: CatalogTopic[] = catalogData;
const ALL = "All";

const trackMeta: Array<{
  id: Track;
  label: string;
  className: "foundations" | "engineering" | "deep-dive";
  index: string;
}> = [
  { id: "Foundation", label: "Foundation", className: "foundations", index: "01" },
  { id: "Practitioner", label: "Practitioner", className: "engineering", index: "02" },
  { id: "Advanced", label: "Advanced", className: "deep-dive", index: "03" },
];

const tidy = (value: string) => value.trim().toLocaleLowerCase();
const labelFromSlug = (value: string) =>
  value
    .split(/[-_]/g)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

export default function CatalogPage() {
  const [query, setQuery] = useState("");
  const [track, setTrack] = useState<string>(ALL);
  const [theme, setTheme] = useState(ALL);
  const [format, setFormat] = useState(ALL);
  const [durability, setDurability] = useState(ALL);

  const themes = useMemo(
    () => [...new Set(topics.map((topic) => topic.category))].sort(),
    [],
  );
  const formats = useMemo(
    () => [...new Set(topics.map((topic) => topic.format))].sort(),
    [],
  );
  const durabilities = useMemo(
    () => [...new Set(topics.map((topic) => topic.durability))].sort(),
    [],
  );

  const filteredTopics = useMemo(() => {
    const needle = tidy(query);
    return topics.filter((topic) => {
      const matchesQuery =
        !needle ||
        [
          topic.id,
          topic.title,
          topic.description,
          topic.category,
          topic.format,
          ...topic.programmes,
          ...topic.months,
        ].some((value) => tidy(value).includes(needle));
      return (
        matchesQuery &&
        (track === ALL || topic.track === track) &&
        (theme === ALL || topic.category === theme) &&
        (format === ALL || topic.format === format) &&
        (durability === ALL || topic.durability === durability)
      );
    });
  }, [durability, format, query, theme, track]);

  const groupedTopics = trackMeta.map((meta) => ({
    ...meta,
    topics: filteredTopics.filter((topic) => topic.track === meta.id),
  }));
  const visibleGroups = groupedTopics.filter(
    (group) => group.topics.length > 0 || track === group.id,
  );
  const filtersActive =
    Boolean(query) ||
    track !== ALL ||
    theme !== ALL ||
    format !== ALL ||
    durability !== ALL;

  const resetFilters = () => {
    setQuery("");
    setTrack(ALL);
    setTheme(ALL);
    setFormat(ALL);
    setDurability(ALL);
  };

  return (
    <>
      <a className="skip-link" href="#catalog-content">
        Skip to catalog
      </a>
      <SiteHeader page="catalog" />
      <main id="catalog-content" className="catalog-page" tabIndex={-1}>
        <div className="catalog-breadcrumb">
          <a href="?#season">← Back to season</a>
          <span>TOPIC LIBRARY / READ-ONLY</span>
        </div>

        <section className="catalog-intro" aria-labelledby="catalog-title">
          <div className="catalog-lead">
            <p className="eyebrow">THE WHOLE LEARNING LANDSCAPE</p>
            <h1 id="catalog-title">
              Topic <span>Catalog</span>
            </h1>
            <p>
              A read-only index of every candidate topic considered for the AI
              Club season. Explore the ideas by track, theme, format, or keyword
              without implying that a topic is scheduled.
            </p>
          </div>
          <aside className="catalog-stats" aria-label="Catalog summary">
            <div>
              <strong>{topics.length}</strong>
              <span>Candidate topics</span>
            </div>
            <div>
              <strong>{trackMeta.length}</strong>
              <span>Tracks</span>
            </div>
            <div>
              <strong>{themes.length}</strong>
              <span>Themes</span>
            </div>
            <p>
              <strong>Catalog ≠ schedule</strong>
              <span>Informative only</span>
            </p>
          </aside>
        </section>

        <section className="catalog-controls" aria-labelledby="catalog-controls-title">
          <div className="catalog-search">
            <label id="catalog-controls-title" htmlFor="catalog-query">
              Find a topic
            </label>
            <div className="catalog-search-field">
              <input
                id="catalog-query"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search title, theme, format, topic ID…"
                autoComplete="off"
              />
              <span aria-hidden="true">⌕</span>
            </div>
          </div>

          <fieldset className="catalog-track-filter">
            <legend>Track</legend>
            <button
              type="button"
              className="catalog-all-track"
              aria-pressed={track === ALL}
              onClick={() => setTrack(ALL)}
            >
              All tracks
            </button>
            {trackMeta.map((meta) => (
              <button
                type="button"
                key={meta.id}
                className={meta.className}
                aria-pressed={track === meta.id}
                onClick={() => setTrack(meta.id)}
              >
                {meta.label}
              </button>
            ))}
          </fieldset>

          <div className="catalog-select-filters">
            <label>
              Theme
              <select value={theme} onChange={(event) => setTheme(event.target.value)}>
                <option value={ALL}>All themes</option>
                {themes.map((item) => (
                  <option value={item} key={item}>
                    {labelFromSlug(item)}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Format
              <select value={format} onChange={(event) => setFormat(event.target.value)}>
                <option value={ALL}>All formats</option>
                {formats.map((item) => (
                  <option value={item} key={item}>
                    {labelFromSlug(item)}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Durability
              <select
                value={durability}
                onChange={(event) => setDurability(event.target.value)}
              >
                <option value={ALL}>All durability</option>
                {durabilities.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <button type="button" className="catalog-reset" onClick={resetFilters} disabled={!filtersActive}>
              Reset filters
            </button>
          </div>
        </section>

        <section className="catalog-results" aria-labelledby="catalog-results-title">
          <header className="catalog-results-heading">
            <h2 id="catalog-results-title">Catalog index</h2>
            <output aria-live="polite">
              Showing {filteredTopics.length} / {topics.length} topics
            </output>
          </header>

          {filteredTopics.length === 0 ? (
            <div className="catalog-empty" role="status">
              <p className="eyebrow">NO MATCHING TOPICS</p>
              <h2>Try a broader signal.</h2>
              <p>
                Change the keyword or remove one of the filters. The catalog
                still contains all {topics.length} candidate topics.
              </p>
              <button type="button" className="button" onClick={resetFilters}>
                Reset filters
              </button>
            </div>
          ) : (
            <div
              className={`catalog-track-columns ${visibleGroups.length === 1 ? "single-track" : ""}`}
            >
              {visibleGroups.map((group) => (
                <section
                  className={`catalog-track-column ${group.className}`}
                  key={group.id}
                  aria-labelledby={`catalog-${group.id.toLowerCase()}-title`}
                >
                  <header className="catalog-track-heading">
                    <div>
                      <h2 id={`catalog-${group.id.toLowerCase()}-title`}>
                        {group.label}
                      </h2>
                      <span>{group.topics.length} topics</span>
                    </div>
                    <strong aria-hidden="true">{group.index}</strong>
                  </header>
                  <div className="catalog-topic-list">
                    {group.topics.map((topic) => (
                      <article
                        className="catalog-topic"
                        id={`catalog-${topic.id.toLowerCase()}`}
                        key={topic.id}
                      >
                        <div className="catalog-topic-meta">
                          <span>{topic.id}</span>
                          <span>{labelFromSlug(topic.format)}</span>
                        </div>
                        <h3>{topic.title}</h3>
                        <p>{topic.description}</p>
                        <div className="catalog-topic-context">
                          <span>{labelFromSlug(topic.category)}</span>
                          <span>{topic.curriculum_status}</span>
                          <span>{topic.durability}</span>
                        </div>
                        <details>
                          <summary>Curriculum context</summary>
                          <dl>
                            <div>
                              <dt>Voting</dt>
                              <dd>{topic.voting_status}</dd>
                            </div>
                            <div>
                              <dt>Reference programmes</dt>
                              <dd>{topic.programmes.join(", ")}</dd>
                            </div>
                            <div>
                              <dt>Reference months</dt>
                              <dd>{topic.months.join(", ")}</dd>
                            </div>
                          </dl>
                        </details>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}
        </section>

        <aside className="catalog-principle">
          <p className="eyebrow">WHY THIS PAGE EXISTS</p>
          <h2>The catalog keeps the possibility space visible.</h2>
          <p>
            A topic can live here without being scheduled. The season can later
            reference, shortlist, vote on, or unlock catalog topics without
            duplicating their definitions.
          </p>
        </aside>
      </main>
      <SiteFooter />
    </>
  );
}
