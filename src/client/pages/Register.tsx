import * as React from 'react';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router';

const Register: React.FC<RegisterProps> = props => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const registerSignup = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

      let newBody = {
        username,
        email,
        password
      };
      try {
        let userData = await fetch(`/auth/register/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newBody)

        });
        let userDataInfo = await userData.json();

        if (userData.ok) {
          localStorage.setItem('userid', userDataInfo.userid);
          localStorage.setItem('email', email);
          localStorage.setItem('name', username);

          props.history.push('/books');
        }
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <div>
        <form action="">
          <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder="Enter your name" />
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
          <button onClick={registerSignup}>Sign up!</button>
        </form>
    </div>
  );
};

interface RegisterProps extends RouteComponentProps { }

export default Register;
