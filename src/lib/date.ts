export function startOfDay(date: Date): Date {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

/**
 * Parses a date string into a Date object.
 *
 * - For `YYYY-MM-DD` (date-only) values we intentionally parse as a *local* date
 *   to avoid the UTC-shift behavior of `new Date('YYYY-MM-DD')`.
 * - Falls back to the built-in Date parser for other formats.
 */
export function parseDate(value: string): Date | null {
  const trimmed = value.trim();

  const ymdMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(trimmed);
  if (ymdMatch) {
    const year = Number(ymdMatch[1]);
    const monthIndex = Number(ymdMatch[2]) - 1;
    const day = Number(ymdMatch[3]);

    const d = new Date(year, monthIndex, day);

    // Guard against impossible dates like 2024-02-31.
    if (
      d.getFullYear() !== year ||
      d.getMonth() !== monthIndex ||
      d.getDate() !== day
    ) {
      return null;
    }

    return d;
  }

  const d = new Date(trimmed);
  return Number.isNaN(d.getTime()) ? null : d;
}

