import React from "react";
import styled from "styled-components";
const Path = styled.path`
	/* fill: ${(props) => props.theme.input_border};
	stroke: ${(props) => props.theme.input_border}; */
`;
const Svg = () => (
	<svg version="1.1" id="menu_icon" x="0px" y="0px" viewBox="0 0 307.4 204.2">
		<g>
			<Path d="M12.7,25.4C5.7,25.4,0,19.7,0,12.7S5.7,0,12.7,0h282c7,0,12.7,5.7,12.7,12.7s-5.7,12.7-12.7,12.7H12.7L12.7,25.4z" />
			<Path
				d="M12.7,112.1c-7,0-12.7-5.7-12.7-12.7c0-7,5.7-12.7,12.7-12.7h282c7,0,12.7,5.7,12.7,12.7c0,7-5.7,12.7-12.7,12.7H12.7
		L12.7,112.1z"
			/>
			<Path
				d="M12.7,198.8c-7,0-12.7-5.7-12.7-12.7s5.7-12.7,12.7-12.7h282c7,0,12.7,5.7,12.7,12.7s-5.7,12.7-12.7,12.7H12.7L12.7,198.8z
		"
			/>
		</g>
	</svg>
);
export default Svg;
