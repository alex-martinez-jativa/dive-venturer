// Enums for difficulty levels
export enum DifficultyLevel {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

// Enums for water types
export enum WaterType {
  SALT = "salt",
  FRESH = "fresh",
}

// Enums for current strength
export enum CurrentStrength {
  NONE = "none",
  MILD = "mild",
  STRONG = "strong",
}

// Enums for certification types
export enum CertificationType {
  OPEN_WATER = "open water",
  ADVANCED_OPEN_WATER = "advanced open water",
  RESCUE_DIVER = "rescue diver",
  DIVEMASTER = "divemaster",
  INSTRUCTOR = "instructor",
}

// Enums for dive status
export enum DiveStatus {
  DRAFT = "draft",
  PUBLISHED = "published",
  ARCHIVED = "archived",
}

// Type for geographic coordinates
export type Coordinates = {
  latitude: number;
  longitude: number;
};

// Type for dive conditions
export type DiveConditions = {
  maxDepth: number;
  visibility: number;
  temperature: number;
  current: CurrentStrength;
  waterType: WaterType;
};

// Main Dive type
export type Dive = {
  // Identity
  id: string;
  title: string;
  description: string;

  // Location
  location: string;
  coordinates: Coordinates;

  // Dive specifications
  difficulty: DifficultyLevel;
  duration: number;
  conditions: DiveConditions;

  // Requirements
  certificationType: CertificationType;
  minExperienceDives?: number;

  // Media
  images: string[];
  coverImage: string;

  // Metadata
  status: DiveStatus;
  createdAt: string;
  updatedAt: string;
};
