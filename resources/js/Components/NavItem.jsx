import { Link } from "@inertiajs/react";
import clsx from "clsx";

const icons = {
  feed: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="ic_Dashboard">
        <g id="Vector">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 12H6C3.79086 12 2 13.7909 2 16V18C2 20.2091 3.79086 22 6 22H7C9.20914 22 11 20.2091 11 18V16C11 13.7909 9.20914 12 7 12ZM4 16C4 14.8954 4.89543 14 6 14H7C8.10457 14 9 14.8954 9 16V18C9 19.1046 8.10457 20 7 20H6C4.89543 20 4 19.1046 4 18V16Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 5.5C9 3.567 7.433 2 5.5 2C3.567 2 2 3.567 2 5.5V6.5C2 8.433 3.567 10 5.5 10C7.433 10 9 8.433 9 6.5V5.5ZM4 5.5C4 4.67157 4.67157 4 5.5 4C6.32843 4 7 4.67157 7 5.5V6.5C7 7.32843 6.32843 8 5.5 8C4.67157 8 4 7.32843 4 6.5V5.5Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 11H17C14.7909 11 13 12.7909 13 15V18C13 20.2091 14.7909 22 17 22H18C20.2091 22 22 20.2091 22 18V15C22 12.7909 20.2091 11 18 11ZM15 15C15 13.8954 15.8954 13 17 13H18C19.1046 13 20 13.8954 20 15V18C20 19.1046 19.1046 20 18 20H17C15.8954 20 15 19.1046 15 18V15Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.5 2H14.5C12.567 2 11 3.567 11 5.5C11 7.433 12.567 9 14.5 9H18.5C20.433 9 22 7.433 22 5.5C22 3.567 20.433 2 18.5 2ZM13 5.5C13 4.67157 13.6716 4 14.5 4H18.5C19.3284 4 20 4.67157 20 5.5C20 6.32843 19.3284 7 18.5 7H14.5C13.6716 7 13 6.32843 13 5.5Z"
            fill="currentColor"
          />
        </g>
      </g>
    </svg>
  ),
  friends: (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Component/icon/ic_Friends">
        <path
          id="Shape"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 7.55591C10.3431 7.55591 9 6.21276 9 4.55591C9 2.89905 10.3431 1.55591 12 1.55591C13.6569 1.55591 15 2.89905 15 4.55591C15 6.21276 13.6569 7.55591 12 7.55591ZM12 5.55591C12.5523 5.55591 13 5.10819 13 4.55591C13 4.00362 12.5523 3.55591 12 3.55591C11.4477 3.55591 11 4.00362 11 4.55591C11 5.10819 11.4477 5.55591 12 5.55591ZM11 7.55591H13C14.6569 7.55591 16 8.89905 16 10.5559V11.5559C16 13.2128 14.6569 14.5559 13 14.5559H11C9.34315 14.5559 8 13.2128 8 11.5559V10.5559C8 8.89905 9.34315 7.55591 11 7.55591ZM11 9.55591C10.4477 9.55591 10 10.0036 10 10.5559V11.5559C10 12.1082 10.4477 12.5559 11 12.5559H13C13.5523 12.5559 14 12.1082 14 11.5559V10.5559C14 10.0036 13.5523 9.55591 13 9.55591H11ZM19 16.5559C17.3431 16.5559 16 15.2128 16 13.5559C16 11.8991 17.3431 10.5559 19 10.5559C20.6569 10.5559 22 11.8991 22 13.5559C22 15.2128 20.6569 16.5559 19 16.5559ZM19 14.5559C19.5523 14.5559 20 14.1082 20 13.5559C20 13.0036 19.5523 12.5559 19 12.5559C18.4477 12.5559 18 13.0036 18 13.5559C18 14.1082 18.4477 14.5559 19 14.5559ZM18 16.5559H20C21.6569 16.5559 23 17.8991 23 19.5559V20.5559C23 22.2128 21.6569 23.5559 20 23.5559H18C16.3431 23.5559 15 22.2128 15 20.5559V19.5559C15 17.8991 16.3431 16.5559 18 16.5559ZM18 18.5559C17.4477 18.5559 17 19.0036 17 19.5559V20.5559C17 21.1082 17.4477 21.5559 18 21.5559H20C20.5523 21.5559 21 21.1082 21 20.5559V19.5559C21 19.0036 20.5523 18.5559 20 18.5559H18ZM5 16.5559C3.34315 16.5559 2 15.2128 2 13.5559C2 11.8991 3.34315 10.5559 5 10.5559C6.65685 10.5559 8 11.8991 8 13.5559C8 15.2128 6.65685 16.5559 5 16.5559ZM5 14.5559C5.55228 14.5559 6 14.1082 6 13.5559C6 13.0036 5.55228 12.5559 5 12.5559C4.44772 12.5559 4 13.0036 4 13.5559C4 14.1082 4.44772 14.5559 5 14.5559ZM4 16.5559H6C7.65685 16.5559 9 17.8991 9 19.5559V20.5559C9 22.2128 7.65685 23.5559 6 23.5559H4C2.34315 23.5559 1 22.2128 1 20.5559V19.5559C1 17.8991 2.34315 16.5559 4 16.5559ZM4 18.5559C3.44772 18.5559 3 19.0036 3 19.5559V20.5559C3 21.1082 3.44772 21.5559 4 21.5559H6C6.55228 21.5559 7 21.1082 7 20.5559V19.5559C7 19.0036 6.55228 18.5559 6 18.5559H4Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),
  photos: (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Component/icon/ic_Photos">
        <path
          id="Shape"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 15.1727V19.1118C23 21.321 21.2091 23.1118 19 23.1118H5C2.79086 23.1118 1 21.321 1 19.1118V5.11182C1 2.90268 2.79086 1.11182 5 1.11182H19C21.2091 1.11182 23 2.90268 23 5.11182V15.0509C23.0025 15.0915 23.0025 15.1322 23 15.1727ZM21 15.5243L17.0001 11.5259L13.2201 15.3059L18.4454 21.1118H19C20.1046 21.1118 21 20.2164 21 19.1118V15.5243ZM21 12.6964V5.11182C21 4.00725 20.1046 3.11182 19 3.11182H5C3.89543 3.11182 3 4.00725 3 5.11182V16.6976L8.29289 11.4047C8.69802 10.9996 9.36002 11.017 9.74329 11.4429L11.8803 13.8173L16.2929 9.40471C16.6834 9.01424 17.3164 9.01418 17.707 9.40458L21 12.6964ZM15.7546 21.1118L8.96181 13.5642L3.03576 19.4903C3.21265 20.4139 4.02482 21.1118 5 21.1118H15.7546ZM8.5 9.11182C7.11929 9.11182 6 7.99253 6 6.61182C6 5.2311 7.11929 4.11182 8.5 4.11182C9.88071 4.11182 11 5.2311 11 6.61182C11 7.99253 9.88071 9.11182 8.5 9.11182ZM8.5 7.11182C8.77614 7.11182 9 6.88796 9 6.61182C9 6.33567 8.77614 6.11182 8.5 6.11182C8.22386 6.11182 8 6.33567 8 6.61182C8 6.88796 8.22386 7.11182 8.5 7.11182Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),
  explore: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
      />
    </svg>
  ),
};

export default function NavItem({
  active = false,
  type,
  href = "#",
  children,
}) {
  return (
    <Link
      href={href}
      className={clsx("relative flex items-center gap-x-5 py-1 ps-5", {
        "text-[#0062FF]": active,
        "text-[#92929D]": !active,
      })}
    >
      {active && (
        <div className="absolute left-0 top-1/2 h-6 w-0.5 -translate-y-1/2 rounded-r-lg bg-blue-600"></div>
      )}
      {icons[type]}
      <div
        className={clsx("text-sm font-semibold", {
          "text-[#171725]": !active,
        })}
      >
        {children}
      </div>
    </Link>
  );
  {
    /* <Link
  href="/friends"
  className="flex items-center gap-x-5 py-1 ps-5"
>
  
  <div className="text-sm font-semibold">Friends</div>
</Link>
<Link
  href="/photos"
  className="flex items-center gap-x-5 py-1 ps-5"
>
  
  <div className="text-sm font-semibold">Photos</div>
</Link>; */
  }
}
