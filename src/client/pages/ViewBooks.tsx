import * as React from 'react';

class ViewBooks extends React.Component<ViewBooksProps, ViewBooksState> {
  constructor(props: ViewBooksProps) {
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
        <h1>ViewBooks Page</h1>
      </div>
    );
  }
}

export interface ViewBooksProps {}
export interface ViewBooksState {}
export default ViewBooks;
