import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

class ViewBooks extends React.Component<IViewBooksProps, IViewBooksState> {
  constructor(props: IViewBooksProps) {
    super(props);
    this.state = {
      loaded: false,
      bookInfo: []
    };
  }

  async componentDidMount() {
    let bookData = await fetch('/api/books');
    let bookInfo = await bookData.json();
    this.setState({
      loaded: true,
      bookInfo
    });
  }

  render() {
    if (this.state.loaded) {
      return (
        <div>
          {this.state.bookInfo.map(book => (
            <div key={book.id}>
              <p>{book.title}</p>
              <p>{book.author}</p>
              <p>{book.price}</p>
              <p>{book.name}</p>
              <Link to={`/details/${book.id}`}>View Book</Link>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export interface IViewBooksProps extends RouteComponentProps<{ id: string }> { }

interface bookObject {
  title: string;
  author: string;
  price: string;
  categoryid: string;
  name: string;
  id: number;
}

export interface IViewBooksState {
  loaded: boolean;
  bookInfo: bookObject[];
}

export default ViewBooks;
