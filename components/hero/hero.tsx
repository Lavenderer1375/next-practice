import MoveToButton from "@/elements/moveToButton/MoveToButton";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight md:text-5xl">
            Discover the Best Deals <br /> in Online Shopping
          </h1>

          <p className="mt-4 text-lg text-gray-400">
            Find top-quality products at unbeatable prices. Fast delivery,
            secure checkout, and customer-first support.
          </p>

          <div className="mt-8 flex space-x-4">
            <MoveToButton />
            <button className="px-6 py-3 rounded-lg border border-gray-400 text-gray-800 font-medium hover:bg-gray-100 transition">
              View Categories
            </button>
          </div>
        </div>

        <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
          <Image
            src="/HeroImage3.svg"
            alt="Hero Image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
