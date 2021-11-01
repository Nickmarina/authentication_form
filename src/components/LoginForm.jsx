import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = e => setEmail(e.target.value);
  const handleChangePassword = e => setPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    console.log(user);
    setEmail('');
    setPassword('');
  };

  return (
      <form  onSubmit={handleSubmit} className="d-flex flex-column">
        <label>
          <h3>Email</h3>
          <input 
            className="form-control mb-3"
            type="email"
            value={email}
            onChange={handleChangeEmail}
            placeholder="Enter your email"
            required
          />
        </label>
        <label>
          <h3>Password</h3>
          <input
            className="form-control mb-5"
            type="text"
            value={password}
            onChange={handleChangePassword}
            placeholder="Enter a password"
            required
          />
        </label>
        <button type="submit" className="btn btn-info col-4 mx-auto">
          Login
        </button>
      </form>
  );
};

export default LoginForm;