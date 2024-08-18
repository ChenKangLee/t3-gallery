import { db } from "~/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function ImageSection() {
  try {
    const images = await getImages();

    return (
      <ul className="flex flex-wrap gap-2">
        {images.map((image) => (
          <ul key={image.id} className="w-48">
            <img src={image.url} alt={image.name} />
          </ul>
        ))}
      </ul>
    );
  } catch (e) {
    console.log(e);
    return <></>;
  }
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          <h2>Please sign in to see the images related to you!</h2>
        </div>
      </SignedOut>
      <SignedIn>
        <ImageSection />
      </SignedIn>
    </main>
  );
}
