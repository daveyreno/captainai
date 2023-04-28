"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
import dl from "./dl.jpeg";
import LoadingSpinner from "../components/Loading";

function ImageViewer() {
  const [dldone, setdldone] = useState(false);
  const [fullmatchdone, setfullmatchdone] = useState(false);
  const [mismatch, setmismatch] = useState(false);
  const [updateApplicantName, setUpdateApplicantName] = useState(false);
  const [updatfilename, setupdatefilename] = useState(false);

  setTimeout(() => {
    setdldone(true);
  }, 1000);

  setTimeout(() => {
    setfullmatchdone(true);
    if (!updateApplicantName) {
      setmismatch(true);
    }
  }, 3000);

  useEffect(() => {
    setmismatch(false);
  }, [updateApplicantName]);

  console.log("setmismatch", mismatch);
  return (
    <div className="p-6">
      <div className="flex items-center justify-between p-6 text-xl font-semibold bg-white border-b border-slate-100 rounded-t-xl">
        <div className="">Document Viewer</div>
        <div className="flex items-center justify-center p-2 transition duration-300 rounded-full cursor-pointer hover:bg-slate-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            viewBox="0 0 24 24"
            id="times"
          >
            <path
              fill="#%236563FF"
              d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="w-full p-6 bg-white border-b border-slate-100 md:border-b-0 md:border-r md:w-3/4 md:rounded-bl-xl">
          <Image src="/images/dl.jpeg" alt={""} width={1000} height={500} />
        </div>
        <div className="w-full p-6 md:w-1/4 bg-slate-50 rounded-br-xl rounded-bl-xl md:rounded-bl-none md:rounded-br-xl">
          <div className="flex flex-col gap-6">
            <h1 className="mb-2 text-xl font-semibold">Image Details</h1>
            <div className="flex flex-col">
              <p className="mb-2 text-sm font-semibold tracking-widest uppercase">
                AI Image Classification
              </p>
              <div className="flex items-center gap-2">
                {dldone ? (
                  <p className="flex justify-center w-20 px-2 py-1 text-sm font-semibold text-white bg-teal-500 rounded-full">
                    Complete
                  </p>
                ) : (
                  <LoadingSpinner />
                )}
                <p>Drivers Licence</p>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="mb-2 text-sm font-semibold tracking-widest uppercase">
                Name Comparison:
              </p>
              {fullmatchdone ? (
                <>
                  {!mismatch || updateApplicantName ? (
                    <div className="flex items-center gap-2">
                      <p className="flex justify-center w-20 px-2 py-1 text-sm font-semibold text-white bg-teal-500 rounded-full">
                        Complete
                      </p>
                      <p>Full Match</p>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <p className="flex justify-center w-20 px-2 py-1 text-sm font-semibold text-white bg-red-500 rounded-full">
                        Warning
                      </p>
                      <p>Mismatch</p>
                    </div>
                  )}
                </>
              ) : (
                <LoadingSpinner />
              )}
            </div>

            {!updateApplicantName && (
              <>
                <div className="flex flex-col gap-2">
                  <div className="">
                    <p className="text-sm">From</p>
                    <p>Emily K</p>
                  </div>
                  <div className="">
                    <p className="text-sm">To</p>
                    <p>Emily Kate</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setTimeout(() => {
                      setUpdateApplicantName(true);
                      setTimeout(() => {
                        setupdatefilename(true);
                      }, 1000);
                    }, 500);
                  }}
                  className="w-full p-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-300 bg-red-500 rounded-lg hover:bg-teal-600"
                >
                  Update applicant name
                </button>
              </>
            )}

            {updateApplicantName && (
              <div className="flex flex-col">
                <p className="mb-2 text-sm font-semibold tracking-widest uppercase">
                  File Rename
                </p>
                {updatfilename ? (
                  <div className="flex items-center gap-2">
                    <p className="flex justify-center w-20 px-2 py-1 text-sm font-semibold text-white bg-teal-500 rounded-full">
                      Complete
                    </p>
                    <p>Emily-Kate-DL.pdf</p>
                  </div>
                ) : (
                  <LoadingSpinner />
                )}
              </div>
            )}

            <button className="w-full p-4 text-xs font-semibold tracking-widest text-teal-500 uppercase transition duration-300 border border-teal-500 rounded-lg hover:text-white hover:bg-teal-600">
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageViewer;
