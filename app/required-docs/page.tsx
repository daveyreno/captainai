"use client";
import { useState } from "react";
import axios from "axios";

function RequiredDocsPage() {
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File>();
  const [selectImage, setSelectImage] = useState("");

  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append("myImage", selectedFile);
      const { data } = await axios.post("/api/image", formData);
      console.log(data);
      setSelectImage("");
    } catch (error: any) {
      console.log(error.response?.data);
    }
    setUploading(false);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full max-w-6xl gap-4 p-6 md:p-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <h1 className="mb-6 text-4xl font-light">Required Documents</h1>
        </div>

        {/* CONTENT AREA */}
        <div className="flex flex-col">
          <div className="p-3 bg-white border-t border-b rounded-t-lg border-x">
            Filters
          </div>

          <div className="flex items-center justify-between p-6 bg-white border-b cursor-pointer border-x hover:bg-slate-100">
            <div className="text-lg font-semibold ">Forms (4)</div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26"
                viewBox="0 0 24 24"
                id="angle-down"
              >
                <path
                  fill="#%236563FF"
                  d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"
                ></path>
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-between p-6 bg-white border-b cursor-pointer border-x hover:bg-slate-100">
            <div className="text-lg font-semibold ">ID Documents (0/1)</div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26"
                viewBox="0 0 24 24"
                id="angle-up"
              >
                <path
                  fill="#%236563FF"
                  d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"
                ></path>
              </svg>
            </div>
          </div>

          <div className="flex flex-col p-6 border-b border-border-x bg-slate-50 border-x">
            <div className="flex justify-between p-6 text-lg bg-white border cursor-pointer rounded-t-xl hover:bg-slate-100">
              <p>Primary ID - Malcolm</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26"
                viewBox="0 0 24 24"
                id="angle-up"
              >
                <path
                  fill="#%236563FF"
                  d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col justify-end gap-4 p-6 bg-white border-b border-x">
              <label>
                <input
                  type="file"
                  hidden
                  onChange={({ target }) => {
                    if (target.files) {
                      const file = target.files[0];
                      setSelectImage(URL.createObjectURL(file));
                      setSelectedFile(file);
                    }
                  }}
                />
                <div className="w-40 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer">
                  {selectImage ? (
                    <img src={selectImage} alt="" />
                  ) : (
                    <span>select file</span>
                  )}
                </div>
              </label>

              <button
                onClick={handleUpload}
                disabled={uploading}
                style={{ opacity: uploading ? ".5" : "1" }}
                className="w-full p-4 text-sm font-semibold tracking-widest text-white uppercase transition duration-300 bg-teal-500 rounded-lg lg:px-6 hover:bg-teal-600 md:w-fit"
              >
                {uploading ? "UPLOADING.." : "UPLOAD"}
              </button>
            </div>

            <div className="flex flex-col justify-end gap-4 p-6 bg-white border-b border-x">
              <p>Uploading</p>
              <div className="rounded-full bg-slate-200">
                <div className="w-1/3 h-2 bg-teal-500 rounded-full"></div>
              </div>
            </div>

            <div className="flex justify-between gap-4 p-6 bg-white border-b border-x">
              <p>DriversLicence.pdf</p>
              <p>Delete</p>
            </div>

            <div className="flex justify-between p-6 text-lg transition border-b border-x hover:bg-white">
              <p>Primary ID - Mary</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26"
                viewBox="0 0 24 24"
                id="angle-down"
              >
                <path
                  fill="#%236563FF"
                  d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"
                ></path>
              </svg>
            </div>

            <div className="flex justify-between p-6 text-lg border-b border-x rounded-b-xl">
              <p>Secondary ID - Mary</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26"
                viewBox="0 0 24 24"
                id="angle-down"
              >
                <path
                  fill="#%236563FF"
                  d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"
                ></path>
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-between p-6 bg-white border-b cursor-pointer border-x hover:bg-slate-100">
            <div className="text-lg font-semibold ">Income Documents (0/3)</div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26"
                viewBox="0 0 24 24"
                id="angle-down"
              >
                <path
                  fill="#%236563FF"
                  d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-between p-6 bg-white border-b cursor-pointer border-x hover:bg-slate-100">
            <div className="text-lg font-semibold ">
              Security Related Documents (0/3)
            </div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26"
                viewBox="0 0 24 24"
                id="angle-down"
              >
                <path
                  fill="#%236563FF"
                  d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"
                ></path>
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-between p-6 bg-white border-b rounded-b-lg cursor-pointer border-x hover:bg-slate-100">
            <div className="text-lg font-semibold ">
              Not Visible To Customer (0/3)
            </div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26"
                viewBox="0 0 24 24"
                id="angle-down"
              >
                <path
                  fill="#%236563FF"
                  d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequiredDocsPage;
