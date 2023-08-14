import extractUserMediaUrls from "@/helpers/extractUserMediaUrls";
import { Link } from "@inertiajs/react";

export default function Comment({ body, user }) {
  const userMedia = extractUserMediaUrls(user);
  return (
    <div className="flex items-center gap-x-2 border-t border-gray-100 p-4">
      <Link className="h-9 w-9 rounded-full bg-gray-300">
        <img
          src={userMedia.avatar}
          className="h-full w-full rounded-full object-cover"
        />
      </Link>
      <div
        name="description"
        className="flex-1 rounded-2xl border border-gray-200 bg-neutral-50 p-2 placeholder:text-sm placeholder:text-neutral-400"
      >
        <Link href={`/u/${user.username}`} className="text-sm font-medium">
          {user.name}
        </Link>
        <p>{body}</p>
      </div>
    </div>
  );
}
