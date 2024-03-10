

const ProductCard=({product})=>{
  return(
    <div className="h-96 w-80  bg-neutral-200 shadow-md m-4">
    <img className="h-2/4 w-80 object-fill" 
    src={product.thumbnail} alt={product.title}
    />
    <h1 className="text-center font-bold mt-2">{product.title}</h1>
    <span className="font-semibold flex justify-center mt-2">price:{product.price}</span>
    <div className="mt-2">{product.description}</div>
    <div className="text-center font-bold mt-2">{product.brand}</div>
     <div className="flex justify-center mt-2">
    <button className="bg-yellow-200 shadow-lg text-lg">Add Cart</button>
    </div>
    </div>
  )
}
export default ProductCard