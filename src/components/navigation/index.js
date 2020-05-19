import React from 'react';
import DesktopNavigation from './navigationComponents/desktop/topNavigation';
import styled from 'styled-components';

import MobileSideNavigation from './navigationComponents/mobile/mobileNav';

const Header = styled.header`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 70px;
	font-size: 1rem;
`;
const Navigation = () => {
	return (
		<Header id='header'>
			<DesktopNavigation />
			<MobileSideNavigation />
		</Header>
	);
};

export default Navigation;
