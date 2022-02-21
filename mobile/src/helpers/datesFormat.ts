import { format, parseISO } from "date-fns";

export function convertDateSQLToBrazillian(date: any) {
    const formatDate = parseISO(date);
    const formattedDate = format(
        formatDate,
        "dd'/'MM'"
    );

    return formattedDate


}

export function convertDateSQLToTime(date: any) {
    const formatDate = parseISO(date);
    const formattedDate = format(
        formatDate,
        "HH':'mm'"
    );

    return formattedDate
}