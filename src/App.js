
import './App.css';
import React, { Component } from 'react';
import Person from './component/Person';
import img from './component/abdou.jpg';

class App extends Component {
	constructor() {
		super();
		this.state = {
			fullName: 'Abdallah Lahderi',
			bio: 'I am a student and i want to become an entrepreneur so that I can take my many talents to the next level and take control of my economic future.',
			imgSrc: img,
			profession: 'I dont working',
			show: true,
		};
	}
	showData = () => {
		this.setState({
			...this.state,
			show: !this.state.show,
		});
	};

	render() {
		return (
			<div className="App">
				<button onClick={this.showData} className='button' style={{background:'#fff', color:'red'}}>Show Data</button>
				{this.state.show ? (
					<Person
						name={this.state.fullName}
						bio={this.state.bio}
						imgSrc={this.state.imgSrc}
						profession={this.state.profession}
					></Person>
				) : (
					'profile not found'
				)}
			</div>
		);
	}
}

export default App;