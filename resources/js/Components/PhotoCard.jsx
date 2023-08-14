import { useState } from "react";

export default function PhotoCard({ original_url }) {
  const [hoverShow, sethoverShow] = useState(false);

  return (
    <div
      onMouseEnter={() => sethoverShow(true)}
      onMouseLeave={() => sethoverShow(false)}
      className=" relative h-52 w-80 overflow-hidden rounded-2xl bg-red-300"
    >
      <img className="h-full w-full object-cover" src={original_url} alt="" />
      {hoverShow && (
        <div className="absolute top-0 flex h-full w-full items-end rounded-b-2xl p-5 opacity-80 [background:linear-gradient(180deg,rgba(122,122,135,0.00)0%,#171725_100%)]">
          <div className="flex items-center gap-x-1.5 font-secondary text-white">
            <button className="text-sm font-semibold">Like</button>
            <div className="h-1 w-1 rounded-full bg-white"></div>
            <button className="text-sm font-semibold">Comment</button>
          </div>
        </div>
      )}
    </div>
  );
}
