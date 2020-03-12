import * as React from 'react';

class Register extends React.Component<RegisterProps, RegisterState> {
  constructor(props: RegisterProps) {
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
        <h1>Register Page</h1>
      </div>
    );
  }
}

export interface RegisterProps {}
export interface RegisterState {}
export default Register;
