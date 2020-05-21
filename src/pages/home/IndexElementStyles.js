import styled from 'styled-components';
export const HomePage = styled.section`
	background: ${(props) => props.theme.background};
	height: calc(100vh - 59px);
	padding-top: 39px;
	h1 {
		font-size: 18px;
		font-weight: ${(props) => props.theme.fontBold};
		color: ${(props) => props.theme.color};
		display: inline-block;
		margin-right: 10px;
	}
	.createDesktop {
		border: 0px;
		font-size: 1.3em;
		padding: 9px 10px;
		background: ${(props) => props.theme.primaryColor};
		color: #ffffff;
		border-radius: ${(props) => props.theme.radius};
		height: 34px;
		font-weight: ${(props) => props.theme.fontBold};
		@media (max-width: 813px) {
			display: none;
		}
	}
	.createMobile {
		border: 0px;
		font-size: 3em;
		background: ${(props) => props.theme.primaryColor};
		color: #ffffff;
		border-radius: 50%;
		height: 40px;
		width: 40px;
		line-height: 11px;
		font-weight: 700;
		position: fixed;
		bottom: 30px;
		right: 15px;
		z-index: 1;
		font-weight: ${(props) => props.theme.fontBold};
		@media (min-width: 813px) {
			display: none;
		}
	}
`;
export const ContentDiv = styled.div`
	h2 {
		font-weight: ${(props) => props.theme.fontLight};
		font-size: 1.6em;
		margin-bottom: 10px;
	}
`;
export const RightContentDiv = styled(ContentDiv)`
	width: 66.66%;
	padding: 15px 10px 0px 15px;
	@media (max-width: 813px) {
		width: 100%;
	}
`;
export const LeftContentDiv = styled(ContentDiv)`
	width: 33.33%;
	padding: 11px 0px 0px 0px;
	max-width: 319px;
`;
export const LeftContent = styled.div`
	background: #d8d8d8;
	height: calc(100vh - 220px);
	max-height: 80vh;
	overflow: auto;
	padding-bottom: 10px;
`;
