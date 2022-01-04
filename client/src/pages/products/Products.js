import { useEffect, useState } from "react"
import { useNavigate } from "react-router";

export const Products = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8081/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error(err))
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:8081/products/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const removeProducts = products.filter(
                    product => product.id !== data.id
                );
                setProducts(removeProducts);
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            {products.map(product => {
                return (
                    <div key={`${product.id}`}>
                        <div>{product.id}</div>
                        <div>{product.year}</div>
                        <div>{product.name}</div>
                        <div>{product.price}</div>
                        <button onClick={() => navigate(`/products/${product.id}/edit`)}>edit</button>
                        <button onClick={() => handleDelete(product.id)}>delete</button>
                    </div>
                )
            })}
        </div>
    )
}