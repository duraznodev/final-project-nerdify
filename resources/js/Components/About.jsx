import clsx from "clsx";
import { AboutItems } from ".";

export default function About({ user, className }) {
  return (
    <div className={clsx("rounded-2xl bg-white", className)}>
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3.5">
        <span className="text-sm font-medium">About Me</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14C6.10457 14 7 13.1046 7 12Z"
            fill="#92929D"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12Z"
            fill="#92929D"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14C20.1046 14 21 13.1046 21 12Z"
            fill="#92929D"
          />
        </svg>
      </div>
      {!!user.bio && (
        <>
          <p className="px-5 py-4 font-secondary text-sm text-zinc-700">
            {user.bio}
          </p>
          <div className="mx-4 min-h-[2px] flex-1 bg-gray-100"></div>
        </>
      )}
      <AboutItems
        items={{
          location: user.location,
          website: user.website,
          joinDate: user.created_at,
          work: user.work,
          relationship: user.relationship,
        }}
      />
    </div>
  );
}
