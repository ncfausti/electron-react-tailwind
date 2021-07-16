/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Fragment, useRef, useState } from 'react';
import log from 'electron-log';
import { Dialog, Transition } from '@headlessui/react';
import { UploadIcon } from '@heroicons/react/outline';
import path from 'path';
import fs from 'fs';
import Store from 'electron-store';
import { extractZip, userDataDir, getAllFiles } from '../utils';

export default function NewEngagementModal() {
  const [open, setOpen] = useState(false);
  const [filename, setFileName] = useState('');
  const [engagementName, setEngagementName] = useState('');
  const [engagementLocation, setEngagementLocation] = useState('');
  const [engagementDescription, setEngagementDescription] = useState('');
  const [engagementTags, setEngagementTags] = useState('');
  const [contactName, setContactName] = useState('');
  const [importLocation, setImportLocation] = useState('./extract');
  const [importPhotos, setImportPhotos] = useState<string[]>([]);
  const [importStep, setImportStep] = useState(1);

  const cancelButtonRef = useRef(null);

  const store = new Store();

  function clearState() {
    setEngagementName('');
    setEngagementDescription('');
    setEngagementLocation('');
    setContactName('');
    setEngagementTags('');
  }

  async function handleFiles(target?: HTMLInputElement) {
    if (target && target.files) {
      const fname = target.files[0].name;
      setFileName(fname);

      const loc = await extractZip(
        target.files[0].path,
        `${userDataDir()}/extract`
      );

      const fileNameSansZip = fname.slice(0, -4);
      setImportLocation(`${loc}/${fileNameSansZip}` || '');

      const photofiles: string[] = getAllFiles(
        `${loc}/${fileNameSansZip}/people/`,
        []
      );
      log.info(photofiles);

      setImportPhotos(photofiles);

      const rawdata = fs.readFileSync(
        path.join(loc, fileNameSansZip, 'conversation.json')
      );
      const conversation = JSON.parse(rawdata.toString());
      log.info(`loc: ${conversation.Location}`);
      setEngagementLocation(conversation.Location);
      store.set(fileNameSansZip, conversation);
      log.info(store.get(fileNameSansZip));
      log.info(store.get(`${fileNameSansZip}.reactions.person_id_0`));
    }
  }

  function openModal() {
    setOpen(true);
    setFileName('');
  }

  function cancelClick(stepN: number) {
    if (stepN === 1) {
      // cleanup: delete extraction directory recursively
      try {
        fs.rmdirSync(importLocation, { recursive: true });
        log.info(`${importLocation} is deleted!`);
      } catch (err) {
        log.error(`Error while deleting ${importLocation}.`);
      }
    }
    setOpen(false);
    clearState();
    setTimeout(() => setImportStep(1), 500);
  }

  function backClick() {
    setImportStep((currentStep) => currentStep - 1);
  }

  function continueClick(stepN: number) {
    if (stepN === 1) {
      setImportStep(2);
    }
    if (stepN === 2) {
      log.info(engagementName);
      log.info(engagementLocation);
      log.info(engagementDescription);
      setImportStep(3);
    }
    if (stepN === 3) {
      log.info(contactName);
      setImportStep(4);
    }
  }

  function finish() {
    setOpen(false);
    clearState();

    setTimeout(() => setImportStep(1), 500);
  }

  return (
    <>
      <button
        className="relative inline-flex items-center px-8 py-2 border border-transparent shadow-sm text-base font-light rounded-md text-white bg-cordPurple hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        type="button"
        onClick={() => openModal()}
      >
        Add New
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          open={open}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              {(importStep === 1 && (
                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                  <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            onChange={(e) =>
                              handleFiles(e.target as HTMLInputElement)
                            }
                          />
                        </label>
                        <p className="pl-1">{filename || 'or drag and drop'}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                      onClick={() => continueClick(1)}
                    >
                      Continue
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                      onClick={() => cancelClick(1)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )) ||
                (importStep === 2 && (
                  <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                    <video width="320" height="240" controls>
                      <source
                        src={`${importLocation}/conversation.mp4`}
                        type="video/mp4"
                      />
                    </video>
                    <label
                      htmlFor="engagement-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Engagement Name:
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="engagement-name"
                        id="engagement-name"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder=""
                        value={engagementName}
                        onInput={(e) =>
                          setEngagementName(
                            (e.target as HTMLInputElement).value
                          )
                        }
                      />
                    </div>
                    <label
                      htmlFor="engagement-location"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Location:
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="engagement-location"
                        id="engagement-location"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder=""
                        value={engagementLocation}
                        onInput={(e) =>
                          setEngagementLocation(
                            (e.target as HTMLInputElement).value
                          )
                        }
                      />
                    </div>
                    <label
                      htmlFor="engagement-tags"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Tags:
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="engagement-tags"
                        id="engagement-tags"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder=""
                        value={engagementTags}
                        onInput={(e) =>
                          setEngagementTags(
                            (e.target as HTMLInputElement).value
                          )
                        }
                      />
                    </div>
                    <label
                      htmlFor="engagement-description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description:
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="engagement-description"
                        id="engagement-description"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder=""
                        value={engagementDescription}
                        onInput={(e) =>
                          setEngagementDescription(
                            (e.target as HTMLInputElement).value
                          )
                        }
                      />
                    </div>
                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                      <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                        onClick={() => continueClick(2)}
                      >
                        Continue
                      </button>
                      <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                        onClick={() => backClick()}
                        ref={cancelButtonRef}
                      >
                        Back
                      </button>
                    </div>
                  </div>
                )) ||
                (importStep === 3 && (
                  <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                    {importPhotos.map((imgFilePath, i) => {
                      return (
                        <>
                          <img src={`${imgFilePath}`} alt={`${imgFilePath}`} />
                          <label
                            htmlFor={`contact-name-${i}`}
                            className="block text-sm font-medium text-gray-700"
                          >
                            Contact Name:
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name={`contact-name-${i}`}
                              id={`contact-name-${i}`}
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              placeholder=""
                              value={contactName}
                              onInput={(e) =>
                                setContactName(
                                  (e.target as HTMLInputElement).value
                                )
                              }
                            />
                          </div>
                        </>
                      );
                    })}

                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                      <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                        onClick={() => continueClick(3)}
                      >
                        Continue
                      </button>
                      <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                        onClick={() => backClick()}
                        ref={cancelButtonRef}
                      >
                        Back
                      </button>
                    </div>
                  </div>
                )) ||
                (importStep === 4 && (
                  <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                    {importPhotos.map((imgFilePath) => {
                      return (
                        <>
                          <img
                            src={imgFilePath}
                            width={30}
                            height={30}
                            alt="contact"
                          />
                          <div className="mt-1">Finalize details page</div>
                        </>
                      );
                    })}

                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                      <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                        onClick={() => finish()}
                      >
                        Finish
                        {/* clear out state hook values and transfer to /engagement:uid */}
                      </button>
                      <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                        onClick={() => backClick()}
                        ref={cancelButtonRef}
                      >
                        Back
                      </button>
                    </div>
                  </div>
                ))}
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
