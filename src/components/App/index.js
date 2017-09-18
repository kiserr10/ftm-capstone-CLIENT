import React, { Component } from 'react';
import './App.css';
// import { ReactDOM } from 'react-dom';
import Header from '../Header/index.js';
// import { getData } from '../API';
import { FormControl, Thumbnail, Grid, Row, Col, Well} from 'react-bootstrap';
import { getData } from '../API';
class App extends Component {
	constructor(props){
		super(props);
		this.selectFarm = this.selectFarm.bind(this);
		this.state = {
			markets: []
		};
	}



	componentDidMount(){
		getData()
			.then(result => {
				this.setState({
					markets: result.data
				});
				const market = this.state.markets;
				console.log(market);
			});
	}

	makeDropDownItems(){
		return this.state.markets.map(market =>{
			return (
				<option key={market.id} value={market.id}>{market.name}</option>
			);
		});
	}

	selectFarm(e){
		console.log(e.target.value);
		this.props.history.push("/marketInfo/" + e.target.value);
	}

	render() {
		return (
			<div>
				<Header />
				<div className="main-app-body">
					<div className="jumbotron-box col-sm-offset-8">
						<img className="main-title-pic" alt="title" src={require('../../images/farm-to-market-title.png')}/>
					</div>
				</div>
				<div className="info-blocks">
					<Grid>
						<Row>
							<Col xs={6} md={4}>
								<Thumbnail className="info-block" src={require('../../images/image_2.jpg')} alt="242x200">
									<h1>About</h1>
									<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
								</Thumbnail>
							</Col>
							<Col xs={6} md={4}>
								<Thumbnail className="info-block" src={require('../../images/image_4.jpg')} alt="242x200">
									<h1>How We Work</h1>
									<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
								</Thumbnail>
							</Col>
							<Col xs={6} md={4}>
								<Thumbnail className="info-block" src={require('../../images/image_3.jpg')} alt="242x200">
									<h1>Find A Market</h1>
									<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
								</Thumbnail>
							</Col>
						</Row>
					</Grid>
				</div>
				<div className="dropdown-container">
					<Well>
						<h1>Featured Market List: </h1>
						<FormControl componentClass="select" placeholder="select" onChange={this.selectFarm}>
							<option value="select">select</option>
							{this.makeDropDownItems()}
						</FormControl>
					</Well>
				</div>
				<div className="main-app-pic-container">
					<img className="main-app-pic" alt="farmers-market-background" src={require('../../images/clip-image-1.png')}/>
				</div>
			</div>
		);
	}
}

export default App;
