import React from 'react';
import styled from 'styled-components';

const HomePage = styled.section`
	background: ${(props) => props.theme.background};
`;
const HomePageComponent = () => {
	return (
		<HomePage className='home-page__section'>
			<h1>HELLO</h1>
		</HomePage>
	);
};

export default HomePageComponent;
