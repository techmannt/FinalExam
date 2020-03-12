import * as React from 'react';

class Compose extends React.Component<ComposeProps, ComposeState> {
  constructor(props: ComposeProps) {
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
        <h1>Compose Page</h1>
      </div>
    );
  }
}

export interface ComposeProps {}
export interface ComposeState {}
export default Compose;
