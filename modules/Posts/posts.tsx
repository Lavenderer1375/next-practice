import Link from "next/link";

interface BlogsProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Blogs = ({ userId, id, title, body }: BlogsProps) => {
  return (
    <div className="p-2 grid gap-2">
      <section className="border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 hover:cursor-pointer bg-gray-700 col-span-1 md:col-span-2 lg:col-span-1">
        <Link href={`/blogs/${id}`}>
          <h1 className="text-2xl font-bold text-white mb-2 hover:text-blue-600 transition-colors">
            {title}
          </h1>

          <p className="text-white mb-4 line-clamp-3">{body}</p>

          <span className="text-sm text-white">Author ID: {userId}</span>
        </Link>
      </section>
    </div>
  );
};

export default Blogs;
