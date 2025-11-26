import Navbar from "@/components/navbar/Navbar";
import ProductsPage from "./products/page";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductsPage />
    </div>
  );
}
