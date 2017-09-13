import React, { Component } from 'react';
import { Bar, Line, Pie, Doughnut, Radar, Polar } from 'react-chartjs-2';
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
					height={20}
					options={{
						title:{
							display: true,
							text: 'Product Distribution',
							fontSize:25
						},
						legend:{
							display: true,
							position: 'top'
						}
					}}
				/>
				<br />
				<br />

				<Polar
					data={this.state.chartData}
					width={50}
					height={20}
					options={{
						title:{
							display: false,
							text: 'Product Distribution',
							fontSize:25
						},
						legend:{
							display: true,
							position: 'top'
						}
					}}
				/>
			</div>

		);

	}
}

export default Chart;
