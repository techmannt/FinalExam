import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { api } from '../services/api';
import { redirectForLogin } from '../services/login';

class Compose extends React.Component<ComposeProps, ComposeState> {
  constructor(props: ComposeProps) {
    super(props);
    this.state = {
      title: '',
      author: '',
      price: '',
      categoryId: '',
      categories: [],
      category: ''
    };
  }

  async componentDidMount() {
    redirectForLogin().then(async decision => {
      if (!decision) {
        this.props.history.push('/login');
      } else {
        let categoryData = await fetch('/api/categories');
        let categories = await categoryData.json();
        this.setState({ categories });
      }
    });
  }

  async handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    let newBody = {
      author: this.state.author,
      title: this.state.title,
      price: this.state.price,
      categoryid: this.state.category
    };
    try {
      let result = await api<{ token: string }>('/api/books', 'POST', newBody);
      if (result !== null) {
        this.props.history.push('/books');
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <form>
          <input value={this.state.title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ title: e.target.value })} type="text" placeholder="Title" />
          <input value={this.state.author} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ author: e.target.value })} type="text" placeholder="Author" />
          <input value={this.state.price} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ price: e.target.value })} type="text" placeholder="Price" />

          <select
            value={this.state.category}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => this.setState({ category: e.target.value })}
            className="form-control">
            <option value="0">Select...</option>
            {this.state.categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
          <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleSubmit(e)}>Submit it!</button>
        </form>
      </div>
    );
  }
}

interface ICategories {
  id: string;
  name: string;
}

export interface ComposeProps extends RouteComponentProps { }
export interface ComposeState {
  title: string;
  author: string;
  price: string;
  categoryId: string;
  categories: ICategories[];
  category: string;
}

export default Compose;
