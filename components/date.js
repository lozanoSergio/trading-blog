import { isValid, parseISO, format } from 'date-fns';
import { es } from 'date-fns/locale';
import capitalize from 'lodash.capitalize';

export default function Date({ dateString }) {
    if (!isValid(parseISO(dateString))) {
        return 'No date';
    }
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{capitalize(format(date, 'LLLL d, yyyy', { locale: es }))}</time>;
}
