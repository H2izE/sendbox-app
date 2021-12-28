const { useNavigate } = require("react-router")

const Landing = ({ user }) => {
    const navigate = useNavigate();
    return (
        <div>
            <div>hello world</div>
            <div onClick={() => navigate('/products')}>go to the list</div>
        </div>
    )
}

export default Landing;