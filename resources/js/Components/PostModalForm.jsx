import extractUserMediaUrls from "@/helpers/extractUserMediaUrls";
import { usePage } from "@inertiajs/react";
import { useRef } from "react";

export default function PostModalForm({ setIsOpenModal }) {
  const {
    auth: { user },
  } = usePage().props;
  const imgsRef = useRef(null);

  const authMedia = extractUserMediaUrls(user);

  function handleTextAreaChange({ target }) {
    target.style.height = "0px";
    const scrollHeight = target.scrollHeight;
    target.style.height = scrollHeight + "px";
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post(
      "/posts",
      {
        description: e.target.description.value,
        author_id: user.id,
        images: e.target.images.files,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    setIsOpenModal(false);
  }

  return (
    <div className="flex justify-center">
      <div
        onClick={() => setIsOpenModal(false)}
        className="fixed left-0 top-0 h-screen w-screen bg-gray-900 bg-opacity-30"
      ></div>
      <div className="fixed top-24 ms-[250px] w-[625px] rounded-2xl bg-white">
        <div className="w-full border-b border-[#F1F1F5] py-2.5 ps-5">
          <span className="text-sm font-medium ">Post Something</span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-4"
          encType="multipart/form-data"
        >
          <div className="flex border-b border-gray-100 pb-5">
            <div className="h-9 w-9 rounded-full bg-gray-300">
              {!!authMedia.avatar && (
                <img
                  src={authMedia.avatar}
                  className="h-full w-full rounded-full object-cover"
                />
              )}
            </div>
            <textarea
              name="description"
              onChange={handleTextAreaChange}
              rows={1}
              className="ms-5 flex-1 resize-none border-none p-0 placeholder:translate-y-1 focus:ring-0"
              placeholder="What’s on your mind?"
            ></textarea>
            <svg
              className="ms-2 mt-2"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Character Remaining">
                <path
                  id="Oval"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                  stroke="#D5D5DC"
                  strokeWidth="2"
                />
                <path
                  id="Path"
                  d="M4.32129 18.443C6.0919 20.0328 8.43295 21 10.9999 21C16.5228 21 20.9999 16.5228 20.9999 11C20.9999 5.47715 16.5228 1 10.9999 1"
                  stroke="#0062FF"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </div>
          <input
            ref={imgsRef}
            name="images"
            type="file"
            className="hidden"
            multiple
          />
          <div className="mt-4 flex items-center justify-between">
            <button
              type="button"
              onClick={(e) => {
                imgsRef.current.click();
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="ic_Image">
                  <path
                    id="Shape"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.5 18.65C22.5 20.5061 20.9274 22 19 22H5C3.07258 22 1.5 20.5061 1.5 18.65V5.35C1.5 3.49395 3.07258 2 5 2H19C20.9274 2 22.5 3.49395 22.5 5.35V18.65ZM21.5 15.0708L16.7865 10.775L12.0725 15.0284L17.4604 21H19C20.3863 21 21.5 19.942 21.5 18.65V15.0708ZM21.5 13.7178V5.35C21.5 4.05803 20.3863 3 19 3H5C3.61372 3 2.5 4.05803 2.5 5.35V17.445L8.31356 11.646C8.51602 11.444 8.84633 11.4527 9.0379 11.6651L11.4026 14.2859L16.4533 9.72878C16.6443 9.55643 16.9349 9.55716 17.125 9.73045L21.5 13.7178ZM16.1135 21L8.64759 12.7253L2.50884 18.8487C2.61604 20.0487 3.68548 21 5 21H16.1135ZM8.19048 8.7C7.12564 8.7 6.2619 7.83843 6.2619 6.775C6.2619 5.71157 7.12564 4.85 8.19048 4.85C9.25532 4.85 10.119 5.71157 10.119 6.775C10.119 7.83843 9.25532 8.7 8.19048 8.7ZM8.19048 7.7C8.70359 7.7 9.11905 7.28558 9.11905 6.775C9.11905 6.26442 8.70359 5.85 8.19048 5.85C7.67736 5.85 7.2619 6.26442 7.2619 6.775C7.2619 7.28558 7.67736 7.7 8.19048 7.7Z"
                    fill="#92929D"
                  />
                </g>
              </svg>
            </button>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-7 py-2.5 text-xs font-semibold text-neutral-50"
            >
              Share Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
