import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';

class App extends React.Component {

	state = {
		fishes: {},
		order: {}
	}

	addFish = (fish) => {
		const fishes = {...this.state.fishes};

		fishes[`fish${Date.now()}`] = fish;

		this.setState({ fishes });
	}

	loadSampleFishes = () => {
		alert("Loading Sample");
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="brian is cool"/>
					<ul className="fishes">
						<Fish />
					</ul>
				</div>
					<Order />
					<Inventory 
						addFish={this.addFish}
						loadSampleFishes={this.loadSampleFishes} />
			</div>
		);
	}
}

export default App;