export default function fmtTime(d: Date) {
  let hours = d.getHours();
  const minutes = d.getMinutes();
  const meridiem = hours >= 12 ? 'PM' : 'AM';
  const zeroPaddedMinutes = `0${minutes}`;
  hours %= 12;
  hours = hours || 12;
  return `${hours}:${minutes < 10 ? zeroPaddedMinutes : minutes} ${meridiem}`;
}
