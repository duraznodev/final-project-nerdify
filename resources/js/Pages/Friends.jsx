import { FriendCard, SelectorHeader } from "@/Components";
import { RaSelect } from "@/Components/ui";
import { Layout } from "@/Layouts";

export default function Friends({ auth, friends }) {
  return (
    <Layout user={auth.user}>
      <div className="mx-auto mt-8">
        <SelectorHeader title="Friends List" center />
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {friends.map((friend) => (
            <FriendCard key={friend.id} user={friend} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
