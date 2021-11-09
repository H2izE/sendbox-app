import { useEffect, useState } from "react"


export const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8090/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error(err))
    })

    return (
        <div>
            {products.map(product => {
                return (
                    <div key={`${product.id}`}>
                        <div>{product.year}</div>
                        <div>{product.name}</div>
                        <div>{product.price}</div>
                    </div>
                )
            })}
        </div>
    )
}