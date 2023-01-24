import React, { useState } from 'react';

function Login() {
    const [data, setData] = useState({ username: '', password: '' });

    function handleFormSubmit(event) {
        event.preventDefault();
        alert(JSON.stringify(data));
    }

    function handleInputChange(name, text) {
        setData({ ...data, [name]: text });
    }
    return (
        <React.Fragment>
            <h1>Login form</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Username:
                    <input
                        value={data.username}
                        onChange={(e) =>
                            handleInputChange('username', e.target.value)
                        }
                        type="text"
                    />
                </label>
                <label>
                    Password:
                    <input
                        value={data.password}
                        onChange={(e) =>
                            handleInputChange('password', e.target.value)
                        }
                        type="password"
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </React.Fragment>
    );
}

export default Login;
