"use client";

const MoveToButton = () => {
  const handleMoveToProducts = () => {
    const element = document.getElementById("cards-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button
      onClick={handleMoveToProducts}
      className="px-6 hover:cursor-pointer py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-700 transition"
    >
      Shop Now
    </button>
  );
};

export default MoveToButton;
