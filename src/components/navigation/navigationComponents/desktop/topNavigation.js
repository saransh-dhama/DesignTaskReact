import React from 'react';
import styled from 'styled-components';
import { Collapse, Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';
import NavigationItems from '../allNavigationLinks';

const NavigationBarDesktop = styled(Navbar)`
	background: white;
	position: fixed;
	width: 100%;
	z-index: 1000;
	height: 70px;
	padding-left: 0px;
	padding-right: 0px;
	@media (min-width: 813px) {
		display: block;
	}
	@media (max-width: 812px) {
		display: none;
	}
`;
const LogoSection = styled.section`
	position: absolute;
	width: 200px;
	height: 55px;
	left: 0;
`;

const Logo = styled.span`
	margin-top: 0px;
	display: inline-block;
	font-size: 20px;
	letter-spacing: 0.2rem;
	position: absolute;
	top: 12px;
`;
const LinkList = styled(Collapse)`
	position: relative;
	height: 56px;
	justify-content: center !important;
	li {
		line-height: 40px;
		min-width: 120px;
		text-align: center;
		cursor: pointer;
		a {
			&:hover,
			&:focus,
			&.active {
				text-decoration: none;
				font-weight: 700;
			}
		}
	}
`;

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
						<Logo>StyleLike</Logo>
					</Link>
				</LogoSection>

				<NavigationItems type='ml-auto' />
			</LinkList>
		</NavigationBarDesktop>
	);
};

export default DesktopNavigation;
