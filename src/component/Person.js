import React, { Component } from 'react';

class Person extends Component {
	state = {
		count: 0,
	};

	componentDidMount() {
		setInterval(() => {
			this.setState(() => ({
				count: this.state.count + 1,
			}));
		}, 100);
	}

	render() {
		const { name, imgSrc, bio, profession } = this.props;
		return (
			<div>
				<div>
					
					<h1 className='moi' style={{textDecoration:'underline red'}}>{name}</h1>
					<h5 className='bio' style={{color:'red',textDecoration:'underline black'}}>{bio}</h5>
          <h2 className='compteur'>{this.state.count}</h2>
					<img
						src={imgSrc}
						alt=""
            className='Images'
						style={{ width: '500px', height: '650px' }}
					/>
					<h3 className='travail'>{profession}</h3>
				</div>
			</div>
		);
	}
}

export default Person;