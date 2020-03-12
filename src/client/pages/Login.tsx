import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { api, setToken } from '../services/api';
import { redirectForLogin } from '../services/login';
import { Link } from 'react-router-dom';

const Login: React.FC<LoginProps> = props => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    redirectForLogin().then(decision => {
      if (decision) {
        props.history.push('/books');
      }
    });
  }, []);

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let result = await api<{ token: string }>('/auth/login', 'POST', { email, password });
    if (result?.token) {
      setToken(result.token);
      props.history.push('/books');
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <form action="">
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter password" />
        <div>
          <button onClick={handleLogin}>Login!</button>
          <button><Link to={`/register`}>Register</Link></button>
        </div>
        {error ? <small>Invalid Login!!!!!</small> : null}
      </form>
    </div>
  );
};

interface LoginProps extends RouteComponentProps { }

export default Login;
