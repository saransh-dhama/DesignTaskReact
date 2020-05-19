import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../../utils/router.jsx';
import Aux from '../aux/aux.jsx';
import styled, { createGlobalStyle } from 'styled-components';
import Navigation from '../../components/navigation';
const GlobalStyle = createGlobalStyle`
	body {
    color: ${(props) => props.theme.text_color};
	}
`;
const Main = styled.main`
	padding-top: 70px;
`;

const Layout = () => {
	return (
		<Aux>
			<GlobalStyle />
			<BrowserRouter>
				<Navigation />
				<Main id='page-content-wrapper' role='main'>
					<Routes />
				</Main>
			</BrowserRouter>
		</Aux>
	);
};

export default Layout;
