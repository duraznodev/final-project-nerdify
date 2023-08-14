import { Dropdown, NavItem } from "@/Components";
import extractUserMediaUrls from "@/helpers/extractUserMediaUrls";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

function locationPathIncludes(text) {
  return window.location.pathname.includes(text);
}

export default function Layout({ children, user }) {
  const authMedia = extractUserMediaUrls(user);

  return (
    <div className="flex flex-col">
      <nav className="sticky top-0  flex w-full justify-between bg-white p-6 shadow-[0px_-1px_0px_0px_#E2E2EA_inset]">
        <Link href="/" className="flex cursor-pointer items-center gap-x-0.5">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_0_19444)">
              <rect
                x="2"
                y="3"
                width="24"
                height="24"
                rx="8"
                stroke="#0073FF"
                strokeWidth="4"
              />
              <rect
                x="13"
                y="4"
                width="12"
                height="12"
                rx="6"
                stroke="#0073FF"
                strokeWidth="4"
              />
            </g>
          </svg>
          <span className="text-xl font-semibold text-zinc-700">Square</span>
        </Link>
        <div className="flex items-center gap-x-6">
          <Link href="/notifications" className="relative">
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
                d="M14.98 4.64094C14.8026 3.15337 13.5367 2 12.0013 2C10.466 2 9.2 3.15337 9.02257 4.64094C6.5199 5.77546 4.77908 8.29555 4.77908 11.2222V16.2399L3.10858 19.5494C2.77286 20.2145 3.25626 21 4.0013 21H9.17201C9.58385 22.1652 10.6951 23 12.0013 23C13.3075 23 14.4188 22.1652 14.8306 21H20.0013C20.7463 21 21.2297 20.2145 20.894 19.5494L19.2235 16.2399V11.2222C19.2235 8.29555 17.4827 5.77546 14.98 4.64094ZM17.3308 16.9286L18.3764 19H5.62623L6.6718 16.9286C6.74234 16.7888 6.77908 16.6345 6.77908 16.478V11.2222C6.77908 8.33807 9.11715 6 12.0013 6C14.8855 6 17.2235 8.33807 17.2235 11.2222V16.478C17.2235 16.6345 17.2603 16.7888 17.3308 16.9286Z"
                fill="#92929D"
              />
            </svg>
            <svg
              className="absolute right-0 top-0"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 8C21.2091 8 23 6.20914 23 4C23 1.79086 21.2091 0 19 0C16.7909 0 15 1.79086 15 4C15 6.20914 16.7909 8 19 8Z"
                fill="#FC5A5A"
              />
            </svg>
          </Link>
          <div className="flex gap-x-1">
            <Link
              href={`/u/${user.username}`}
              className="h-8 w-8 overflow-hidden rounded-full bg-gray-300"
            >
              <img
                src={authMedia.avatar}
                className="h-full w-full object-cover object-center"
              />
            </Link>
            <Dropdown>
              <Dropdown.Trigger>
                <button className="p-2">
                  <svg
                    width="11"
                    height="8"
                    viewBox="0 0 11 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.98762 0.461304C10.2559 0.461304 10.4051 0.771682 10.2375 0.981206L5.44196 6.97562C5.31386 7.13575 5.07031 7.13575 4.94221 6.97562L0.146672 0.981206C-0.0209475 0.771682 0.128228 0.461304 0.39655 0.461304L9.98762 0.461304Z"
                      fill="#92929D"
                    />
                  </svg>
                </button>
              </Dropdown.Trigger>

              <Dropdown.Content>
                <Dropdown.Link href={`/u/${user.username}`}>
                  Profile
                </Dropdown.Link>
                <Dropdown.Link href={route("logout")} method="post" as="button">
                  Log Out
                </Dropdown.Link>
              </Dropdown.Content>
            </Dropdown>
          </div>
        </div>
      </nav>
      <div className="flex flex-1">
        <div className="min-h-full w-64 flex-shrink-0"></div>
        <aside className="fixed top-20 min-h-full w-64 bg-white ">
          <Link
            href={`/u/${user.username}`}
            className="mx-2.5 my-5 flex items-center gap-x-2.5 rounded-2xl border border-zinc-200 bg-neutral-50 p-3"
          >
            <img
              src={authMedia.avatar}
              className="h-8 w-8 rounded-full bg-gray-300 object-cover"
            />
            <div>
              <div className="text-sm font-semibold tracking-tight text-gray-900">
                {user.name}
              </div>
              <div className="text-xs font-normal text-neutral-400">
                @{user.username}
              </div>
            </div>
          </Link>
          <div className="flex flex-col gap-y-4">
            <NavItem
              href="/"
              active={window.location.pathname === "/"}
              type="feed"
            >
              Feed
            </NavItem>
            <NavItem
              href="/friends"
              active={locationPathIncludes("friends")}
              type="friends"
            >
              Friends
            </NavItem>
            <NavItem
              href="/photos"
              active={locationPathIncludes("photos")}
              type="photos"
            >
              Photos
            </NavItem>
            <NavItem
              href="/explore"
              active={locationPathIncludes("explore")}
              type="explore"
            >
              Explore
            </NavItem>
          </div>
        </aside>
        {children}
      </div>
    </div>
  );
}
