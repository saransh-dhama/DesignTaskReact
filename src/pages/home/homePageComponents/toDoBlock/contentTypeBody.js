import React from 'react';
import styled from 'styled-components';
const ContentTypeBodyDiv = styled.div`
	padding: 9px 8px 9px 8px;
	display: flex;

	.new_content__img {
		width: 95px;
	}

	.text_div {
		padding-left: 7px;

		img {
			width: 11px;
		}
		.date {
			margin-bottom: 5px;
			font-size: 0.9em;
			color: ${(props) => props.theme.colorLightEx};
		}
		.text {
			font-size: 1em;
			.hashTags {
				color: ${(props) => props.theme.colorLightEx};
			}
		}
	}
`;
const ContentTypeBody = () => {
	return (
		<ContentTypeBodyDiv className='type_new_content__div'>
			<img
				className='new_content__img'
				src={require('../../../../assets/images/content1.png')}
				alt='instaIcon'
			/>

			<div className='text_div'>
				<div className='date'>
					<img
						src={require('../../../../assets/icons/instaGray.svg')}
						alt='instaIcon'
					/>{' '}
					<span>02.07.2016</span>
				</div>
				<div className='text'>
					<span>Who sasy you can't be elegant in sneakers?! :) </span>
					<span className='hashTags'>
						#nike #sneakers #morningoutfit #liveyourlife #fashion #dailyfashion
						#fashionista
					</span>
				</div>
			</div>
		</ContentTypeBodyDiv>
	);
};

export default ContentTypeBody;
