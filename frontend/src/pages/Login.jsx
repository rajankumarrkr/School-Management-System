import { useState } from "react";
import API from "../services/api";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post("/auth/login", { email, password });

            // Save token
            localStorage.setItem("token", res.data.token);

            alert("Login successful ✅");

            // Redirect (temporary)
            window.location.href = "/dashboard";

        } catch (error) {
            alert("Login failed ❌");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                onSubmit={handleLogin}
                className="bg-white p-6 rounded shadow-md w-80"
            >
                <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 mb-3 border rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 mb-3 border rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;