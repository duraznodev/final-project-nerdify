import { Notification, SelectorHeader } from "@/Components";
import { Layout } from "@/Layouts";

export default function Notifications({ auth }) {
  return (
    <Layout user={auth.user}>
      <div className="mx-auto mt-8">
        <div className="w-[986px]">
          <SelectorHeader title="Notifications" start />
          <div className="mt-8 flex  flex-col gap-y-2.5">
            <Notification />
            <Notification />
          </div>
        </div>
      </div>
    </Layout>
  );
}
