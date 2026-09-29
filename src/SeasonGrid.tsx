import "./SeasonGrid.css";
import { useState } from "react";
import data from "./content/generated.json";
import {
  tracks,
  months,
  monthLabel,
  sessionMonth,
  type Session,
} from "./content/model";
import type { Topic } from "./content/schema";
import { TopicSymbol } from "./TopicSymbol";

const topicMetadata = data.topics as Record<string, Topic>;
function cellTopics(sessions: Session[]) {
  const seen = new Set<string>();
  return sessions.flatMap((session) => {
    const key = session.pairId || session.id;
    if (seen.has(key)) return [];
    seen.add(key);
    return [
      {
        key,
        ...(topicMetadata[key] || {
          label: session.title,
          symbol: "circle" as const,
        }),
      },
    ];
  });
}
function IndexTitle() {
  return (
    <span className="index-title">
      <svg
        viewBox="0 0 48 48"
        width="40"
        height="40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
        focusable="false"
      >
        <path d="m5 5 36 36M14 41h27V14" />
      </svg>
      <span>
        The season
        <br />
        at a glance
      </span>
    </span>
  );
}
function TopicCell({
  list,
  month,
  track,
}: {
  list: Session[];
  month: string;
  track: (typeof tracks)[number];
}) {
  const topics = cellTopics(list);
  if (!list.length)
    return <span className="matrix-empty">No session planned</span>;
  return (
    <a
      className={`topic-cell ${topics.length > 1 ? "has-multiple-topics" : ""}`}
      href={`#${month}-${track.id}`}
      aria-label={`${monthLabel(month)}, ${track.name}, ${topics.map((t) => t.label).join("; ")}, ${list.length} ${list.length === 1 ? "session" : "sessions"}`}
    >
      <span className="topic-glyphs">
        {topics.map((topic) => (
          <TopicSymbol key={topic.key} name={topic.symbol} />
        ))}
      </span>
      <span className="topic-labels">
        {topics.map((topic) => (
          <span key={topic.key}>{topic.label}</span>
        ))}
      </span>
      {topics.length > 1 && (
        <span className="topic-count">{topics.length} topics</span>
      )}
    </a>
  );
}
function Matrix({ group, sessions }: { group: string[]; sessions: Session[] }) {
  return (
    <table className="season-matrix">
      <caption className="sr-only">
        Session proposals and events by track, {monthLabel(group[0])} to{" "}
        {monthLabel(group[group.length - 1])}
      </caption>
      <thead>
        <tr>
          <th scope="col">
            <IndexTitle />
          </th>
          {group.map((month) => (
            <th scope="col" key={month}>
              <a href={`#month-${month}`} aria-label={monthLabel(month)}>
                {monthLabel(month, true).split(" ")[0]}
              </a>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tracks.map((track) => (
          <tr key={track.id}>
            <th scope="row" className={`track-label ${track.id}`}>
              {track.name}
            </th>
            {group.map((month) => (
              <td key={month}>
                <TopicCell
                  list={sessions.filter(
                    (s) => sessionMonth(s) === month && s.track === track.id,
                  )}
                  month={month}
                  track={track}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export function SeasonGrid({ sessions }: { sessions: Session[] }) {
  const [activeMonth, setActiveMonth] = useState(months[0]);
  return (
    <>
      <div className="wide-index">
        <Matrix group={months} sessions={sessions} />
      </div>
      <div className="tablet-index">
        {[0, 3, 6].map((n) => (
          <Matrix key={n} group={months.slice(n, n + 3)} sessions={sessions} />
        ))}
      </div>
      <div className="mobile-season-index">
        <IndexTitle />
        <label htmlFor="overview-month">Explore a month</label>
        <select
          id="overview-month"
          value={activeMonth}
          onChange={(event) => setActiveMonth(event.target.value)}
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {monthLabel(month)}
            </option>
          ))}
        </select>
        <div className="mobile-track-topics">
          {tracks.map((track) => (
            <div className="mobile-topic-row" key={track.id}>
              <h3 className={`track-label ${track.id}`}>
                {track.name}
                <small>{track.level}</small>
              </h3>
              <TopicCell
                list={sessions.filter(
                  (s) =>
                    sessionMonth(s) === activeMonth && s.track === track.id,
                )}
                month={activeMonth}
                track={track}
              />
            </div>
          ))}
        </div>
        <a className="mobile-month-link" href={`#month-${activeMonth}`}>
          View {monthLabel(activeMonth)} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </>
  );
}
