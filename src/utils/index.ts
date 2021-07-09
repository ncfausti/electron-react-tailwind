const extract = require('extract-zip');
const fs = require('fs');

export function fmtTime(d: Date) {
  let hours = d.getHours();
  const minutes = d.getMinutes();
  const meridiem = hours >= 12 ? 'PM' : 'AM';
  const zeroPaddedMinutes = `0${minutes}`;
  hours %= 12;
  hours = hours || 12;
  return `${hours}:${minutes < 10 ? zeroPaddedMinutes : minutes} ${meridiem}`;
}

export async function openZip(filename: string) {
  try {
    const dir = '/Users/nick/smile-ml/abc';

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    console.log(`extracting ${filename} to directory: ${dir}`);
    await extract(filename, { dir: '/Users/nick/smile-ml/abc' });
    console.log('Extraction complete');
  } catch (err) {
    // handle any errors
    console.log(err);
  }
}
