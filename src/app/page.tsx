import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/188413bf-a6f9-452f-9425-e0b7a41b21ed-1tafx.jpeg",
  "https://utfs.io/f/a0251e94-56cf-4b1b-ab45-d94b78f24091-1tafv.jpeg",
  "https://utfs.io/f/36a61dca-2c48-4829-a4a1-b055b8bc720a-1tafw.jpeg",
];

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <ul className="flex flex-wrap gap-2">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockUrls.map((url, index) => (
          <ul key={index + 1} className="w-48">
            <img src={url} alt={`image ${index}`} />
          </ul>
        ))}
      </ul>
    </main>
  );
}
