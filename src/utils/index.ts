/* eslint-disable no-param-reassign */
import extract from 'extract-zip';
import fs from 'fs';
import path from 'path';
import log from 'electron-log';

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
export function userDataDir() {
  try {
    return window.process.argv
      .filter((v) => v.startsWith('--USER-DATA-DIR'))[0]
      .split('=')[1];
  } catch (e) {
    log.info('Info: --USER-DATA-DIR not specified on process.argv');
    return null;
  }
}

/**
 * Extract zip to local filesystem
 * @param {string} filename - The name of the file to extract.
 * @return {string} The location on disk where contents have been extracted.
 */
export async function extractZip(zipFilePath: string, toDir: string) {
  try {
    if (!fs.existsSync(toDir)) {
      fs.mkdirSync(toDir, { recursive: true });
    }

    log.info(`Extracting ${zipFilePath} to directory: ${toDir}`);
    await extract(zipFilePath, { dir: toDir });
    return toDir;
  } catch (err) {
    log.error(`Extraction failed: ${err}`);
    return null;
  }
}

export const getAllFiles = (dirPath: string, arrayOfFiles: string[]) => {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    if (fs.statSync(`${dirPath}/${file}`).isDirectory()) {
      arrayOfFiles = getAllFiles(`${dirPath}/${file}`, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, '/', file));
    }
  });

  return arrayOfFiles;
};
