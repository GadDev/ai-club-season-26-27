export type CatalogTrack = "Foundation" | "Practitioner" | "Advanced";

export type CatalogTopic = {
  id: string;
  title: string;
  track: CatalogTrack;
  category: string;
  format: string;
  description: string;
  curriculum_status: "Core" | "Elective" | "Experimental";
  voting_status: "Conditional / unlockable" | "Freely votable" | "Locked / editorial" | "Recommended";
  durability: "Current" | "Durable" | "Experimental";
  programmes: string[];
  months: string[];
};

export type Concept = {
  title: string;
  summary: string;
  programmes: number[];
  months: number[];
  meta: string;
};

export type CategoryDefinition = {
  name: string;
  code: string;
  suffixes: Record<"Advanced" | "Foundation" | "Practitioner", readonly [string, string, string]>;
  concepts: Concept[];
};
