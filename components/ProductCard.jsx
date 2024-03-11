

const ProductCard = ({ product }) => {
  return (
    <div className="h-96 w-80 bg-neutral-200 shadow-md m-4 flex flex-col justify-between">
      <img className="h-2/5 w-80 object-fill" src={product.thumbnail} alt={product.title} />
      <div className="px-4">
        <h1 className="text-center font-bold mt-2">{product.title}</h1>
        <span className="font-semibold flex justify-center mt-2">Price: {product.price}</span>
        <div className="mt-2">{product.description}</div>
        <div className="text-center font-bold mt-2">{product.brand}</div>
        <div className="flex justify-center mt-2">
          <button className="bg-yellow-200 shadow-lg text-lg px-4 py-2">Add Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
