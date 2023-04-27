import Image from "next/image"

function AiCaptainMinimised() {
    return (
        <div className="">
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
                    Marys ID has a name that doesn&apos;t match applicant
                </div>
                <div className="p-3 transition duration-300 border rounded-lg cursor-pointer bg-slate-100 hover:bg-white hover:border border-slate-100">
                    Fairline Yachts have not uploaded their company docs
                </div>
                <button className="w-full p-4 mt-2 text-xs font-semibold tracking-widest text-teal-500 uppercase transition duration-300 bg-white border border-teal-500 rounded-lg hover:text-white hover:bg-teal-600">
                    View 3 more
                </button>
            </div>
            <div className="flex flex-col gap-2 p-3 bg-white border-b rounded-b-lg border-x">
                <button className="w-full p-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-300 bg-teal-500 rounded-lg hover:bg-teal-600">
                    Help from AI Captain
                </button>
            </div>
        </div>
    );
}

export default AiCaptainMinimised;
