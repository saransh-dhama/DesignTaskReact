import React from 'react';
import styled from 'styled-components';
import ContentTypeBody from './contentTypeBody';
const ToDoBlockWrapper = styled.div`
	background: white;
	border-radius: ${(props) => props.theme.radius};
	width: 293px;
	height: 236px;
	margin: auto;
	margin-top: 10px;
	font-size: 1rem;
`;
const HeadingDiv = styled.div`
	background: #f4f4f4;
	font-size: 1.2em;
	padding: 12px 15px 12px 15px;
	line-height: 15px;
	${(props) =>
		`border-radius: ${props.theme.radius} ${props.theme.radius} 0px 0px;`};
	.name {
		color: ${(props) => props.theme.primaryColor};
	}
	.activity {
	}
	.campaign {
		font-weight: ${(props) => props.theme.fontBold};
	}
`;
const BodyDiv = styled.div``;
const ActionDiv = styled.div`
	padding: 10px 0px 10px 0px;
	display: flex;
	justify-content: space-evenly;
	border-top: 1px solid #d9d9d9;
	button {
		width: 116px;
		font-size: 1em;
		padding: 8px;
		color: ${(props) => props.theme.primaryColor};
		text-align: center;
		border: 1px solid #d9d9d9;
		border-radius: ${(props) => props.theme.radius};
	}
`;
const ToDoBlock = () => {
	return (
		<ToDoBlockWrapper className='toDoBlock__div'>
			<HeadingDiv className='heading__div'>
				<span className='name'>Ellaria Dorne </span>
				<span className='activity'>
					uploaded instagram content for proof to your campaign
				</span>
				<span className='campaign'> 'Nike Sneaker Campaign II'</span>
			</HeadingDiv>
			<BodyDiv className='body__div'>
				<ContentTypeBody />
			</BodyDiv>
			<ActionDiv>
				<button>Accept</button>
				<button>Decline</button>
			</ActionDiv>
		</ToDoBlockWrapper>
	);
};

export default ToDoBlock;
