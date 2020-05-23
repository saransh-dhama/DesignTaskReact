import React from 'react';
import styled from 'styled-components';
const PersonTypeBodyDiv = styled.div`
	padding: 15px 18px 15px 18px;
	display: flex;

	.person__img {
		width: 65px;
	}

	.text_div {
		padding-left: 17px;
		.name {
			font-size: 1.2em;
		}
		.stats {
		}
	}
`;
export const EachStatBlock = styled.div`
	width: 60px;
	display: inline-block;
	margin-right: 21px;
	span {
		display: block;
	}
	.number {
		font-weight: ${(props) => props.theme.fontBold};
		font-size: 1.8em;
		color: ${(props) => props.theme.primaryColor};
	}
	.type {
		font-family: Lato-Bold;
		font-size: 0.8em;
		color: ${(props) => props.theme.colorLight};
		margin-top: -3px;
		text-transform: uppercase;
		img {
			width: 8px;
			margin-right: 3px;
			margin-top: -2px;
		}
	}
`;
const PersonTypeBody = ({ data, ...props }) => {
	return (
		<PersonTypeBodyDiv className='type_person__div'>
			<img
				className='person__img'
				src={require(`../../../../assets/images/${data.img}`)}
				alt='instaIcon'
			/>

			<div className='text_div'>
				<div className='name'>
					<span>Amy Champeon</span>
				</div>
				<div className='stats'>
					<EachStatBlock>
						<span className='number'>34 567</span>
						<span className='type'>INSTAGRAM FOLLOWERS</span>
					</EachStatBlock>
					<EachStatBlock>
						<span className='number'>34 567</span>
						<span className='type'>INSTAGRAM FOLLOWERS</span>
					</EachStatBlock>
				</div>
			</div>
		</PersonTypeBodyDiv>
	);
};

export default PersonTypeBody;
