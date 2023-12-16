import { useContext, useState } from "react";
import SharedContext from "../context/SharedContext";
import useFetcher from "../utils/useFetcher";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(SharedContext);
    const nav = useNavigate();
    const fetcher = useFetcher();
    const login = async () => {
        console.log("here")
        const res = await fetcher({
            pathname: "Auth/Login",
            method: "POST",
            body: JSON.stringify({
                Username: "admin",
                Password: "admin"
            })
        });
        if (res) {
            localStorage.setItem("user", JSON.stringify(res));
            console.log("Login res:\n", res)
            setUser(res)
            nav("/")
        }
    }
    return <div id="login">
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Username" />
        <button style={{ backgroundColor: "#eee", color: "#000" }} onClick={login}>Login</button>
    </div>
}
export default Login;