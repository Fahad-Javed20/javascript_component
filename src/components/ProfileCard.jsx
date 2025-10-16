import React from "react";

export default function ProfileCard() {
  return (
    <div>
      <div className="bg-slate-800 h-120 w-96 mt-15">
        <div className="bg-slate-800 size-50 rounded-full relative -top-15 mx-auto flex justify-center items-center">
          <div className="bg-gradient-to-b from-blue-400 to-green-400 size-48 rounded-full flex justify-center items-center">
            <img
              className="size-45 rounded-full"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
              alt=""
            />
          </div>
        </div>

        <div className="-mt-10">
          <h1 className="text-gray-400 text-2xl">Thomas Scheer</h1>
          <h1 className="text-gray-400">Digital Markiter</h1>
        </div>
        <div className="mt-10">
          <h1 className="text-white font-normal text-xl">About Me</h1>
        </div>
        <div className="flex justify-center items-center mx-10">
          <h1 className="text-gray-400 mt-7 text-base/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt 
          </h1>
        </div>
        <div>
            <button className="bg-slate-700 text-white px-6 py-2 mt-14 rounded-3xl">Add User</button>
        </div>
      </div>
    </div>
  );
}
