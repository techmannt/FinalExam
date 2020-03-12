import * as React from 'react';

class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    try {

    } catch (error) {
      console.log(error);
    }
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Login Page</h1>
      </div>
    );
  }
}

export interface LoginProps {}
export interface LoginState {}
export default Login;
