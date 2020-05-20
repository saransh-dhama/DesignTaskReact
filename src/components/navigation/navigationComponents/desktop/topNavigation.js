import React from 'react';
import { Link } from 'react-router-dom';
import NavigationItems from '../allNavigationLinks';

import {
	NavigationBarDesktop,
	LogoSection,
	LinkList,
	RightContentDiv,
	MailDiv,
	Icon,
	ProfileButton,
	ArrowDown,
} from './elementStyles';
const DesktopNavigation = () => {
	return (
		<NavigationBarDesktop
			data-tag='navigation-bar-desktop'
			expand='md'
			id='nav_top'
			className='navbar bd-navbar'
		>
			<LinkList navbar className='container'>
				<LogoSection>
					<Link className='navbar-brand' to='/' replace>
						StyleLike
					</Link>
				</LogoSection>

				<NavigationItems type='ml-auto' />
				<RightContentDiv>
					<MailDiv>
						<Icon
							src={require('../../../../assets/icons/mail.svg')}
							alt='mailIcon'
						/>
						<span>2</span>
					</MailDiv>

					<ProfileButton>
						<Icon
							src={require('../../../../assets/icons/oval.svg')}
							alt='mailIcon'
						/>
						My Profile
						<ArrowDown
							src={require('../../../../assets/icons/arrow.svg')}
							alt='mailIcon'
						/>
					</ProfileButton>
				</RightContentDiv>
			</LinkList>
		</NavigationBarDesktop>
	);
};

export default DesktopNavigation;
