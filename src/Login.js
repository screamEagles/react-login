import React, {useState} from 'react';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <i class="fa fa-braille" aria-hidden="true"></i>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" type="email" /><br />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" />
                <button type='submit'>Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Get Registered</button>
        </div>
    )
}
