import { fetchProductById } from "@/hooks/ImageFetch";
import Image from "next/image";

export default async function ProductDetails({
  params,
}: {
  params: { id: number };
}) {
  const product = await fetchProductById(params?.id?.toString());

  return (
    <div>
      <Image
        src={product?.image}
        alt={product?.title}
        width={600}
        height={400}
        className="w-auto h-auto object-cover"
        unoptimized
      />

      <h1 className="text-2xl font-bold">{product?.title}</h1>
      <p className="text-gray-700">{product?.description}</p>
      <p className="text-xl font-semibold">${product?.price}</p>
    </div>
  );
}
