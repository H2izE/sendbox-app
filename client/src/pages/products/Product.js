import { useEffect, useState } from "react"
import { useParams } from "react-router";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const Product = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`${SERVER_URL}/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.error(err))
    }, [id])

    return (
        <div>
            <div key={`${product.id}`}>
                <div>{product.year}</div>
                <div>{product.name}</div>
                <div>{product.price}</div>
            </div>
        </div>
    )
}