import extract from 'extract-zip';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

export function fmtTime(d: Date) {
  let hours = d.getHours();
  const minutes = d.getMinutes();
  const meridiem = hours >= 12 ? 'PM' : 'AM';
  const zeroPaddedMinutes = `0${minutes}`;
  hours %= 12;
  hours = hours || 12;
  return `${hours}:${minutes < 10 ? zeroPaddedMinutes : minutes} ${meridiem}`;
}

// Get the OS specific appData folder from the additional
// additionalArgs. values passed at startup in the Main process
export const USER_DATA_DIR = window.process.argv
  .filter((v) => v.startsWith('--USER-DATA-DIR'))[0]
  .split('=')[1];

export async function extractZip(filename: string) {
  try {
    const uid = uuidv4();
    const dir = `${USER_DATA_DIR}/Engagement/${uid}`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    console.log(`extracting ${filename} to directory: ${dir}`);
    await extract(filename, { dir });
  } catch (err) {
    console.log('Extraction failed');
    console.log(err);
  }
}
