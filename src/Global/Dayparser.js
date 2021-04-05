export default function getWeekDay(number) {
    if (number === 0) return 'SUNDAY';
    if (number === 1) return 'MONDAY';
    if (number === 2) return 'TUESDAY';
    if (number === 3) return 'WEDDAY';
    if (number === 4) return 'THURSDAY';
    if (number === 5) return 'FRIDAY';
    if (number === 6) return 'SATURDAY';

    return null;
}
