import { useState } from 'react';

const SignUp = ({ setUserInfo }) => {
    const [newUser, setNewUser] = useState({ nickname: '', name: '', email: '' });
    const [error, setError] = useState(null);

    const clickHandler = () => {
        fetch('http://localhost:8080/users/new', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: { 'Content-Type': 'application/json' }
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then((data) => {
                setUserInfo(data);
            })
            .catch((error) => {
                setError(error.message);
            });
    }


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser(prev => {
            return ({
                ...prev,
                [name]: value
            });
        });
    };

    return (
        <>
            <div>
                <input
                    value={newUser.nickname}
                    name="nickname"
                    onChange={handleInputChange}
                    placeholder="nickname"
                />
                <input
                    value={newUser.name}
                    name="name"
                    onChange={handleInputChange}
                    placeholder="name"
                />
                <input
                    value={newUser.email}
                    name="email"
                    onChange={handleInputChange}
                    placeholder="email"
                />
                <button onClick={clickHandler}>assign</button>
            </div>
            {error ? <div style={{ color: 'red' }}>{error}</div> : null
            }
        </>
    )
}

export default SignUp