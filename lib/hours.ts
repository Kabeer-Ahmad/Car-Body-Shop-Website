/**
 * Opening hours, matching the Google Business Profile. Every hours display on
 * the site (footer, map section, contact table, FAQs, schema, booking slots)
 * is generated from this list, so a change here is the only change needed.
 */
export const OPENING_HOURS = [
    { day: 'Monday', opens: '09:00', closes: '19:00' },
    { day: 'Tuesday', opens: '09:00', closes: '19:00' },
    { day: 'Wednesday', opens: '09:00', closes: '19:00' },
    { day: 'Thursday', opens: '13:00', closes: '19:00' },
    { day: 'Friday', opens: '17:00', closes: '21:00' },
    { day: 'Saturday', opens: '11:00', closes: '18:00' },
    { day: 'Sunday', opens: '11:00', closes: '18:00' },
] as const;

/** "09:00" -> "9am", "13:30" -> "1:30pm" */
export function formatTime(hhmm: string): string {
    const [h, m] = hhmm.split(':').map(Number);
    const suffix = h >= 12 ? 'pm' : 'am';
    const hour = h % 12 === 0 ? 12 : h % 12;
    return m ? `${hour}:${String(m).padStart(2, '0')}${suffix}` : `${hour}${suffix}`;
}

export const formatRange = (opens: string, closes: string) => `${formatTime(opens)} to ${formatTime(closes)}`;

export interface HoursGroup {
    /** "Monday to Wednesday", "Thursday", "Saturday and Sunday" */
    label: string;
    days: string[];
    opens: string;
    closes: string;
    hours: string;
}

/** Consecutive days with identical hours, merged. */
export function hoursGroups(): HoursGroup[] {
    const groups: HoursGroup[] = [];
    for (const { day, opens, closes } of OPENING_HOURS) {
        const last = groups[groups.length - 1];
        if (last && last.opens === opens && last.closes === closes) last.days.push(day);
        else groups.push({ label: '', days: [day], opens, closes, hours: formatRange(opens, closes) });
    }
    for (const g of groups) {
        const n = g.days.length;
        g.label = n === 1 ? g.days[0] : n === 2 ? `${g.days[0]} and ${g.days[1]}` : `${g.days[0]} to ${g.days[n - 1]}`;
    }
    return groups;
}

/** One sentence for FAQs and prose: "Monday to Wednesday 9am to 7pm, Thursday 1pm to 7pm, ... and Saturday and Sunday 11am to 6pm" */
export function hoursSentence(): string {
    const parts = hoursGroups().map((g) => `${g.label} ${g.hours}`);
    return parts.length > 1 ? `${parts.slice(0, -1).join(', ')}, and ${parts[parts.length - 1]}` : parts[0];
}

/** schema.org openingHoursSpecification, one entry per group. */
export function schemaOpeningHours() {
    return hoursGroups().map((g) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: g.days.length === 1 ? g.days[0] : g.days,
        opens: g.opens,
        closes: g.closes,
    }));
}

/** Hourly booking slots for a "YYYY-MM-DD" date, inside that day's hours. */
export function slotsForDate(isoDate: string): string[] {
    if (!isoDate) return [];
    const [y, mo, d] = isoDate.split('-').map(Number);
    const weekday = new Date(y, mo - 1, d).getDay(); // 0 = Sunday
    const entry = OPENING_HOURS[(weekday + 6) % 7];
    const start = Number(entry.opens.slice(0, 2));
    const end = Number(entry.closes.slice(0, 2));
    const slots: string[] = [];
    for (let h = start; h < end; h++) slots.push(formatRange(`${h}:00`, `${h + 1}:00`));
    return slots;
}
