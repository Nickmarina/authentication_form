import { useState } from 'react';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeName = e => setName(e.target.value);
  const handleChangeEmail = e => setEmail(e.target.value);
  const handleChangePassword = e => setPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    console.log(user)
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <label>
          <h3>Name</h3>
          <input
            className="form-control mb-3"
            type="text"
            value={name}
            onChange={handleChangeName}
            placeholder="Enter your name"
            required
          />
        </label>
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
          Registration
        </button>
      </form>
  );
};

export default RegisterForm;