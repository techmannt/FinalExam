import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.setState({
      loaded: true
    });
  }

  render() {
    if (this.state.loaded) {
      return (
        <div>
          <h1>Welcome to my Book Store!</h1>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export interface IHomeProps extends RouteComponentProps<{ id: string }> { }

export interface IHomeState {
  loaded: boolean;
}

export default Home;
