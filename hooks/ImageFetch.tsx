export const fetchAllProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 60 },
  });
  return res.json();
};

export const fetchProductById = async (id: string) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 60 },
  });
  return res.json();
};
