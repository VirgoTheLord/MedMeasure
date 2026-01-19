import type { ProjectSummary } from "./types";

export const mockProjects: ProjectSummary[] = [
  {
    projectId: "p1",
    patientId: "PT-1024",
    woundId: "WD-01",
    observations: 6,
    latestAreaCm2: 12.84,
    lastCapture: "Jan 19, 2026",
  },
  {
    projectId: "p2",
    patientId: "PT-8891",
    woundId: "WD-02",
    observations: 3,
    latestAreaCm2: 7.12,
    lastCapture: "Jan 17, 2026",
  },
  {
    projectId: "p3",
    patientId: "PT-1207",
    woundId: "WD-01",
    observations: 9,
    latestAreaCm2: 19.44,
    lastCapture: "Jan 10, 2026",
  },
];
