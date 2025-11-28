import { fetchPostsById } from "@/hooks/PostsFetch";
import Link from "next/link";

export default async function Post({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const post = await fetchPostsById(id);
  
  return (
    <div className="px-4 py-10 max-w-3xl mx-auto">
      <article className="bg-white border rounded-2xl shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>

        <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
          {post.body}
        </p>

        <div className="pt-4 border-t mt-6 flex items-center justify-between">
          <span className="text-sm text-gray-500">
            Author ID: {post.userId}
          </span>

          <Link
            href="/blogs"
            className="text-blue-600 text-sm hover:underline hover:text-blue-700 transition"
          >
            ← Back to blogs
          </Link>
        </div>
      </article>
    </div>
  );
}
