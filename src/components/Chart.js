import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

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
				<Pie
					data={this.state.chartData}
					options={{
						title:{
							display: true,
							text: 'Product Distribution',
							fontSize:25
						},
						legend:{
							display: true,
							position: 'right'
						}
					}}
				/>
			</div>

		);

	}
}

export default Chart;
