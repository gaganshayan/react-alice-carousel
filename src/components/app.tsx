import React from 'react';
import Header from './header';
import Navigation from './navigation';
import getPageComponent from './pages';
import scheme from './scheme';
import '../main.scss';

export default class App extends React.PureComponent<AppProps> {
	state = {
		id: '',
		title: '',
	};

	componentDidMount() {
		this.setInitialState();
	}

	setInitialState() {
		const { hash = '#' } = window.location;
		const hashId = hash.slice(1);
		const item = scheme.find(({ id }) => id === hashId);

		if (item) {
			this.setActivePage(item);
		} else {
			const [item] = scheme;
			this.setActivePage(item);
		}
	}

	setActivePage = ({ id = '', title = '' }) => {
		this.setState({ id, title });
	};

	render() {
		const { id, title } = this.state;
		return (
			<div className="app">
				<Header />
				<Navigation onclick={this.setActivePage} scheme={scheme} />
				<main className="s-main">
					<h2 className="title">
						<span>{title} example</span>
					</h2>
					{getPageComponent(id)}
				</main>
			</div>
		);
	}
}

type AppProps = Record<string, unknown>;
