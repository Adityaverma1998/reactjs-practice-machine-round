import { useEffect, useState } from "react";

const ApiIntregration = ()=>{

    const url = "https://fakestoreapi.com/products";
    const [products,setProducts] = useState();
    const [error,setError] = useState();
    const [loading,setLoading] = useState(false);
    
    useEffect(()=>{
        (async()=>{
            setLoading(true);
             try {
                const result = await fetch(url); 
                if(result.ok){
                    const data = await result.json();
                    data.sort((a,b)=> a.price-b.price);
                    setProducts(data)
                } 
             } catch (error) {
                setLoading(false);
                setError(error);
             }

        })()
    },[url])

    console.log("check products are",products)

    return(
        <>
         <h1>Hello Products here </h1>
        </>
    )
}
export default ApiIntregration;