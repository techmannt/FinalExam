import * as React from 'react';

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
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
        <h1>Home Page</h1>
      </div>
    );
  }
}

export interface HomeProps {}
export interface HomeState {}
export default Home;
