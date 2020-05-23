import React from 'react';
import styled from 'styled-components';
const TweetsDiv = styled.div`
	background: white;
	padding: 13px 19px 13px 15px;
	border-bottom: 1px solid #d9d9d9;
	width: 100%;
	display: inline-flex;
	img {
		border-radius: 50%;
		height: 44px;
	}
	.content_div {
		padding-left: 10px;
		width: 100%;
		display: flex;
		flex-direction: column;
		padding-top: 5px;
		.text {
			.name {
				font-size: 1.2em;
				letter-spacing: 0;
				text-align: left;
				margin-right: 5px;
			}
			.rate {
				font-size: 1em;
				color: ${(props) => props.theme.primaryColor};
			}
		}
		.date {
			font-size: 1em;
			color: ${(props) => props.theme.colorLight};
			margin-bottom: 5px;
		}
	}
	.tweet {
		font-size: 1.2em;
		b {
			text-transform: uppercase;
		}
	}
`;
const Tweet = ({ data, ...props }) => {
	const GetHighlightedText = (text, highlight) => {
		const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
		let formatedText = `${parts[0] ? parts[0] : ``}<b>${
			parts[1] ? parts[1] : ``
		}</b>`;
		for (let i = 2; i < parts.length; i++) {
			formatedText = formatedText + `${parts[i] ? parts[i] : ``}`;
		}
		return formatedText;
	};
	function createMarkup() {
		const markUp = data.entities.hashtags.reduce(function (
			accumulator,
			currentValue
		) {
			return GetHighlightedText(accumulator, `#${currentValue.text}`);
		},
		data.text);
		return { __html: markUp };
	}
	return (
		<TweetsDiv className='tweets__div'>
			<img
				className='twitter_user__img'
				src={data.user.profile_image_url}
				alt='dp'
			/>

			<div className='content_div'>
				<div className='text'>
					<span className='name'>{data.user.name}</span>
					<span className='rate'>{`@${data.user.screen_name}`}</span>
				</div>
				<div className='date'>
					<span>
						{new Intl.DateTimeFormat('en-GB').format(new Date(data.created_at))}
					</span>
				</div>

				<div className='tweet'>
					<span dangerouslySetInnerHTML={createMarkup()}></span>
				</div>
			</div>
		</TweetsDiv>
	);
};

export default Tweet;
