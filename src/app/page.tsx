import { db } from "~/server/db";

export const dynamic = "force-dynamic";
export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <ul className="flex flex-wrap gap-2">
        {images.map((image) => (
          <ul key={image.id} className="w-48">
            <img src={image.url} alt={image.name} />
          </ul>
        ))}
      </ul>
    </main>
  );
}
