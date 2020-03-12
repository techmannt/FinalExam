import * as React from 'react';

class Books extends React.Component<BooksProps, BooksState> {
  constructor(props: BooksProps) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    try {
      let books = await fetch(`/api/books`);
      let booksInfo = await books.json();
      this.setState({ booksInfo });

    } catch (error) {
      console.log(error);
    }
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Books Page</h1>
      </div>
    );
  }
}

export interface BooksProps {}
export interface BooksState {}
export default Books;
