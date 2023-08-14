import { useForm, usePage } from "@inertiajs/react";
import { About, TextInput } from ".";
import { Label } from "react-aria-components";
import { useRef } from "react";
import extractUserMediaUrls from "@/helpers/extractUserMediaUrls";

export default function EditProfileModal({ user, setIsOpenModal }) {
  const avatarRef = useRef();
  const coverRef = useRef();

  const { data, setData, patch, errors } = useForm({
    bio: user.bio,
    location: user.location,
    website: user.website,
    work: user.work,
    relationship: user.relationship,
    email: user.email,
    name: user.name,
    username: user.username,
    avatar: null,
    cover: null,
    _method: "patch",
  });

  const authMedia = extractUserMediaUrls(user);

  function handleSubmit(e) {
    e.preventDefault();

    axios.post("/profile", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    setIsOpenModal(false);
  }

  return (
    <div className="flex justify-center">
      <div
        className="fixed top-0 h-screen w-screen bg-gray-900 bg-opacity-30"
        onClick={() => {
          setIsOpenModal(false);
        }}
      ></div>
      <div className="fixed top-24 w-[960px] rounded-2xl bg-white">
        <div className="w-full border-b border-[#F1F1F5] py-2.5 ps-5">
          <span className="text-sm font-medium ">Edit Your Profile</span>
        </div>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="flex flex-col p-4"
        >
          <div className="relative h-32 rounded-t-2xl bg-black">
            <img
              src={authMedia.cover}
              ref={coverRef}
              className="absolute h-32 w-full rounded-t-2xl object-cover object-center opacity-50"
            />
            <div className="absolute bottom-0 ms-7 flex gap-x-5">
              <img
                src={authMedia.avatar}
                ref={avatarRef}
                className="h-32 w-32 translate-y-1/3 rounded-full border-4 border-white bg-gray-300 object-cover object-center"
              />
              <div className="mb-3 flex flex-col justify-end ">
                <span className="text-xl font-semibold leading-normal text-white ">
                  {data.name}
                </span>
                <span className="leadingRelaxed font-secondary text-sm text-neutral-50 ">
                  @{data.username}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-14 flex ">
            <About user={data} className="flex-1" />
            <div className=" ms-8 flex flex-1 flex-col gap-y-4">
              <textarea
                onChange={(e) => setData("bio", e.target.value)}
                value={data.bio}
                rows={1}
                id="bio"
                name="bio"
                className="h-24 resize-none rounded-2xl border border-gray-600 bg-neutral-50 p-0  py-2 ps-4 shadow-sm placeholder:font-secondary placeholder:text-sm placeholder:text-neutral-400   focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Your bio"
              ></textarea>
              <TextInput
                onChange={(e) => setData("location", e.target.value)}
                placeholder="Your location"
                value={data.location}
                id="location"
                name="location"
                className=" border border-gray-600 placeholder:text-gray-700"
              />
              <TextInput
                onChange={(e) => setData("website", e.target.value)}
                placeholder="Your website"
                value={data.website}
                id="website"
                name="website"
                className=" border border-gray-600 placeholder:text-gray-700"
              />
              <TextInput
                onChange={(e) => setData("work", e.target.value)}
                placeholder="Your work"
                value={data.work}
                id="work"
                name="work"
                className=" border border-gray-600 placeholder:text-gray-700"
              />
              <TextInput
                onChange={(e) => setData("relationship", e.target.value)}
                placeholder="Your relationship"
                value={data.relationship}
                id="relationship"
                name="relationship"
                className=" border border-gray-600 placeholder:text-gray-700"
              />
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-y-3">
            <div className="flex w-full gap-x-4">
              <TextInput
                onChange={(e) => setData("name", e.target.value)}
                placeholder="Your name"
                id="name"
                value={data.name}
                name="name"
                className="flex-1 border border-gray-600 placeholder:text-gray-700"
                isFocused={true}
              />
              <TextInput
                onChange={(e) => setData("username", e.target.value)}
                placeholder="Your username"
                id="username"
                value={data.username}
                name="username"
                className="flex-1 border border-gray-600 placeholder:text-gray-700"
              />
            </div>
            <div className="flex w-full gap-x-4">
              <div className="flex flex-1 items-center gap-x-2">
                <Label>Avatar:</Label>
                <input
                  onChange={(e) => {
                    const img = e.target.files[0];
                    avatarRef.current.src = URL.createObjectURL(img);
                    setData("avatar", e.target.files[0]);
                  }}
                  className="flex-1 rounded-2xl border border-gray-600 bg-neutral-50 py-2 ps-4 font-secondary shadow-sm focus-visible:text-indigo-500 focus-visible:ring"
                  type="file"
                />
              </div>
              <div className="flex flex-1 items-center gap-x-2">
                <Label>Cover:</Label>
                <input
                  onChange={(e) => {
                    const img = e.target.files[0];
                    coverRef.current.src = URL.createObjectURL(img);
                    setData("cover", e.target.files[0]);
                  }}
                  className="flex-1 rounded-2xl border border-gray-600 bg-neutral-50 py-2 ps-4 font-secondary shadow-sm focus-visible:border-indigo-500 focus-visible:ring"
                  type="file"
                />
              </div>
            </div>
          </div>
          <button className="mt-4 rounded-2xl bg-blue-600 py-2.5 font-secondary text-2xl font-medium text-white">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
