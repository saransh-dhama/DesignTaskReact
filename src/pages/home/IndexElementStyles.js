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
	max-height: calc(100vh - 110px);

	overflow: auto;
	padding-bottom: 10px;
	@media (max-width: 813px) {
		max-height: 280px;
	}
`;
export const StickyDiv = styled.div`
	position: sticky;
	top: 100px;
`;

export const StatsInfluencersWrapperDiv = styled.div`
	padding: 13px 15px 15px 15px;
	display: inline-flex;
	justify-content: flex-start;
`;
export const StatisticsDiv = styled.div`
	width: 300px;
	margin-right: 21px;
	@media (max-width: 990px) {
		width: 100%;
		max-width: 100%;
		margin-right: unset;
	}
`;

export const InfluencersDiv = styled.div`
	padding: 0px;
	width: 33.33%;
	min-width: 300px;
	@media (max-width: 990px) {
		width: 100%;
		max-width: 100%;
		margin-bottom: 23px;
	}
	@media (max-width: 813px) {
		width: 100%;
		max-width: 100%;
		padding: 15px;
	}
`;
