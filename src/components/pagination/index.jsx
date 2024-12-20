import { useEffect, useState } from "react";

const Paggination = ()=>{
    const [products,setProducts] = useState(undefined);
    const [currentPage,setCurrentPage] = useState(1);
    const rowPerPage = 10;

    const fetchProducts= async ()=>{
       const result = await fetch('https://dummyjson.com/products')
       if(result.ok){
        const data = await result.json();
        setProducts(data.products);
       }
    }
    useEffect(()=>{
        fetchProducts();
    },[])

    return(
        <>
        <h1>Custom Pagination</h1>
        <div className="product__container">
        {
            products && products.length>0 && products.slice(currentPage * rowPerPage - rowPerPage,currentPage *rowPerPage).map((products,index)=>{
                return(
                    <div className="product__card" key={products.id}>
                       <img src={products.thumbnail} alt={products.title}/>
                       <h2>{products.title}</h2>
                    </div>
                )
            })
        }
        </div>
        { products && products.length>0 && (
            
            <div className="paggination">
               <button className="paggination__button" disabled={currentPage<=1} onClick={()=>setCurrentPage(currentPage-1)}>
                Previous
               </button>
            {Array.from({ length:( products.length)/rowPerPage }, (_, i) => {
            return(
                <span className={`pagination_button ${i+1 ===currentPage ?'active':''}`} onClick={()=>setCurrentPage(i+1)} key={i}>{i+1}</span>
            )
        })}
         <button className="paggination__button" onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage >= (products.length)/rowPerPage}>
                Next
               </button>
        </div>
        )}
        </>
    )
};

export default Paggination;