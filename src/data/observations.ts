
export interface ObservationRange {
  id: string;
  ageLabel: string;
  ageInMonths: number;
  systolicBP: {
    min: number;
    max: number;
  };
  heartRate: {
    min: number;
    max: number;
  };
  respiratoryRate: {
    min: number;
    max: number;
  };
}

export const observationRanges: ObservationRange[] = [
  {
    id: "term",
    ageLabel: "Term newborn",
    ageInMonths: 0,
    systolicBP: { min: 60, max: 95 },
    heartRate: { min: 120, max: 170 },
    respiratoryRate: { min: 25, max: 60 },
  },
  {
    id: "3-months",
    ageLabel: "3 months",
    ageInMonths: 3,
    systolicBP: { min: 60, max: 105 },
    heartRate: { min: 115, max: 170 },
    respiratoryRate: { min: 25, max: 60 },
  },
  {
    id: "6-months",
    ageLabel: "6 months",
    ageInMonths: 6,
    systolicBP: { min: 75, max: 105 },
    heartRate: { min: 110, max: 170 },
    respiratoryRate: { min: 20, max: 55 },
  },
  {
    id: "1-year",
    ageLabel: "1 year",
    ageInMonths: 12,
    systolicBP: { min: 70, max: 105 },
    heartRate: { min: 105, max: 150 },
    respiratoryRate: { min: 20, max: 45 },
  },
  {
    id: "2-years",
    ageLabel: "2 years",
    ageInMonths: 24,
    systolicBP: { min: 70, max: 105 },
    heartRate: { min: 95, max: 150 },
    respiratoryRate: { min: 20, max: 40 },
  },
  {
    id: "4-years",
    ageLabel: "4 years",
    ageInMonths: 48,
    systolicBP: { min: 75, max: 110 },
    heartRate: { min: 80, max: 150 },
    respiratoryRate: { min: 17, max: 30 },
  },
  {
    id: "6-years",
    ageLabel: "6 years",
    ageInMonths: 72,
    systolicBP: { min: 80, max: 115 },
    heartRate: { min: 75, max: 140 },
    respiratoryRate: { min: 16, max: 30 },
  },
  {
    id: "8-years",
    ageLabel: "8 years",
    ageInMonths: 96,
    systolicBP: { min: 80, max: 115 },
    heartRate: { min: 70, max: 130 },
    respiratoryRate: { min: 16, max: 30 },
  },
  {
    id: "10-years",
    ageLabel: "10 years",
    ageInMonths: 120,
    systolicBP: { min: 85, max: 120 },
    heartRate: { min: 60, max: 130 },
    respiratoryRate: { min: 15, max: 25 },
  },
  {
    id: "12-years",
    ageLabel: "12 years",
    ageInMonths: 144,
    systolicBP: { min: 90, max: 120 },
    heartRate: { min: 65, max: 120 },
    respiratoryRate: { min: 15, max: 25 },
  },
  {
    id: "14-years",
    ageLabel: "14 years",
    ageInMonths: 168,
    systolicBP: { min: 90, max: 125 },
    heartRate: { min: 60, max: 115 },
    respiratoryRate: { min: 14, max: 25 },
  },
  {
    id: "16-years",
    ageLabel: "16 years",
    ageInMonths: 192,
    systolicBP: { min: 90, max: 130 },
    heartRate: { min: 60, max: 115 },
    respiratoryRate: { min: 14, max: 25 },
  },
  {
    id: "17-plus",
    ageLabel: "17 years and above",
    ageInMonths: 204,
    systolicBP: { min: 90, max: 135 },
    heartRate: { min: 60, max: 115 },
    respiratoryRate: { min: 14, max: 25 },
  },
];
