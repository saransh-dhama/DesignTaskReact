import styled from 'styled-components';

export const NavigationBarMobile = styled.section`
	background: white;
	position: fixed;
	width: 100%;
	z-index: 1000;
	height: 70px;
	width: 100%;
	@media (min-width: 813px) {
		display: none;
	}
	@media (max-width: 812px) {
		display: block;
	}
`;
export const NavigationContainer = styled.div`
	height: 70px;
`;
export const LogoSection = styled.section`
	left: 0;
	position: fixed;
	width: 200px;
	text-align: center;
	right: 0;
	margin: auto;
	top: 10px;
`;

export const TextLogo = styled.span`
	margin-top: 7px;
	display: block;
	font-size: 22px;
	letter-spacing: 0.1rem;
	svg {
		width: 25px;
	}
`;
export const MenuToggleSection = styled.section`
	position: fixed;
	width: 30px;
	z-index: 999;
	top: 25px;
	cursor: pointer;
`;
export const SideWrapperSection = styled.section`
	background: white;
	z-index: 998;
	position: fixed;
	left: 250px;
	width: ${(props) => (props.show ? '100%' : '0')};
	height: calc(100vh - 70px);
	overflow: scroll;
	margin-left: -250px;
	overflow-y: auto;
	-webkit-transition: all 0.2s ease;
	-moz-transition: all 0.2s ease;
	-o-transition: all 0.2s ease;
	transition: all 0.2s ease;
	top: 70px;
	@media (min-width: 813px) {
		display: none;
	}
	ul {
		position: absolute;
		top: 0;
		margin: 0;
		padding: 0;
		list-style: none;

		li {
			text-indent: 20px;
			line-height: 50px;
			font-size: 1.6em;
			a {
				display: block;
				text-decoration: none;
				&.active {
					text-decoration: none;
					font-weight: 700;
				}
			}
		}
	}
`;
export const BackDrop = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	z-index: -1;
	background: transparent;
	opacity: 0.7;
	display: ${(props) => (props.show ? 'block' : 'none')};
`;
