import React from 'react';
import styled from 'styled-components';
import { ResponsiveLine } from '@nivo/line';
import { Data } from '../data.js';

export const ChartDiv = styled.div`
	width: 270px;
	height: 98px;
	position: relative;
	margin: auto;
	[dominant-baseline~='text-before-edge'] {
		font-size: 11px !important;
		font-weight: ${(props) => props.theme.fontBold};
		fill: #8d8d8d !important;
	}
`;
const theme = {
	fontFamily: 'Lato',
	fontSize: '8px',
	textColor: '#484848',
};
const Chart = () => {
	return (
		<ResponsiveLine
			data={Data}
			margin={{ top: 10, right: 10, bottom: 20, left: 30 }}
			xScale={{ type: 'point' }}
			theme={theme}
			yScale={{
				type: 'linear',
				min: 'auto',
				max: 'auto',
				stacked: true,
				reverse: false,
			}}
			axisTop={null}
			axisRight={null}
			axisBottom={{
				orient: 'bottom',
				tickSize: 0,
				tickPadding: 5,
				tickRotation: 0,
				legend: '',
				legendOffset: 36,
				legendPosition: 'middle',
			}}
			axisLeft={{
				orient: 'left',
				tickSize: 0,
				tickPadding: 15,
				tickRotation: 0,
				legend: '',
				legendOffset: -40,
				legendPosition: 'middle',
				tickValues: [0, 25, 50, 75, 100],
			}}
			gridYValues={[0, 25, 50, 75, 100]}
			enableGridX={false}
			colors={{ datum: 'color' }}
			enablePoints={false}
			useMesh={false}
			legends={[]}
		/>
	);
};

export default Chart;
