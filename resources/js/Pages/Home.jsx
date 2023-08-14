import { Feed } from "@/Components";
import { Layout } from "@/Layouts";

export default function Home({ posts, auth }) {
  return (
    <Layout user={auth.user}>
      <div className="mx-auto mt-3 min-w-[625px] ">
        <Feed posts={posts} />
      </div>
    </Layout>
  );
}
