import { db } from "~/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = "force-dynamic";
export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          <h2>Please sign in to see the images related to you!</h2>
        </div>
      </SignedOut>
      <SignedIn>
        <ul className="flex flex-wrap gap-2">
          {images.map((image) => (
            <ul key={image.id} className="w-48">
              <img src={image.url} alt={image.name} />
            </ul>
          ))}
        </ul>
      </SignedIn>
    </main>
  );
}
