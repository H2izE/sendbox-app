const products = [
    {
        id: 1,
        name: 'di',
        price: 30000,
        year: 2002,
    },
    {
        id: 2,
        name: 'di2',
        price: 30200,
        year: 2003,
    },
    {
        id: 3,
        name: 'di3',
        price: 303300,
        year: 2004,
    },
]

export const Products = () => {
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