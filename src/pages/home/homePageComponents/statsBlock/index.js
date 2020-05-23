import React, { useState, useEffect } from 'react';
import Chart from './chart';
import Insta from '../../../../assets/svg/insta';
import Snap from '../../../../assets/svg/snap';
import {
	StatsDiv,
	TabDiv,
	TabButton,
	DropDownDiv,
	ChartDiv,
	StatNumbersDiv,
} from './statsBlockElementStyles';
const StatsBlock = ({ data, ...props }) => {
	const [isWeekly, setIsWeekly] = useState(true);
	const [allData, setData] = useState(data.weekly);
	const [isDropdownVisible, setDropdownVisible] = useState(false);
	const statData = allData[0];
	const toggleWeekly = () => {
		setIsWeekly(!isWeekly);
	};
	useEffect(() => {
		setData(isWeekly ? data.weekly : data.monthly);
	}, [setData, isWeekly, data.weekly, data.monthly]);
	return (
		<StatsDiv>
			<TabDiv className='tab__div'>
				<TabButton active={isWeekly} onClick={toggleWeekly}>
					Weekly
				</TabButton>
				<TabButton active={!isWeekly} onClick={toggleWeekly}>
					Monthly
				</TabButton>
			</TabDiv>
			<DropDownDiv
				className='dropdown__div'
				isDropdownVisible={isDropdownVisible}
			>
				<span className='text'>Choose campaign:</span>
				<div className='btn-group col'>
					<button
						className='btn btn-sm dropdown-toggle dropDownButton'
						type='button'
						data-toggle='dropdown'
						aria-haspopup='true'
						aria-expanded='false'
						onClick={() => setDropdownVisible(!isDropdownVisible)}
					>
						All
					</button>
					<div className='dropdown-menu'>
						<button className='dropdown-item' href='#'>
							All
						</button>
						<button className='dropdown-item' href='#'>
							NIKE Sneaker Campaign Summer II
						</button>
						<button className='dropdown-item' href='#'>
							#DOYOUYOGA Campaign
						</button>
					</div>
				</div>
			</DropDownDiv>
			<ChartDiv className='chart__div'>
				<Chart data={allData} />
			</ChartDiv>
			<StatNumbersDiv className='statNumbers__div'>
				<div className='eachStatBlock'>
					<span className='number'>{statData.posts}</span>
					<span className='type'>
						<Insta />
						posts
					</span>
				</div>
				<div className='eachStatBlock'>
					<span className='number'>{statData.likes}</span>
					<span className='type'>
						<Insta />
						likes
					</span>
				</div>
				<div className='eachStatBlock'>
					<span className='number'>{statData.snaps}</span>
					<span className='type'>
						<Snap />
						snaps
					</span>
				</div>
				<div className='eachStatBlock'>
					<span className='number'>{statData.opens}</span>
					<span className='type'>
						<Snap />
						opens
					</span>
				</div>
			</StatNumbersDiv>
		</StatsDiv>
	);
};

export default StatsBlock;
