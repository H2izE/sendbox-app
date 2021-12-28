const Logout = ({ setUserInfo }) => {
    return (
        <div>
            <button onClick={() => { setUserInfo(null) }}>Logout</button>
        </div>
    )
}

export default Logout