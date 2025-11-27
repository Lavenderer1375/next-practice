import { fetchProductById } from "@/hooks/ImageFetch";
import Image from "next/image";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await fetchProductById(id);

  return (
    <div className="max-w-3xl mx-auto my-2 p-4 bg-[#4842a6] rounded-xl">
      <div className="bg-white shadow-lg rounded-xl p-6">
        <div className="w-full flex justify-center mb-6">
          <Image
            src={product?.image as string}
            alt={product?.title as string}
            width={400}
            height={200}
            className="rounded-lg shadow-md object-cover"
            unoptimized
          />
        </div>

        <h1 className="text-2xl font-bold mb-2">{product?.title}</h1>

        <p className="text-2xl font-bold text-gray-700 mb-4">
          Category:{" "}
          <span className="text-md text-gray-600">{product?.category}</span>
        </p>

        <p className="text-3xl font-bold text-green-600 mb-4">
          ${product?.price}
        </p>

        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
          {product?.description}
        </p>

        <div className="flex items-center gap-2 text-yellow-500 font-semibold">
          ⭐ {product?.rating?.rate}
          <span className="text-gray-600 text-sm">
            ({product?.rating?.count} reviews)
          </span>
        </div>
      </div>
    </div>
  );
}
