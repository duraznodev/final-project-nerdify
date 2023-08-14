import { About, EditProfileModal } from "@/Components";
import Portal from "@/Components/Portal";
import ProfileInfo from "@/Components/ProfileInfo";
import { Layout } from "@/Layouts";
import extractUserMediaUrls from "@/helpers/extractUserMediaUrls";
import { useState } from "react";
import Feed from "../Components/Feed";

export default function User({ auth, user, posts, photos }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isFollowing, setIsFollowing] = useState(user.isFollowing);

  const userMedia = extractUserMediaUrls(user);

  function handleFollow() {
    axios.post(`/u/${user.username}/follow`).then((res) => {
      setIsFollowing(res.data.following);
    });
  }

  return (
    <>
      <Layout user={auth.user}>
        <div className="mx-auto mt-8">
          <div className="w-[990px] rounded-b-2xl bg-white">
            <div className="relative  h-64 rounded-t-2xl bg-black">
              {!!userMedia.cover && (
                <img
                  src={userMedia.cover}
                  className="absolute h-64 w-full rounded-t-2xl object-cover object-center opacity-50"
                />
              )}
              {auth.user.id === user.id ? (
                <button
                  onClick={() => setIsOpenModal(true)}
                  className="absolute right-0 m-5 rounded-xl border border-white bg-gray-900 bg-opacity-50 px-4 py-2.5 text-xs font-semibold text-white"
                >
                  Edit Profile
                </button>
              ) : isFollowing ? (
                <button
                  onClick={handleFollow}
                  className="absolute bottom-0 right-0 m-5 rounded-3xl  border border-white bg-blue-600 px-5 py-1.5 font-semibold text-white hover:bg-red-600"
                >
                  Following
                </button>
              ) : (
                <button
                  onClick={handleFollow}
                  className=" absolute bottom-0 right-0 m-5  rounded-3xl border border-blue-600 bg-white px-5 py-1.5 font-semibold text-blue-600"
                >
                  Follow
                </button>
              )}

              <div className="absolute bottom-0 ms-7 flex gap-x-7">
                <img
                  src={userMedia.avatar}
                  className="h-40 w-40 translate-y-1/3 rounded-full border-4 border-white bg-gray-300 object-cover"
                />
                <div className="mb-3 flex flex-col justify-end">
                  <span className="text-2xl font-semibold leading-normal text-neutral-50">
                    {user.name}
                  </span>
                  <span className="leadingRelaxed font-secondary text-zinc-300">
                    @{user.username}
                  </span>
                </div>
              </div>
            </div>
            <div className="me-16 flex justify-end">
              <ProfileInfo active title="Posts" count={user.posts_count} />
              <ProfileInfo title="Followers" count={user.followers_count} />
              <ProfileInfo title="Following" count={user.following_count} />
              <ProfileInfo title="Likes" count={user.liked_posts_count} />
              <ProfileInfo title="Photos" count={user.photos_count} />
              <ProfileInfo title="Saved" count={user.saved_posts_count} />
            </div>
          </div>
          <div className="mt-5 flex h-full gap-x-8">
            <div className="flex w-80 flex-col gap-y-5">
              {auth.user.id === user.id && (
                <div className="flex flex-col rounded-2xl bg-white px-5 py-4">
                  <div className="text-sm font-medium">
                    Complete Your Profile
                  </div>
                  <div className="mt-4 flex gap-x-4">
                    <div className="relative flex flex-1 items-center">
                      <div className="absolute left-0 h-1.5 w-full rounded-lg bg-zinc-200" />
                      <div className="absolute left-0 h-1.5 w-[75%] rounded-bl-lg rounded-tl-lg bg-blue-600" />
                    </div>
                    <div className="text-sm font-medium text-zinc-700">75%</div>
                  </div>
                </div>
              )}
              <About user={user} />
              <div className="rounded-2xl bg-white px-5">
                <div className="flex items-baseline justify-between border-b border-gray-100 py-4">
                  <div className="text-sm font-medium tracking-tight text-gray-900">
                    Photos and Videos
                  </div>
                  <div className="text-xs font-medium uppercase tracking-wide text-blue-600">
                    See All
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2.5 py-5">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={crypto.randomUUID()}
                      className="aspect-square flex-1 rounded-2xl bg-gray-300"
                    >
                      {photos[i] && (
                        <img
                          src={photos[i].original_url}
                          className="aspect-square flex-1 rounded-2xl bg-gray-300 object-cover"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Feed posts={posts} />
          </div>
        </div>
      </Layout>
      {isOpenModal && (
        <Portal>
          <EditProfileModal setIsOpenModal={setIsOpenModal} user={user} />
        </Portal>
      )}
    </>
  );
}
