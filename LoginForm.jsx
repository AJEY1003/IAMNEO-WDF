import React, { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleChangeEvent(e) {
        const { name, value } = e.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form Submitted!");
        console.log("Email:", email);
        console.log("Password:", password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChangeEvent}
                    data-testid="useremail-input"
                />
            </div>
            <br />
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleChangeEvent}
                    data-testid="userpassword-input"
                />
            </div>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default LoginForm;
