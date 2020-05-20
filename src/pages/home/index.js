import React from 'react';
import Campaign from './homePageComponents/CampaignBlock';
import {
	HomePage,
	RightContentDiv,
	LeftContentDiv,
} from './IndexElementStyles';
import { Data } from './campaignData';
import Block from './homePageComponents/contentBlock';
const HomePageComponent = () => {
	return (
		<HomePage className='home-page__section'>
			<div className='home-page__section__container container'>
				<h1>MY DASHBOARD</h1>
				<button className='createDesktop'>CREATE A NEW CAMPAIGN</button>
				<button className='createMobile'>+</button>
				<div className='row'>
					<RightContentDiv>
						<Block title='Ongoing Campaigns'>
							{Data.map((campaignData, index) => {
								return <Campaign campaign={campaignData} key={index} />;
							})}
						</Block>
					</RightContentDiv>
					<LeftContentDiv>
						<Block title="My to do's (3)"></Block>
					</LeftContentDiv>
				</div>
			</div>
		</HomePage>
	);
};

export default HomePageComponent;
