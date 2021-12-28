import Login from "./Login"
import Logout from "./Logout"
import SignUp from "./SignUp"
import { useContext } from "react"
import { UserContext } from './App';

const NavigationBar = () => {
    const [user, setUser] = useContext(UserContext);

    return (
        <div>
            {user ?
                (<>
                    <div>
                        <span>로그인된 화면</span>
                        <span>{user.id}</span>
                        <span>:</span>
                        <span>{user.nickname}</span>
                    </div>
                    <Logout setUserInfo={setUser} />
                </>
                )
                : (
                    <>
                        <SignUp setUserInfo={setUser} />
                        <Login setUserInfo={setUser} />
                    </>
                )}
        </div>
    )
}

export default NavigationBar