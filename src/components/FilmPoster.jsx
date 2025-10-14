import React from "react";

export default function FilmPoster() {
  return (
    <div className="flex justify-center">
      <div className="bg-white shadow-2xl h-140 w-5/6">
        <div className="flex justify-between mx-10 mt-5">
          <h1 className="text-black font-bold text-3xl">
            Star Wars:The Last Jedi
          </h1>
          <h1 className="font-bold">
            <span className="text-blue-500">7.5/</span>
            10
          </h1>
        </div>

        <div className="flex justify-start pl-10">
          <h1 className="text-blue-500 text-xl  ">Action & Adventure</h1>
        </div>

        <div className="flex mt-3 ">
          <div className=" h-96 w-1/3 flex justify-center">
            <img
              className="h-full w-74"
              src="https://2.bp.blogspot.com/-Ez37aK4T0Ls/WiwEPNDo98I/AAAAAAAA6Zo/z47z487zgY4lNkkBajPKLIU6Wi5culxWACLcBGAs/s1600/Star+Wars+The+Last+Jedi+DOLBY+Cinema+Theatrical+One+Sheet+Movie+Poster.jpg"
              alt=""
            />
          </div>
          <div className=" h-96 w-2/3 flex flex-col items-start pl-5">
            <h1 className="font-semibold">About the Movie</h1>
            <h1 className=" self-end pr-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae aliquid ex perferendis cupiditate distinctio! Quia
              magnam nihil est vel vero quaerat nesciunt, minima in impedit
              laborum, facilis voluptates a rerum. Enim nam quis dignissimos
              facere accusantium quasi commodi, harum praesentium totam quae.
              Consectetur cumque ratione provident quaerat, sit tenetur placeat
              deserunt inventore voluptatibus beatae ab aliquid, expedita nam
              unde.
            </h1>

             <div className="grid grid-cols-3 h-60 self-stretch w-160 mt-6">
            <div className=" flex flex-col items-start">
                <h1 className="font-bold">Actors</h1>
                <h1 className="text-blue-500 font-semibold">Oscar Isacc</h1>
                <h1 className="text-blue-500 font-semibold">Mark Hamil</h1>
                <h1 className="text-blue-500 font-semibold">Daisy Haidlay</h1>
                <h1 className="text-blue-500 font-semibold">Jhon Boyaga</h1>
                <h1 className="text-blue-500 font-semibold">Kelly Merie tran</h1>
                <h1 className="font-bold mt-4">More...</h1>
                
            </div>
            <div className=" flex flex-col items-start">
                <h1 className="font-bold">Directors</h1>
                <h1 className="text-blue-500 font-semibold">Oscar Isacc</h1>
                <h1 className="text-blue-500 font-semibold">Mark Hamil</h1>
                <h1 className="font-bold">Directors</h1>
                <h1 className="text-blue-500 font-semibold">Daisy Haidlay</h1>
                
            </div>
            <div className=" flex flex-col items-start">
                <h1 className="font-bold">Producers</h1>
                <h1 className="text-blue-500 font-semibold">kathleen Kennedy</h1>
                <h1 className="text-blue-500 font-semibold">Ram Bergman</h1>
                <h1 className="text-blue-500 font-semibold">Daisy Haidlay</h1>
                
            </div>
          </div>

          </div>

         
        </div>
        <div>
            
        </div>
          <div className="mt-6 flex gap-54 px-4">
            <h1 className="font-bold">$15</h1>
            <button className="bg-white border-3 rounded-2xl px-6 py-1 font-bold -mt-2">Buy</button>
          </div>

          <div className="flex justify-end items-end relative bottom-10 right-6">  
            <button className="bg-black text-white px-10 py-2 rounded-3xl">Watch Trailer </button>

          </div>
      </div>
    </div>
  );
}
