import { useContext } from "react"
import { UserContext } from './App';
import { Navigate } from "react-router"

const Dashboard = () => {
    const user = useContext(UserContext)
    if (user === null) {
        return <Navigate to='/' replace={true} />
    }
    return (
        <div>
            <div>dashboard</div>
        </div>
    )
}
//login 정보가 있는 경우 
export default Dashboard