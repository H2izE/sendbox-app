import { Navigate } from "react-router"

const Dashboard = ({ user }) => {
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