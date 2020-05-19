import React from 'react';
import { Link } from 'react-router-dom';

const NavigationItem = ({ link, ...props }) => (
	<Link className='nav-link' data-tag='nav-link' to={link} replace>
		{props.children}
	</Link>
);

export default NavigationItem;
