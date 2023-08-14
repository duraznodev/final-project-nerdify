import extractUserMediaUrls from "@/helpers/extractUserMediaUrls";
import { Link } from "@inertiajs/react";

export default function FriendCard({ user }) {
  const { name, username, bio } = user;
  const userMedia = extractUserMediaUrls(user);

  function handleFollow() {
    axios.post(`/u/${username}/follow`);
  }

  return (
    <div className="h-60 w-[480px] overflow-hidden rounded-2xl bg-white">
      <div className="h-24 overflow-hidden bg-gray-700">
        {!!userMedia.cover && (
          <img src={userMedia.cover} className="h-full w-full object-cover" />
        )}
      </div>
      <div className="flex gap-x-4 px-5 pt-4">
        <Link href={`/u/${username}`}>
          <div className="h-20 w-20 -translate-y-1/2 rounded-full border-2 border-white bg-gray-300">
            {user.avatar && (
              <img
                src={userMedia.avatar}
                className="h-full w-full rounded-full object-cover"
              />
            )}
          </div>
        </Link>
        <div className="flex flex-1 items-start justify-between">
          <div className="flex w-full flex-col">
            <div className="flex items-start justify-between">
              <Link href={`/u/${username}`} className="flex flex-col">
                <div className="text-lg font-semibold ">{name}</div>
                <span className="text-sm text-neutral-400">@{username}</span>
              </Link>
              <button
                onClick={handleFollow}
                className="rounded-xl bg-blue-600 px-3 py-2 text-center text-xs font-semibold text-neutral-50"
              >
                Following
              </button>
            </div>
            <p className="ms-1 mt-1 font-secondary leading-relaxed text-zinc-700">
              {bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
