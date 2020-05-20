import styled from 'styled-components';
import { Collapse, Navbar } from 'reactstrap';

export const NavigationBarDesktop = styled(Navbar)`
	background: white;
	@media (min-width: 813px) {
		display: block;
	}
	@media (max-width: 812px) {
		display: none;
	}
`;
export const LogoSection = styled.section`
	position: absolute;
	width: 100px;
	left: 15px;
	a {
		font-family: Baskerville-Serial-Heavy-Regular;
		font-size: 22px;
		color: #1f1f1f;
		padding: 0;
		margin: 0;
	}
`;
export const LinkList = styled(Collapse)`
	position: relative;
	justify-content: center !important;
	li {
		line-height: 40px;
		text-align: center;
		cursor: pointer;
		a {
			padding: 0.5rem 0;
			margin-right: 31px;
			&:hover,
			&:focus,
			&.active {
				text-decoration: none;
				font-weight: ${(props) => props.theme.fontBold};
			}
		}
	}
`;
export const RightContentDiv = styled.div`
	right: 0px;
	position: absolute;
`;
export const MailDiv = styled.div`
	width: 25px;
	position: relative;
	display: inline-block;
	span {
		position: absolute;
		right: -4px;
		bottom: -2px;
		font-size: 0.6em;
		color: ${(props) => props.theme.primaryColor};
		background: white;
		border: 1px solid ${(props) => props.theme.colorLightEx};
		border-radius: 50%;
		width: 9px;
		height: 9px;
		text-align: center;
		padding: 0px;
		line-height: 7px;
		padding-left: 1px;
		font-weight: ${(props) => props.theme.fontBold};
	}
`;
export const Icon = styled.img`
	width: 25px;
`;
export const ProfileButton = styled.button`
	border: 0px;
	font-size: 1.4em;
	padding: 0px;
	padding-left: 12px;
	img {
		margin-right: 3px;
	}
`;
export const ArrowDown = styled.img`
	width: 13px;
	margin-left: 7px;
`;
