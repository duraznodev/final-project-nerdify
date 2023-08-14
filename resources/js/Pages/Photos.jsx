import { SelectorHeader } from "@/Components";
import PhotoCard from "@/Components/PhotoCard";
import { Layout } from "@/Layouts";

export default function Photos({ auth, photos }) {
  return (
    <Layout user={auth.user}>
      <div className=" mx-auto mt-8">
        <SelectorHeader title="Your Photos" around />
        <div className="mx-10 mt-8 flex flex-wrap justify-center gap-5">
          {photos.map((photo) => (
            <PhotoCard key={photo.id} {...photo} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
