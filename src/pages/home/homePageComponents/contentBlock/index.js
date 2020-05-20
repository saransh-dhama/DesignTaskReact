import React from 'react';
import styled from 'styled-components';

export const ContentDiv = styled.div`
	h2 {
		font-weight: ${(props) => props.theme.fontLight};
		font-size: 1.6em;
		margin-bottom: 10px;
	}
`;

const Block = ({ title, ...props }) => {
	return (
		<ContentDiv>
			<h2>{title}</h2>
			{props.children}
		</ContentDiv>
	);
};

export default Block;
