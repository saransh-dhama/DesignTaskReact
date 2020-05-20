import React from 'react';
import {
	WrapperDiv,
	IconDiv,
	ImageDiv,
	ContentDiv,
	NotificationDiv,
	CampaignStatusDiv,
	EachStatBlock,
	StatsDiv,
	InstaStatsDiv,
	SnapchatStatsDiv,
} from './campaignElementStyles';
const CampaingBlockComponent = ({ campaign, ...props }) => {
	return (
		<WrapperDiv className='campaignWrapper__div'>
			<div className='col'>
				<div className='row'>
					<ImageDiv className='image__div'>
						<img
							className='campaignImage'
							src={require(`../../../../assets/images/${campaign.img}`)}
							alt='mailIcon'
						/>
						<IconDiv>
							{campaign.instagram ? (
								<img
									src={require('../../../../assets/icons/insta.svg')}
									alt='instaIcon'
								/>
							) : null}
							{campaign.snapchat ? (
								<img
									src={require('../../../../assets/icons/snapchat.svg')}
									alt='snapchatIcon'
								/>
							) : null}
						</IconDiv>
					</ImageDiv>
					<ContentDiv className='content__div col'>
						<div className='infoDiv'>
							{campaign.watch ? (
								<NotificationDiv>
									<img
										src={require('../../../../assets/icons/bell.svg')}
										alt='bellIcon'
									/>
								</NotificationDiv>
							) : null}

							<CampaignStatusDiv>
								{campaign.status === 'active' ? (
									<>
										<span className='status'>Active</span>
										<span className='timeLeft'>
											Closes in {campaign.timeRemaining} days
										</span>
									</>
								) : null}
							</CampaignStatusDiv>
							<CampaignStatusDiv>
								<span className='influencers'>
									{campaign.timeRemaining} influencers
								</span>
							</CampaignStatusDiv>
							<CampaignStatusDiv>
								<span className='name'>NIKE Sneaker Campaign Summer II</span>
							</CampaignStatusDiv>
						</div>
						<StatsDiv className='statsDiv'>
							{campaign.instagram ? (
								<InstaStatsDiv className='instaStatsDiv'>
									<EachStatBlock>
										<span className='number'>{campaign.instaStats.reach}</span>
										<span className='type'>
											<img
												src={require('../../../../assets/icons/instaGray.svg')}
												alt='instaGray'
											/>
											reach
										</span>
									</EachStatBlock>
									<EachStatBlock>
										<span className='number'>{campaign.instaStats.likes}</span>
										<span className='type'>
											<img
												src={require('../../../../assets/icons/instaGray.svg')}
												alt='instaGray'
											/>
											Like
										</span>
									</EachStatBlock>
									<EachStatBlock>
										<span className='number'>
											{campaign.instaStats.comments}
										</span>
										<span className='type'>
											<img
												src={require('../../../../assets/icons/instaGray.svg')}
												alt='instaGray'
											/>
											comments
										</span>
									</EachStatBlock>
								</InstaStatsDiv>
							) : null}
							{campaign.snapchat ? (
								<SnapchatStatsDiv className='snapchatStatsDiv'>
									<EachStatBlock>
										<span className='number'>
											{campaign.snapchatStats.opens}
										</span>
										<span className='type'>
											<img
												src={require('../../../../assets/icons/snapchatGray.svg')}
												alt='snapchatGray'
											/>
											opens
										</span>
									</EachStatBlock>
									<EachStatBlock>
										<span className='number'>
											{campaign.snapchatStats.screens}
										</span>
										<span className='type'>
											<img
												src={require('../../../../assets/icons/snapchatGray.svg')}
												alt='snapchatGray'
											/>
											screens
										</span>
									</EachStatBlock>
									<EachStatBlock>
										<span className='number'>
											{campaign.snapchatStats.completion}
										</span>
										<span className='type'>
											<img
												src={require('../../../../assets/icons/snapchatGray.svg')}
												alt='snapchatGray'
											/>
											completion
										</span>
									</EachStatBlock>
								</SnapchatStatsDiv>
							) : null}
						</StatsDiv>
					</ContentDiv>
				</div>
			</div>
		</WrapperDiv>
	);
};

export default CampaingBlockComponent;
