import { fetchAllPosts } from "@/hooks/PostsFetch";
import Blogs from "@/modules/Posts/posts";

export default async function BlogsPage() {
  const blogs: [{ userId: number; id: number; title: string; body: string }] =
    await fetchAllPosts();

  return (
    <div className="grid grid-cols-4 mt-10 max-w-7xl mx-auto rounded-lg">
      {blogs.map((post) => (
        <Blogs
          key={post.id}
          id={post.id}
          body={post.body}
          title={post.title}
          userId={post.userId}
        />
      ))}
    </div>
  );
}
