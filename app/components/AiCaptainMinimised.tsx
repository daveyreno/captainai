// import Image from "next/image";
"use client";
import ReactSpeedometer from "react-d3-speedometer";

function AiCaptainMinimised() {
  return (
    <div className="">
      <div className="flex flex-col py-8 bg-white border rounded-t-lg">
        <p className="flex justify-center mb-4 text-xs tracking-wide uppercase text-slate-500">
          Quality ScoreⓇ
        </p>

        <div className="flex justify-center">
          <ReactSpeedometer
            maxValue={100}
            value={40}
            forceRender={true}
            needleColor="black"
            startColor="green"
            segments={10}
            endColor="red"
          />
          {/* <Image
            alt="Quality ScoreⓇ"
            className=""
            height="200"
            width="200"
            src="/guage.png"
          /> */}
        </div>

        <p className="flex justify-center gap-1">
          This application has a{" "}
          <span className="font-semibold">40% probability</span> of MIR
        </p>
      </div>

      <div className="flex flex-col gap-2 p-5 bg-white border-b border-x">
        <div className="p-3 transition duration-300 border rounded-lg cursor-pointer bg-slate-100 hover:bg-white hover:border border-slate-100">
          Malcolm requires an improved retirement strategy
        </div>
        <div className="p-3 transition duration-300 border rounded-lg cursor-pointer bg-slate-100 hover:bg-white hover:border border-slate-100">
          Marys ID has a name that doesn't match applicant
        </div>
        <div className="p-3 transition duration-300 border rounded-lg cursor-pointer bg-slate-100 hover:bg-white hover:border border-slate-100">
          Fairline Yachts have not uploaded their company docs
        </div>
        <div className="flex justify-center p-3 text-sm text-teal-500 border rounded-lg border-slate-100">
          View 2 More
        </div>
      </div>

      <div className="flex flex-col p-3 bg-white border-b rounded-b-lg border-x">
        <button className="w-full p-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-300 bg-teal-500 rounded-lg hover:bg-teal-600">
          Help from AI Captain
        </button>
      </div>
    </div>
  );
}

export default AiCaptainMinimised;
