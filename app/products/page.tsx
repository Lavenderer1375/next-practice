import Card from "@/modules/cards/card";
import { fetchAllProducts } from "@/hooks/ImageFetch";

export default async function ProductsPage() {
  const products: [
    {
      id: number;
      title: string;
      image: string;
      description: string;
      rating: { rate: number; count: number };
      price: number;
    }
  ] = await fetchAllProducts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-7 mx-10">
      {products.map((p) => (
        <Card
          price={p.price}
          key={p.id}
          id={p.id}
          title={p.title}
          imageUrl={p.image}
          description={p.description}
          rating={p.rating}
        />
      ))}
    </div>
  );
}
