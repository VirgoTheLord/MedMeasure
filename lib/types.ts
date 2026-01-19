export type ProjectSummary = {
  projectId: string;
  patientId: string;
  woundId: string;
  observations: number;
  latestAreaCm2: number;
  lastCapture: string;
};
