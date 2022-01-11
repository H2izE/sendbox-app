import { useContext } from "react"
import { UserContext } from '../App';

const { useNavigate, Navigate } = require("react-router")

const Landing = () => {
    const [user] = useContext(UserContext)
    const navigate = useNavigate();
    if (user) {
        return <Navigate to='/dashboard' replace={true} />
    }
    return (
        <div>
            <div>로그인전 화면</div>
            <div onClick={() => navigate('/products')}>go to the list</div>
        </div>
    )
}
//login 정보가 없는 경우 
export default Landing;