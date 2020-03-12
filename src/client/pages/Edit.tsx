import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { api } from '../services/api';
import { redirectForLogin } from '../services/login';

class Edit extends React.Component<IEditProps, IEditState> {
  constructor(props: IEditProps) {
    super(props);
    this.state = {
      error: false,
      title: '',
      author: '',
      price: '',
      categories: [],
      category: '',
      categoryName: '',
      bookInfo: {
        title: '',
        author: '',
        price: '',
        categoryid: '',
        name: ''
      }
    };
  }

  componentDidMount() {
    redirectForLogin().then(async decision => {
      if (!decision) {
        this.props.history.push('/login');
      } else {
        try {
          let bookData = await fetch(`/api/books/${this.props.match.params.id}`);
          let bookInfo = await bookData.json();
          this.setState({
            title: bookInfo.title,
            author: bookInfo.author,
            price: bookInfo.price,
            categoryName: bookInfo.name
          });

          let categoryData = await fetch('/api/categories');
          let categories = await categoryData.json();
          this.setState({ categories });
        } catch (error) {
          console.log(error);
        }
      }
    });
  }

  async handleEdit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    let editedBody = {
      title: this.state.title,
      author: this.state.author,
      price: this.state.price,
      categoryid: this.state.category,
    };

    if (this.state.category === "") {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }
    try {
      let result = await api<{ token: string }>(`/api/books/${this.props.match.params.id}`, 'PUT', editedBody);
      if (result !== null) {
        this.props.history.push('/books');
      }
    } catch (error) {
      console.log(error);
    }
  }

  async handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    let result = await api<{ token: string }>(`/api/books/${this.props.match.params.id}`, 'DELETE');
    if (result !== null) {
      this.props.history.push('/books');
    }
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" className="form-control" value={this.state.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ title: e.target.value })} />

          <input type="text" className="form-control" value={this.state.author}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ author: e.target.value })} />

          <input type="text" className="form-control" value={this.state.price}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ price: e.target.value })} />

          {this.state.categoryName}

          <select
            value={this.state.category}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => this.setState({ category: e.target.value })}
            className="form-control">
            <option value="0">Select...</option>
            {this.state.categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
          <div>
            <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleEdit(e)}>Save Edit</button>
            <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleDelete(e)}>DELETE!</button>
          </div>
        </form>
        {this.state.error ? <small>You must select a Category!</small> : null}
      </div>
    )
  }
}

interface IEditProps extends RouteComponentProps<{ id: string }> { }

interface ICategories {
  id: string;
  name: string;
}

interface bookObject {
  title: string;
  author: string;
  price: string;
  categoryid: string;
  name: string;
}

interface IEditState {
  error: boolean;
  title: string;
  author: string;
  price: string;
  categories: ICategories[];
  category: string;
  categoryName: string;
  bookInfo: bookObject;
}

export default Edit;
