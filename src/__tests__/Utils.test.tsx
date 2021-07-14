import path from 'path';
import fs from 'fs';
import log from 'electron-log';
import { fmtTime, extractZip, getAllFiles } from '../utils/index';

describe('fmtTime', () => {
  it('should transform time from datetime to human readable time', () => {
    const date1 = new Date('1995-12-17T03:24:00');
    expect(fmtTime(date1) === '3:24 AM').toBeTruthy();
  });
});

describe('unzip compressed conversation file', () => {
  test('that extraction is able to see all files', async () => {
    const infile = path.join(__dirname, 'test.zip');
    const outfolder = path.join(__dirname, 'extract');
    const loc = await extractZip(infile, outfolder);

    // where the extracted folder is placed, i.e.
    // test.zip -> ./test/<contents here>
    expect(loc).toBe(outfolder);
    const allfiles = getAllFiles(`${loc}/test/`, []);
    expect(allfiles).toContain(`${loc}/test/conversation.json`);
    expect(allfiles).toContain(`${loc}/test/conversation.mp4`);
    expect(allfiles).toContain(`${loc}/test/people/person_id_0.jpg`);

    // cleanup: delete extraction directory recursively
    try {
      fs.rmdirSync(outfolder, { recursive: true });

      log.info(`${loc} is deleted!`);
    } catch (err) {
      log.error(`Error while deleting ${loc}.`);
    }
  });
});
