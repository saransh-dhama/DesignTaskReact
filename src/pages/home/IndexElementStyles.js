import styled from 'styled-components';
export const HomePage = styled.section`
	background: ${(props) => props.theme.background};
	min-height: calc(100vh - 59px);
	padding: 39px 0px;

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
	@media (min-width: 813px) {
		.home-page__section__container {
			padding-left: 0px;
			padding-right: 0px;
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
	@media (max-width: 813px) {
		width: 100%;
		max-width: 100%;
		padding: 15px;
	}
`;
export const LeftContent = styled.div`
	background: #d8d8d8;
	max-height: calc(100vh - 75px);

	overflow: auto;
	padding-bottom: 10px;
	@media (max-width: 813px) {
		max-height: unset;
		background: unset;
	}
`;
export const StickyDiv = styled.div`
	position: sticky;
	top: 75px;
`;

export const StatsInfluencersWrapperDiv = styled.div`
	padding: 13px 15px 15px 15px;
	display: grid;
	grid-column-gap: 21px;
	grid-row-gap: 23px;
	/* grid-template-columns: 300px 297px 1fr; */
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	@media (max-width: 813px) {
		grid-template-columns: repeat(auto-fill, 100%);
	}
`;
export const StatisticsDiv = styled.div``;

export const InfluencersDiv = styled.div``;
export const TweetsDiv = styled.div`
	.scroll_div {
		overflow-y: auto;
		max-height: 355px;
	}
`;
