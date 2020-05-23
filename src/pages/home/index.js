import React from 'react';
import Campaign from './homePageComponents/CampaignBlock';
import {
	HomePage,
	RightContentDiv,
	LeftContentDiv,
	LeftContent,
	StatsInfluencersWrapperDiv,
	StatisticsDiv,
	InfluencersDiv,
	StickyDiv,
	TweetsDiv,
} from './IndexElementStyles';
import { Data, ToDoData, Influencers, ChartData } from './pageData';
import Block from './homePageComponents/contentBlock';
import ToDoBlock from './homePageComponents/toDoBlock';
import InfluencerBlock from './homePageComponents/InfluencersBlock';
import StatsBlock from './homePageComponents/statsBlock';
import TweetsBlock from './homePageComponents/tweetsBlock';
import TwitterJson from './twitter-data.json';
const HomePageComponent = () => {
	const tweetsData = TwitterJson.statuses;
	console.log(tweetsData);
	const tweetsSelector = (tweet, index) => {
		return <TweetsBlock data={tweet} key={index} />;
	};
	return (
		<HomePage className='home-page__section'>
			<div className='home-page__section__container container'>
				<h1>MY DASHBOARD</h1>
				<button className='createDesktop'>CREATE A NEW CAMPAIGN</button>
				<button className='createMobile'>+</button>
				<div className='row'>
					<RightContentDiv className='rightContent__div'>
						<Block title='Ongoing Campaigns'>
							{Data.map((campaignData, index) => {
								return <Campaign campaign={campaignData} key={index} />;
							})}
						</Block>
						<StatsInfluencersWrapperDiv className='StatsInfluencersWrapper__div row'>
							<StatisticsDiv className='Statistics__div'>
								<Block title='Statistics overview'>
									<StatsBlock data={ChartData} />
								</Block>
							</StatisticsDiv>
							<InfluencersDiv className='Influencers__div'>
								<Block title='Top influencers'>
									{Influencers.map((Influencer, index) => {
										return <InfluencerBlock data={Influencer} key={index} />;
									})}
								</Block>
							</InfluencersDiv>
							<TweetsDiv className='tweets__div'>
								<Block title='Tweeter feed'>
									<div className='scroll_div'>
										{tweetsData.map((tweet, index) => {
											const hasUXTag = tweet.entities.hashtags.find((tag) => {
												return tag.text === 'UX' || tag.text === 'ux';
											});

											return hasUXTag ? tweetsSelector(tweet, index) : null;
										})}
									</div>
								</Block>
							</TweetsDiv>
						</StatsInfluencersWrapperDiv>
					</RightContentDiv>
					<LeftContentDiv className='leftContent__div'>
						<StickyDiv>
							<Block title="My to do's (3)">
								<LeftContent className='leftContent__wrapper__div'>
									{ToDoData.map((todo, index) => {
										return <ToDoBlock data={todo} key={index} />;
									})}
								</LeftContent>
							</Block>
						</StickyDiv>
					</LeftContentDiv>
				</div>
			</div>
		</HomePage>
	);
};

export default HomePageComponent;
