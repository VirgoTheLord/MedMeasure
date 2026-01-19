export type Observation = {
  id: string;
  capturedAt: string;
  areaCm2: number;
  perimeterCm: number;
};

export type PatientRecord = {
  patientId: string;
  woundId: string;
  lastCapture: string;
  latestAreaCm2: number;
  observations: Observation[];
};

export const mockPatientObservations: PatientRecord[] = [
  {
    patientId: "PT-1024",
    woundId: "WD-01",
    lastCapture: "Jan 19, 2026",
    latestAreaCm2: 12.84,
    observations: [
      { id: "o1", capturedAt: "Dec 20, 2025", areaCm2: 16.55, perimeterCm: 22.1 },
      { id: "o2", capturedAt: "Jan 05, 2026", areaCm2: 14.7, perimeterCm: 20.4 },
      { id: "o3", capturedAt: "Jan 19, 2026", areaCm2: 12.84, perimeterCm: 18.21 },
    ],
  },
  {
    patientId: "PT-8891",
    woundId: "WD-02",
    lastCapture: "Jan 17, 2026",
    latestAreaCm2: 7.12,
    observations: [
      { id: "o1", capturedAt: "Jan 03, 2026", areaCm2: 9.3, perimeterCm: 14.8 },
      { id: "o2", capturedAt: "Jan 17, 2026", areaCm2: 7.12, perimeterCm: 12.9 },
    ],
  },
];
