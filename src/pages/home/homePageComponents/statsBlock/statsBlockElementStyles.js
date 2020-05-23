import styled from 'styled-components';

export const StatsDiv = styled.div`
	width: 100%;
	background-color: white;
	height: 354px;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
	border-radius: ${(props) => props.theme.radius};
`;
export const TabDiv = styled.div`
	width: 100%;
	height: 40px;
	border-bottom: 1px solid #d8d8d8;
	display: flex;
	justify-content: space-around;
`;
export const TabButton = styled.button`
	border: none;
	width: 57px;
	padding: 8px;
	font-size: 1.2em;
	background: white;
	${(props) =>
		props.active
			? `border-bottom: 2px solid ${props.theme.primaryColor};`
			: null}
`;
export const DropDownDiv = styled.div`
	width: 100%;
	display: flex;
	padding: 12px 14px 10px 15px;
	align-items: baseline;

	.text {
		font-size: 1.2em;
		letter-spacing: 0;
		text-align: left;
		margin-right: 11px;
		width: 96px;
	}
	.btn-group {
		padding: 0px;
		.dropDownButton {
			border: 1px solid #d8d8d8;
			font-size: 1.2em;
			text-align: left;
			padding: 6px 8px;
			height: 31px;
			&:after {
				border: 4px;
				border-top: 6px solid #d8d8d8;
				border-right: 6px solid transparent;
				border-bottom: 0;
				border-left: 6px solid transparent;
				right: 8px;
				position: absolute;
				top: 12px;
			}
		}
		.dropdown-menu {
			width: 100%;
			${(props) =>
				props.isDropdownVisible ? 'display: block;' : 'display: none;'}
			padding:0px;
			button {
				background: white;
				font-size: 1.2em;
				font-size: 1.2em;
				white-space: break-spaces;
				line-height: 13px;
				padding: 9px 5px;
				&:not(:last-child) {
					border-bottom: 1px solid #d8d8d9;
				}
				&:hover {
					background: #c6c6c64a;
				}
			}
		}
	}
`;
export const ChartDiv = styled.div`
	width: 90%;
	height: 98px;
	position: relative;
	margin: auto;
	[dominant-baseline~='text-before-edge'] {
		font-size: 11px !important;
		font-weight: ${(props) => props.theme.fontBold};
		fill: #8d8d8d !important;
	}
`;
export const StatNumbersDiv = styled.div`
	padding: 25px 14px 14px 14px;
	display: grid;
	grid-column-gap: 20px;
	grid-row-gap: 15px;
	grid-template-columns: auto auto;
	.eachStatBlock {
		display: flex;
		flex-direction: column;
		height: 55px;
		border: 1px solid #d8d8d8;
		border-radius: 3px;
		justify-content: center;
		cursor: pointer;
		@media (min-width: 990px) {
			width: 126px;
		}
		.number {
			font-weight: ${(props) => props.theme.fontBold};
			font-size: 1.8em;
			color: ${(props) => props.theme.primaryColor};
			text-align: center;
			display: block;
			margin-bottom: -3px;
		}
		.type {
			display: block;
			font-weight: ${(props) => props.theme.fontBold};
			font-size: 0.8em;
			color: ${(props) => props.theme.colorLightEx};
			text-align: center;
			text-transform: uppercase;
			svg {
				margin-right: 2px;
				#instaIconSvg,
				#snap {
					fill: ${(props) => props.theme.colorLightEx};
				}
			}
		}
		&:hover {
			background: ${(props) => props.theme.primaryColor};
			box-shadow: inset 0 1px 1px 0 #950031;
			.number,
			.type {
				color: white;
			}
			svg {
				#instaIconSvg,
				#snap {
					fill: white;
				}
			}
		}
	}
`;
