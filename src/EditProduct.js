const { useState, useEffect } = require("react");
const { useNavigate, useParams } = require("react-router")

const EditProduct = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        price: 0,
        year: 0,
    });

    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:8080/products/${id}`)
            .then((res) => res.json)
            .then((data) => setValues(data))
            .catch((err) => console.log(err));
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setValues({
            ...value,
            [name]: values
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/products/${id}`, {
            method: 'PUT',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                navigate(`/products/${data.id}`);
            });
    };

    return (
        <form>
            <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
            />
            <input
                type="number"
                name="price"
                value={values.price}
                onChange={handleChange}
            />
            <input
                type="number"
                name="year"
                value={values.number}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>submit</button>
        </form>
    )
}

export default EditProduct;