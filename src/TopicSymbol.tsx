import type { Topic } from "./content/schema";

/** Solid editorial glyphs redrawn from the Signal Index reference. */
export function TopicSymbol({ name }: { name: Topic["symbol"] }) {
  const shapes = {
    circle: <circle cx="24" cy="24" r="17" />,
    overlap: (
      <>
        <circle cx="17" cy="24" r="16" />
        <circle
          cx="31"
          cy="24"
          r="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M24 9a16 16 0 0 0 0 30"
          fill="none"
          stroke="var(--color-paper)"
          strokeWidth="2"
        />
      </>
    ),
    layers: <path d="M5 5h38v10H5zm0 14h38v10H5zm0 14h38v10H5z" />,
    triangle: <path d="M24 5 44 42H4z" />,
    square: <path d="M6 6h36v36H6z" />,
    horizon: <path d="M2 33a22 22 0 0 1 44 0z" />,
    cluster: (
      <>
        <circle cx="14" cy="14" r="8" />
        <circle cx="34" cy="14" r="8" />
        <circle cx="14" cy="34" r="8" />
        <circle cx="34" cy="34" r="8" />
      </>
    ),
    diamond: <path d="m24 5 19 19-19 19L5 24z" />,
    pause: <path d="M7 5h13v38H7zm21 0h13v38H28z" />,
    steps: <path d="M5 5h18v18H5zm18 18h18v18H23z" />,
    checker: (
      <path d="M4 4h13v13H4zm26 0h13v13H30zM17 17h13v13H17zM4 30h13v13H4zm26 0h13v13H30z" />
    ),
    hexagon: <path d="M13 5h22l11 19-11 19H13L2 24z" />,
    triad: (
      <>
        <circle cx="24" cy="11" r="8" />
        <circle cx="12" cy="35" r="8" />
        <circle cx="36" cy="35" r="8" />
      </>
    ),
    split: (
      <>
        <path d="M8 40 40 8v32z" />
        <path
          d="M8 8h32v32H8z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </>
    ),
    asterisk: (
      <path
        d="M24 4v40M7 14l34 20M7 34l34-20"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
    ),
    hourglass: <path d="M7 5h34L24 24zm17 19 17 19H7z" />,
    grid: (
      <path d="M4 4h10v10H4zm15 0h10v10H19zm15 0h10v10H34zM4 19h10v10H4zm15 0h10v10H19zm15 0h10v10H34zM4 34h10v10H4zm15 0h10v10H19zm15 0h10v10H34z" />
    ),
  } satisfies Record<Topic["symbol"], React.ReactNode>;
  return (
    <svg
      className="topic-symbol"
      viewBox="0 0 48 48"
      width="36"
      height="36"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {shapes[name]}
    </svg>
  );
}
