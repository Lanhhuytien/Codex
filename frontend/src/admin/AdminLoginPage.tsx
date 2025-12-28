import { useState } from 'react';
import { login } from '../api/auth';
import { useNavigate } from 'react-router-dom';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = await login(email, password);
      if (!data.roles?.includes('admin')) {
        setError('Access denied');
        return;
      }
      localStorage.setItem('authToken', data.token);
      navigate('/admin/dashboard');
    } catch {
      setError('Login failed');
    }
  };

  return (
    <div className="card">
      <h2>Admin login</h2>
      <input placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
}
