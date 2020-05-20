import styled from 'styled-components';

export const WrapperDiv = styled.div`
	background: white;
	height: 114px;
	border-radius: ${(props) => props.theme.radius};
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
	font-size: 1rem;
	margin-bottom: 10px;
	@media (max-width: 990px) {
		height: 100%;
	}
`;
export const ImageDiv = styled.div`
	width: 96px;
	.campaignImage {
		width: 100%;
	}
	@media (max-width: 990px) {
		overflow: hidden;
		width: 110px;
		.campaignImage {
			height: 100%;
			object-fit: cover;
			border-radius: 3px 0px 0px 3px;
		}
	}
	@media (max-width: 321px) {
		width: 22%;
	}
`;
export const IconDiv = styled.div`
	background: white;
	position: absolute;
	bottom: 13px;
	padding-left: 5px;
	img {
		width: 8px;
		height: 8px;
		margin-right: 5px;
	}
`;
export const ContentDiv = styled.div`
	padding: 25px 34px 25px 0px;

	.infoDiv {
		width: 213px;
		display: inline-block;
		padding-left: 20px;
	}
	@media (max-width: 990px) {
		padding: 15px 15px 15px 0px;
		.infoDiv {
			width: 40%;
		}
	}
`;
export const NotificationDiv = styled.div`
	width: 30px;
	height: 30px;
	position: absolute;
	left: -15px;
	margin-top: -4px;
	img {
		border: 1px dashed ${(props) => props.theme.colorLightEx};
	}
`;
export const CampaignStatusDiv = styled.div`
	.status {
		color: ${(props) => props.theme.colorLight};
		font-size: 1.1em;
		border: 1px solid ${(props) => props.theme.colorLightEx};
		border-radius: ${(props) => props.theme.radius};
		font-weight: ${(props) => props.theme.fontBold};
		padding: 0px 5px;
		margin-right: 6px;
		text-transform: uppercase;
	}
	.timeLeft {
		font-size: 1em;
		color: ${(props) => props.theme.colorLight};
	}
	.influencers {
		font-size: 1.1em;
		text-transform: uppercase;
		color: ${(props) => props.theme.primaryColor};
		font-weight: ${(props) => props.theme.fontBold};
	}
	.name {
		font-weight: ${(props) => props.theme.fontLight};
		font-size: 1.6em;
		letter-spacing: 0;
		line-height: 18px;
	}
`;
export const EachStatBlock = styled.div`
	text-align: center;
	width: 65px;
	display: inline-block;
	span {
		display: block;
	}
	.number {
		font-weight: ${(props) => props.theme.fontBold};
		font-size: 1.8em;
		color: ${(props) => props.theme.primaryColor};
	}
	.type {
		font-family: Lato-Bold;
		font-size: 0.8em;
		color: ${(props) => props.theme.colorLight};
		margin-top: -3px;
		text-transform: uppercase;
		img {
			width: 8px;
			margin-right: 3px;
			margin-top: -2px;
		}
	}
`;
export const StatsDiv = styled.div`
	margin-top: 15px;
	margin-left: 15px;
	max-width: 225px;
	float: right;
	@media (min-width: 991px) {
		width: 225px;
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-evenly;
		margin-top: -6px;
	}
	.instaStatsDiv {
		margin-bottom: 8px;
	}
	.instaStatsDiv,
	.snapchatStatsDiv {
		display: flex;
		justify-content: space-between;
	}
`;
export const InstaStatsDiv = styled.div`
	margin-bottom: 8px;
	display: flex;
	justify-content: space-between;
`;
export const SnapchatStatsDiv = styled.div`
	display: flex;
	justify-content: space-between;
`;
