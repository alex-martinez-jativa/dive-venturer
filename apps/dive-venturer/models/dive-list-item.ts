import { DifficultyLevel, DiveStatus, Coordinates } from "./dive";

export type DiveListItem = {
  // Identity
  id: string;
  title: string;

  // Location
  location: string;
  coordinates: Coordinates;

  // Quick dive info
  difficulty: DifficultyLevel;
  maxDepth: number;
  duration: number;

  // Media
  coverImage: string;

  // Metadata
  status: DiveStatus.PUBLISHED;
};
