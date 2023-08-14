import extractUserMediaUrls from "@/helpers/extractUserMediaUrls";
import { Link, usePage } from "@inertiajs/react";
import axios from "axios";
import { useRef } from "react";

export default function PostCommentForm({ postId }) {
  const {
    auth: { user },
  } = usePage().props;

  const submitButton = useRef(null);

  const authMedia = extractUserMediaUrls(user);

  function handleTextAreaChange({ target }) {
    target.style.height = "0px";
    const scrollHeight = target.scrollHeight;
    target.style.height = scrollHeight + "px";
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!e.target.body.value.trim()) return;
    axios.post(`/posts/${postId}/comment`, {
      body: e.target.body.value,
    });
  }

  return (
    <div className="flex items-start gap-x-2 border-t border-gray-100 p-4">
      <Link className="h-9 w-9 rounded-full bg-gray-300">
        <img
          className="h-full w-full rounded-full object-cover"
          src={authMedia.avatar}
        />
      </Link>
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-1 items-start"
      >
        <textarea
          name="body"
          onChange={handleTextAreaChange}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              submitButton.current.click();
            }
          }}
          rows={1}
          maxLength={280}
          className="w-full resize-none overflow-hidden rounded-2xl border border-gray-200 bg-neutral-50 pe-10  placeholder:text-sm placeholder:text-neutral-400"
          placeholder="Write your comment…"
        ></textarea>
        <button ref={submitButton} type="submit" hidden></button>
        {/* TODO */}
        {/* <button
          type="button"
          className="2 absolute right-0 top-1/2 -translate-y-1/2 px-4 py-2.5"
        >
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
              d="M22.5 18.65C22.5 20.5061 20.9274 22 19 22H5C3.07258 22 1.5 20.5061 1.5 18.65V5.35C1.5 3.49395 3.07258 2 5 2H19C20.9274 2 22.5 3.49395 22.5 5.35V18.65ZM21.5 15.0708L16.7865 10.775L12.0725 15.0284L17.4604 21H19C20.3863 21 21.5 19.942 21.5 18.65V15.0708ZM21.5 13.7178V5.35C21.5 4.05803 20.3863 3 19 3H5C3.61372 3 2.5 4.05803 2.5 5.35V17.445L8.31356 11.646C8.51602 11.444 8.84633 11.4527 9.0379 11.6651L11.4026 14.2859L16.4533 9.72878C16.6443 9.55643 16.9349 9.55716 17.125 9.73045L21.5 13.7178ZM16.1135 21L8.64759 12.7253L2.50884 18.8487C2.61604 20.0487 3.68548 21 5 21H16.1135ZM8.19048 8.7C7.12564 8.7 6.2619 7.83843 6.2619 6.775C6.2619 5.71157 7.12564 4.85 8.19048 4.85C9.25532 4.85 10.119 5.71157 10.119 6.775C10.119 7.83843 9.25532 8.7 8.19048 8.7ZM8.19048 7.7C8.70359 7.7 9.11905 7.28558 9.11905 6.775C9.11905 6.26442 8.70359 5.85 8.19048 5.85C7.67736 5.85 7.2619 6.26442 7.2619 6.775C7.2619 7.28558 7.67736 7.7 8.19048 7.7Z"
              fill="#92929D"
            />
          </svg>
        </button> */}
      </form>
    </div>
  );
}
