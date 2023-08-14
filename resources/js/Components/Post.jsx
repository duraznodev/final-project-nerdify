import extractUserMediaUrls from "@/helpers/extractUserMediaUrls";
import { Link } from "@inertiajs/react";
import clsx from "clsx";
import { PostCommentForm, Comment } from ".";
import { useState } from "react";

export default function Post({
  author,
  description,
  media,
  updated_at,
  likes_count,
  comments,
  saved_by_count,
  id,
}) {
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [state, setState] = useState({
    liked: false,
    saved: false,
    likes_count,
    saved_by_count,
    comments,
  });

  const authorMedia = extractUserMediaUrls(author);
  function handleLike() {
    axios.post(`/posts/${id}/like`).then((res) => {
      setState((prevState) => ({
        ...prevState,
        liked: res.data.liked,
        likes_count: res.data.likes_count,
      }));
    });
  }

  function handleSave() {
    axios.post(`/posts/${id}/save`).then((res) => {
      console.log(res.data);
      setState((prevState) => ({
        ...prevState,
        saved: res.data.saved,
        saved_by_count: res.data.saves_count,
      }));
    });
  }

  return (
    <div className="rounded-2xl bg-white ">
      <div className="mx-5 mt-5 flex justify-between">
        <div className="flex gap-x-2.5">
          <Link
            className="h-10 w-10 rounded-full bg-gray-300"
            href={`/u/${author.username}`}
          >
            {!!authorMedia.avatar && (
              <img
                className="h-full w-full rounded-full object-cover object-center"
                src={authorMedia.avatar}
              />
            )}
          </Link>
          <div className="flex flex-col gap-y-1">
            <Link
              href={`/u/${author.username}`}
              className="text-sm font-semibold"
            >
              {author.name}
            </Link>
            <span className="s text-xs text-neutral-400">{updated_at}</span>
          </div>
        </div>
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Component/icon/ic_More">
              <g id="Vector">
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
              </g>
            </g>
          </svg>
        </button>
      </div>
      <div className="mx-5 mt-5">
        <p className="w-[570px] text-sm text-zinc-700">{description}</p>
        {!!media.length && (
          <div className="mt-4 grid h-80 w-full grid-cols-2 grid-rows-2 gap-4">
            {media.slice(0, 3).map((m, i) => {
              return (
                <img
                  key={m.id}
                  className={clsx(
                    "h-full w-full place-content-center rounded-2xl bg-gray-300 object-cover",
                    {
                      "col-span-1 row-span-2": i === 0,
                    },
                  )}
                  src={m.original_url}
                />
              );
            })}
          </div>
        )}
        <div className="mt-5 flex border-t border-gray-100">
          <button
            onClick={handleLike}
            className="flex items-center gap-x-2.5 p-5"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Likes">
                <path
                  id="Combined Shape Copy"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 4.12905L12.2215 3.9013C14.6871 1.36623 18.6965 1.36623 21.1621 3.9013C23.6126 6.42082 23.6126 10.4946 21.1621 13.0141L13.4337 20.9602C12.6636 21.752 11.3974 21.7696 10.6056 20.9994C10.5857 20.98 10.5857 20.98 10.5663 20.9602L2.83787 13.0141C0.387375 10.4946 0.387375 6.42082 2.83787 3.9013C5.3035 1.36623 9.31287 1.36623 11.7785 3.9013L12 4.12905ZM19.7284 11.6196C21.4239 9.87644 21.4239 7.03895 19.7284 5.29574C18.0481 3.56809 15.3355 3.56809 13.6552 5.29574L12.7169 6.26053C12.3242 6.66424 11.6758 6.66424 11.2831 6.26053L10.3448 5.29574C8.66445 3.56809 5.95192 3.56809 4.27159 5.29574C2.57614 7.03895 2.57614 9.87644 4.27159 11.6196L12 19.5657L19.7284 11.6196Z"
                  fill={state.liked ? "#dc2626" : "#92929D"}
                />
              </g>
            </svg>
            <span className="text-sm font-normal leading-normal tracking-tight text-zinc-700">
              {state.likes_count} Likes
            </span>
          </button>
          <button className="flex items-center gap-x-2.5 p-5">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="ic_comment">
                <g id="Comments">
                  <path
                    id="Path"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.5139 18.2841L8.06545 21.6848C7.0587 22.4545 5.61004 21.7355 5.60796 20.4701L5.60414 18.1541C3.53288 17.656 2 15.7858 2 13.564V7.72006C2 5.11409 4.10604 3 6.70588 3H17.2941C19.894 3 22 5.11409 22 7.72006V13.564C22 16.17 19.894 18.2841 17.2941 18.2841H12.5139ZM7.60639 19.5183L11.5682 16.4896C11.7426 16.3563 11.956 16.2841 12.1755 16.2841H17.2941C18.7877 16.2841 20 15.0671 20 13.564V7.72006C20 6.21696 18.7877 5 17.2941 5H6.70588C5.21232 5 4 6.21696 4 7.72006V13.564C4 15.0388 5.16906 16.243 6.63013 16.2831C7.17089 16.2979 7.60181 16.7401 7.6027 17.281L7.60639 19.5183Z"
                    fill="#92929D"
                  />
                </g>
              </g>
            </svg>
            <span className="text-sm font-normal leading-normal tracking-tight text-zinc-700">
              {comments.length} Comments
            </span>
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-x-2.5 p-5"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Saved">
                <path
                  id="Rectangle 92"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.85738 1.04762H17.1431C19.247 1.04762 20.9526 2.7532 20.9526 4.85715V20.2119C20.9526 21.2639 20.0998 22.1167 19.0479 22.1167C18.6153 22.1167 18.1956 21.9694 17.8579 21.6992L12.5002 17.4125L7.1426 21.6992C6.32119 22.3564 5.12253 22.2233 4.46532 21.4019C4.19508 21.0642 4.04785 20.6445 4.04785 20.2119V4.85715C4.04785 2.7532 5.75343 1.04762 7.85738 1.04762ZM7.85738 2.95238C6.8054 2.95238 5.95261 3.80518 5.95261 4.85715V20.2119L11.3102 15.9253C12.0059 15.3686 12.9945 15.3686 13.6902 15.9253L19.0479 20.2119V4.85715C19.0479 3.80518 18.1951 2.95238 17.1431 2.95238H7.85738Z"
                  fill={state.saved ? "#eab308" : "#92929D"}
                />
              </g>
            </svg>
            <span className="text-sm font-normal leading-normal tracking-tight text-zinc-700">
              {state.saved_by_count} Saved
            </span>
          </button>
        </div>
      </div>
      <PostCommentForm postId={id} />
      {comments.length > 0 &&
        comments.slice(0, 1).map((c) => <Comment key={c.id} {...c} />)}
      {comments.length > 1 && (
        <div>
          {commentsOpen ? (
            <div>
              {comments.map((c) => (
                <Comment key={c.id} {...c} />
              ))}
              <button
                onClick={() => setCommentsOpen(false)}
                className="mx-5 mb-2 font-secondary  font-medium text-zinc-600"
              >
                Close all comments
              </button>
            </div>
          ) : (
            <button
              onClick={() => setCommentsOpen(true)}
              className="mx-5 mb-2 font-secondary  font-medium text-zinc-600"
            >
              See more coments...
            </button>
          )}
        </div>
      )}
    </div>
  );
}
