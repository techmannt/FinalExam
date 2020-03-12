import * as React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Login from './pages/Login';
import Register from './pages/Register';
import Details from './pages/Details';
import Compose from './pages/Compose';
import ViewBooks from './pages/ViewBooks';

class App extends React.Component<IAppProps, IAppState> {

	render() {
		return (
			<BrowserRouter>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/books">View All Books</Link>
				<Link to="compose">Compose</Link>
				<Link to="/login">Login</Link>
				<Link to="/register">Register</Link>
			</nav>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/edit/:id" component={Edit} />
					<Route exact path="/details/:id" component={Details} />
					<Route exact path="/compose" component={Compose} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/books" component={ViewBooks} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export interface IAppProps { }

export interface IAppState { }

export default App;
