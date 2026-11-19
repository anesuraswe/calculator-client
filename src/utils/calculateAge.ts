
import type { PatientAge } from "../types/patient";

export const calculateAge = (
  dateOfBirth: string,
  referenceDate: Date = new Date()
): PatientAge => {
  const [year, month, day] = dateOfBirth.split("-").map(Number);

  const birthDate = new Date(year, month - 1, day);

  let years = referenceDate.getFullYear() - birthDate.getFullYear();
  let months = referenceDate.getMonth() - birthDate.getMonth();
  let days = referenceDate.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;

    const previousMonth = new Date(
      referenceDate.getFullYear(),
      referenceDate.getMonth(),
      0
    );

    days += previousMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
};
