import { Post, PostSometing } from "@/Components";
import PostModalForm from "./PostModalForm";
import { useState } from "react";
import Portal from "./Portal";

export default function Feed({ posts }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className=" flex max-w-[625px] flex-col gap-y-5">
      <button onClick={() => setIsOpenModal(true)}>
        <PostSometing />
      </button>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
      {isOpenModal && (
        <Portal>
          <PostModalForm setIsOpenModal={setIsOpenModal} />
        </Portal>
      )}
    </div>
  );
}
