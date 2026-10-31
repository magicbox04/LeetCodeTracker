import dayjs from 'dayjs'

export function addDays(dateStr, days)
{
    return dayjs(dateStr).add(days,'day').format('YYYY-MM-DD');
}

