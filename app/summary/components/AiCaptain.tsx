import Image from "next/image";
import { useState } from "react";

function AiCaptain() {
  const [show, setshow] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-2 p-3 bg-white border-b rounded-b-lg border-x">
        <button
          onClick={() => {
            setshow(true);
          }}
          className="w-full p-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-300 bg-teal-500 rounded-lg hover:bg-teal-600"
        >
          Help from AI Captain
        </button>
      </div>
      {show ? (
        <>
          <div className="flex flex-col gap-2 p-3 bg-white border-b rounded-b-lg border-x">
            <p className="flex justify-center mb-4 text-xs tracking-wide uppercase text-slate-500">
              Quality Score&reg;
            </p>
            <div className="flex justify-center">
              <Image
                alt="Quality Score&copy;"
                className=""
                height="200"
                width="200"
                src="/guage.png"
              />
            </div>
            <p className="flex justify-center gap-1">
              This application has a{" "}
              <span className="font-semibold">40% probability</span> of STPi
            </p>
          </div>
          <div className="flex flex-col gap-4 p-6 overflow-y-scroll border-b scrollbar-thin bg-slate-50 border-x h-80 scrollbar-thumb-slate-500 scrollbar-track-slate-200">
            <div className="flex justify-end">
              <div className="w-2/3 p-4 rounded-lg bg-slate-200">
                👋 Hi Barry! It&apos;s me,{" "}
                <span className="font-semibold">AI Captain</span>. I&apos;m an
                AI model that can chat to you to improve the chances of success
                on this app. I noticed your Quality Score&reg; is currently 20.
                I can help you improve it, if you would like my help just ask.
              </div>
            </div>
            <div className="flex">
              <div className="w-2/3 p-4 text-white bg-blue-600 rounded-lg">
                So how do i fix it then?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="w-2/3 p-4 rounded-lg bg-slate-200">
                The best way to improve the Quality Score&reg; on this
                application is to complete the todo items.
              </div>
            </div>
            <div className="flex justify-center w-full">
              <div className="p-4 text-sm border rounded-lg text-slate-500">
                🚀 Quality Score&copy; up by 37 points.
              </div>
            </div>
            <div className="flex justify-end">
              <div className="w-2/3 p-4 rounded-lg bg-slate-200">
                Well done Barry, the Quality Score&copy; is now at 57. You can
                improve his by elaborating on the{" "}
                <span className="font-semibold text-teal-500 underline transition duration-300 cursor-pointer hover:text-teal-400">
                  required action
                </span>{" "}
                for Malcolms retirement exit plan.
              </div>
            </div>
            <div className="flex">
              <div className="w-2/3 p-4 text-white bg-blue-600 rounded-lg">
                Aye aye captain!
              </div>
            </div>

            <div className="flex justify-end ">
              <div className="w-2/3 p-4 rounded-lg bg-slate-200">
                🫡 Roger that.
              </div>
            </div>
          </div>

          <div className="p-3 bg-white border-b rounded-b-lg border-x">
            <input
              type="text"
              placeholder="Type your reply..."
              className="block w-full px-4 py-3 text-lg border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 "
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col py-8 bg-white border rounded-t-lg">
            <p className="flex justify-center mb-4 text-xs tracking-wide uppercase text-slate-500">
              Quality Score&reg;
            </p>
            <div className="flex justify-center">
              <Image
                alt="Quality Score&copy;"
                className=""
                height="200"
                width="200"
                src="/guage.png"
              />
            </div>
            <p className="flex justify-center gap-1">
              This application has a{" "}
              <span className="font-semibold">40% probability</span> of STPi
            </p>
          </div>
          <div className="flex flex-col gap-2 p-5 bg-white border-b border-x">
            <div className="p-3 transition duration-300 border rounded-lg cursor-pointer bg-slate-100 hover:bg-white hover:border border-slate-100">
              Malcolm requires an improved retirement strategy
            </div>
            <div className="p-3 transition duration-300 border rounded-lg cursor-pointer bg-slate-100 hover:bg-white hover:border border-slate-100">
              Kate ID has a name that doesn&apos;t match applicant
            </div>
            <div className="p-3 transition duration-300 border rounded-lg cursor-pointer bg-slate-100 hover:bg-white hover:border border-slate-100">
              Fairline Yachts have not uploaded their company docs
            </div>
            <button className="w-full p-4 mt-2 text-xs font-semibold tracking-widest text-teal-500 uppercase transition duration-300 bg-white border border-teal-500 rounded-lg hover:text-white hover:bg-teal-600">
              View 3 more
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default AiCaptain;
