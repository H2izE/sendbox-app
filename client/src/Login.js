import { useEffect, useState } from "react";

const Login = () => {
    const [user, setUser] = useState();
    const [userInfo, setUserInfo] = useState(() => {
        JSON.parse(window.localStorage.getItem('user'))
    });
    const [error, setError] = useState(null);

    const clickHandler = () => {
        fetch(`http://localhost:8080/users/`, {
            method: 'POST',
            body: JSON.stringify({ nickname: user }),
            headers: { 'Content-Type': 'application/app' }
        })
            .then((res) => {
                console.log(res);
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                window.localStorage.setItem('user', JSON.stringify(data))
                setUserInfo(data);
            })
            .catch((error) => {
                console.dir(error);
                setError(error.message);
            });
    };
    if (userInfo) {
        return (
            <div>
                <span>{userInfo.id}</span>
                <span>:</span>
                <span>{userInfo.nickname}</span>
            </div>
        );
    }

    return (
        <>
            <div>
                <input value={user} onChange={e => setUser(e.target.value)} />
                <button onClick={clickHandler}>Login</button>
            </div>
            {error ? { error } : null}
        </>
    )

}

export default Login;