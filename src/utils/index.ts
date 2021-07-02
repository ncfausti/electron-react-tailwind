function fmtTime(d: Date) {
  let hours = d.getHours();
  const minutes = d.getMinutes();
  const meridiem = hours >= 12 ? 'PM' : 'AM';
  hours %= 12;
  hours = hours || 12;
  return `${hours}:${minutes < 10 ? `0${minutes}` : minutes} ${meridiem}`;
}

module.exports = { fmtTime };
