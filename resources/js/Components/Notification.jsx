export default function Notification() {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white px-5 py-4">
      <div className="flex items-center gap-x-5">
        <div className="h-11 w-11 rounded-full bg-gray-300"></div>
        <div className="flex flex-col">
          <div>
            <span className="font-semibold text-gray-900">Janeta Janet </span>
            <span className="font-normal text-gray-900">posted in </span>
            <span className="font-semibold text-gray-900">UI/UX Community</span>
            <span className="font-bold text-gray-900"> : </span>
            <span className="font-normal text-gray-900">
              “Mobile Apps UI Designer is required for Tech…”
            </span>
          </div>
          <span className="text-sm text-neutral-400">12 Minutes ago</span>
        </div>
      </div>
      <div className="flex gap-x-5">
        <button>
          <svg
            width="35"
            height="34"
            viewBox="0 0 35 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.9178 34C27.3161 34 34.935 26.3888 34.935 17C34.935 7.61116 27.3161 0 17.9178 0C8.5194 0 0.900513 7.61116 0.900513 17C0.900513 26.3888 8.5194 34 17.9178 34Z"
              fill="#FFC542"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.9829 10.1349C20.1052 7.95504 23.5579 7.95504 25.6802 10.1349C27.7874 12.2992 27.7874 15.797 25.6802 17.9613L19.2333 24.583C18.5267 25.3088 17.3648 25.325 16.6382 24.619C16.62 24.6012 16.62 24.6012 16.6022 24.583L10.1553 17.9613C8.04817 15.797 8.04817 12.2992 10.1553 10.1349C12.2776 7.95504 15.7303 7.95504 17.8526 10.1349L17.9178 10.2018L17.9829 10.1349ZM17.9178 23.0657L24.245 16.5668C25.5964 15.1789 25.5964 12.9173 24.245 11.5293C22.9089 10.1569 20.7543 10.1569 19.4181 11.5293L18.6353 12.3333C18.2423 12.737 17.5932 12.737 17.2002 12.3333L16.4174 11.5293C15.0812 10.1569 12.9267 10.1569 11.5905 11.5293C10.2392 12.9173 10.2392 15.1789 11.5905 16.5668L17.9178 23.0657Z"
              fill="#FFC542"
            />
          </svg>
        </button>
        <button>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.96243 12C7.96243 10.8954 7.0661 10 5.9604 10C4.85471 10 3.95837 10.8954 3.95837 12C3.95837 13.1046 4.85471 14 5.9604 14C7.0661 14 7.96243 13.1046 7.96243 12Z"
              fill="#92929D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.9695 12C14.9695 10.8954 14.0732 10 12.9675 10C11.8618 10 10.9655 10.8954 10.9655 12C10.9655 13.1046 11.8618 14 12.9675 14C14.0732 14 14.9695 13.1046 14.9695 12Z"
              fill="#92929D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.9766 12C21.9766 10.8954 21.0803 10 19.9746 10C18.8689 10 17.9726 10.8954 17.9726 12C17.9726 13.1046 18.8689 14 19.9746 14C21.0803 14 21.9766 13.1046 21.9766 12Z"
              fill="#92929D"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
