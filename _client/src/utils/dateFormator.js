export function dateFormator(dateData) {
  // Input UTC timestamp
  const utcTimestamp = dateData;

  // Convert UTC timestamp to a Date object
  const date = new Date(utcTimestamp);

  // Define month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Extract day, month, and year
  const day = date.getUTCDate();
  const month = monthNames[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  // Format the result
  const formattedDate = `${day} ${month} ${year}`;

  return formattedDate;
}
