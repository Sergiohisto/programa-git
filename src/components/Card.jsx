import React from "react";

function Card() {
  return (
    <div className="bg-green-300 rounded-[45px] border border-black max-w-[520px]">
      <div className="grid grid-cols-3 grid-rows-3 gap-2 h-[300px] w-full p-12">
        <div className=" bg-amber-300">titulo</div>
        <div className="bg-red-300 col-span-2 row-span-2">imagen</div>
        <div className="bg-blue-200">mas info</div>
      </div>
    </div>
  );
}

export default Card;
