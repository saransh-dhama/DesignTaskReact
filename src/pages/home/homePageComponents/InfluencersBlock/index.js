import React from 'react';
import styled from 'styled-components';
const InfluencersDiv = styled.div`
	background: white;
	padding: 13px 19px 13px 15px;
	border-bottom: 1px solid #d9d9d9;
	width: 100%;
	display: inline-flex;
	img {
		width: 44px;
	}
	.content_div {
		padding-left: 10px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding-top: 5px;
		.text {
			.name {
				font-size: 1.2em;
				letter-spacing: 0;
				text-align: left;
			}
			.rate {
				font-size: 1em;
				color: ${(props) => props.theme.colorLight};
				text-align: left;
				display: block;
			}
		}
	}
	.add {
		font-weight: ${(props) => props.theme.fontBold};
		font-size: 1em;
		color: ${(props) => props.theme.primaryColor};
		text-align: center;
		border: 1px solid #d9d9d9;
		border-radius: ${(props) => props.theme.radius};
		padding: 1px 12px;
		height: 35px;
		width: 85px;
		line-height: 13px;
	}
`;
const Influencer = ({ data, ...props }) => {
	return (
		<InfluencersDiv className='influencer__div'>
			<img
				className='influencer__img'
				src={require(`../../../../assets/images/${data.img}`)}
				alt='dp'
			/>

			<div className='content_div'>
				<div className='text'>
					<span className='name'>{data.name}</span>
					<span className='rate'>{`Engagement rate: ${data.rate}%`}</span>
				</div>

				<div className='add'>
					<span>ADD TO FAVOURITES</span>
				</div>
			</div>
		</InfluencersDiv>
	);
};

export default Influencer;
