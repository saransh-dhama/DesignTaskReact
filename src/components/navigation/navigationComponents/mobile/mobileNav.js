import React, { useState } from 'react';
import MenuToggle from './menuSvg';

import NavigationItems from '../allNavigationLinks';
import {
	NavigationBarMobile,
	NavigationContainer,
	LogoSection,
	TextLogo,
	MenuToggleSection,
	SideWrapperSection,
	BackDrop,
} from './elementStyles';

const MobileNavigation = () => {
	const [isToggled, toggleMenu] = useState(false);
	const togglemenu = () => {
		toggleMenu(!isToggled);
	};
	return (
		<>
			<NavigationBarMobile
				data-tag='navigation-bar-mobile'
				id='mobile_navigation_bar_top'
			>
				<NavigationContainer className='container'>
					<LogoSection data-tag='logo-section'>
						<a href='/'>
							<TextLogo data-tag='text-logo'>StyleLike</TextLogo>
						</a>
					</LogoSection>
					<MenuToggleSection
						data-tag='menu-toggle-section'
						id='menu-toggle'
						onClick={togglemenu}
					>
						<MenuToggle />
					</MenuToggleSection>
				</NavigationContainer>
			</NavigationBarMobile>
			<SideWrapperSection
				data-tag='side-wrapped-section'
				id='sidebar-wrapper'
				show={isToggled}
			>
				<NavigationItems type='sidebar-nav' toggleMenu={togglemenu} />
				<BackDrop data-tag='backdrop' show={isToggled} onClick={togglemenu} />
			</SideWrapperSection>
		</>
	);
};

export default MobileNavigation;
