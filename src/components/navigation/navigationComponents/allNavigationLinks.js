import React from 'react';
import styled from 'styled-components';

import NavigationItem from '../../basicComponents/navLink';

const NavigationList = styled.nav`
	@media (max-width: 813px) {
		flex-direction: column;
	}
`;

const LinksItems = styled.li`
	a {
		font-size: 1.5em;
		text-transform: uppercase;
	}
`;

const allNavigationLinks = ({ type, toggleMenu }) => {
	return (
		<NavigationList className='nav justify-content-center'>
			<LinksItems className='nav-item' onClick={toggleMenu}>
				<NavigationItem link='#'>Campaigns</NavigationItem>
			</LinksItems>

			<LinksItems className='nav-item' onClick={toggleMenu}>
				<NavigationItem link='/#'>Influencers</NavigationItem>
			</LinksItems>
			<LinksItems className='nav-item' onClick={toggleMenu}>
				<NavigationItem link='/#'>Statistics</NavigationItem>
			</LinksItems>
		</NavigationList>
	);
};

export default allNavigationLinks;
