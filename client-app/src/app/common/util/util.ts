export const combineDateAndTime = (date: Date, time: Date) => {
    const timeString = time.getHours() + ':' + time.getMinutes() + ':00';

    const year = date.getFullYear();
    const month = date.getMonth() + 1; //starts at 0
    const day = date.getDate();
    const dateString = `${year}-${month}-${day}`;

    return new Date(dateString + ' ' + timeString);
}