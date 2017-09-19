import React, { Component } from 'react';
import { Doughnut, Polar } from 'react-chartjs-2';
import './Chart.css';

class Chart extends Component{
	constructor(props){
		super(props);
		this.state = {
			chartData: this.props.chartData
		};

	}



	render(){
		return(
			<div className="product-chart">
				<Doughnut
					data={this.state.chartData}
					width={50}
					height={30}
					options={{
						title:{
							display: true,
							text: 'Product Distribution',
							fontSize: 30
						},
						legend:{
							display: true,
							position: 'top',
							labels: {
								fontSize: 22
							}
						}
					}}
				/>
				<br />
				<br />

				<Polar
					data={this.state.chartData}
					width={50}
					height={30}
					options={{
						title:{
							display: false,
							text: 'Product Distribution',
							fontSize:25
						},
						legend:{
							display: true,
							position: 'top',
							labels: {
								fontSize: 22
							}
						}
					}}
				/>
			</div>

		);

	}
}

export default Chart;
