import { useState } from 'react';
import { register } from '../api/auth';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const data = await register({
        name,
        email,
        password,
        password_confirmation: passwordConfirmation
      });
      localStorage.setItem('authToken', data.token);
      navigate('/');
    } catch {
      setError('Register failed');
    }
  };

  return (
    <div className="card">
      <h2>Register</h2>
      <input placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
      <input placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <input
        placeholder="Confirm Password"
        type="password"
        value={passwordConfirmation}
        onChange={(event) => setPasswordConfirmation(event.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      {error && <p>{error}</p>}
    </div>
  );
}
