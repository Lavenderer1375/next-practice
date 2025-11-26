import Star from "@/elements/stars/Stars";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  rating: { rate: number; count: number };
  price: number;
}

const Card = ({
  id,
  title,
  imageUrl,
  description,
  rating,
  price,
}: CardProps) => {
  const filledStars = Math.round(rating.rate);
  const emptyStars = 5 - filledStars;

  return (
    <section
      id="cards-section"
      className="grid w-full mt-10 p-4 border bg-[#6C63FF] border-gray-800 rounded-lg transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-none text-white"
    >
      <section className="bg-white rounded-lg mb-2 p-4 ">
        <Link href={`/products/${id}`}>
          <Image
            src={imageUrl}
            alt={title}
            width={500}
            height={500}
            className="rounded-base mb-6"
          />
        </Link>
      </section>

      <div className="grid grid-cols-1 ">
        <div className="flex items-center space-x-3 mb-6">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {Array.from({ length: filledStars }).map((_, i) => (
              <Star key={`filled-${i}`} type="filled" />
            ))}

            {Array.from({ length: emptyStars }).map((_, i) => (
              <Star key={`empty-${i}`} type="empty" />
            ))}
          </div>

          <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
            {rating.rate} {rating.count ? `(${rating.count})` : ""}
          </span>
        </div>

        <Link href={`/products/${id}`}>
          <h5 className="text-xl font-semibold tracking-tight text-white">
            {title}
          </h5>
        </Link>

        <div className="flex items-center justify-between mt-6">
          <span className="text-3xl font-extrabold text-white">${price}</span>

          <button
            type="button"
            className="flex items-center text-white bg-green-700 font-medium text-sm px-3 py-2 hover:cursuor-pointer rounded-lg border border-green-800 hover:bg-green-600 transition hover:cursor-pointer"
          >
            Add to cart
          </button>
        </div>

        <p className="mt-4 text-md text-white">{description}</p>
      </div>
    </section>
  );
};

export default Card;
