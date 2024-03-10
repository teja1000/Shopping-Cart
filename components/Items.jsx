import ProductCard from "./ProductCard";

const Items=({dataset})=>{
  return(
    <div className="grid grid-cols-3">
      {
        dataset&&dataset.products.map(product=>(<ProductCard key={product.id} product={product}/> ))
      }
    </div>
  )
}

export default Items