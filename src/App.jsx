import { useEffect, useState } from "react"
import Header from "../components/Header"



function App() {
  const [products,setProducts]=useState([]);
  const [filters,setFilters]=useState([]);
  
  useEffect(()=>{
    const fetchproducts=async()=>{
      try{
        const data=await fetch('https://phones-dev.herokuapp.com/api/phones');
        const products=await data.json();
        setProducts(products);
        setFilters(products);
      }
      catch(err){

      }
    }
    fetchproducts();
  },[])

  return (
    <>
    <div className=" bg-lime-300">
    <Header/>
    </div>
    </>
  )
}

export default App
