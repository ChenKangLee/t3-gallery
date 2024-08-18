import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getImages } from "~/server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic";

async function ImageSection() {
  try {
    const images = await getImages();

    return (
      <div className="p-4">
        <ul className="flex flex-wrap justify-center gap-2">
          {images.map((image) => (
            <ul key={image.id} className="w-48">
              <Image
                src={image.url}
                alt={image.name}
                style={{ objectFit: "contain" }}
                width={480}
                height={480}
              />
            </ul>
          ))}
        </ul>
      </div>
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
