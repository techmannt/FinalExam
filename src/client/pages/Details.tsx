import * as React from 'react';

class Details extends React.Component<DetailsProps, DetailsState> {
  constructor(props: DetailsProps) {
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
        <h1>Details Page</h1>
      </div>
    );
  }
}

export interface DetailsProps {}
export interface DetailsState {}
export default Details;
