import React from 'react';
import {
	FacebookIcon,
	LineIcon,
	LinkedinIcon,
	TwitterIcon,
	WhatsappIcon,
	WeiboIcon,
	RedditIcon,
	InstapaperIcon,
	FacebookShareButton,
	LineShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	WeiboShareButton,
	RedditShareButton,
	InstapaperShareButton,
} from 'react-share';

import { SharedContent } from './constants.js';
import './SharedButtons.css'

const SharedButtons = ({ addToURL }) => {
	addToURL = addToURL || '';

	return (
		<div>
			<span>
				<FacebookShareButton url={SharedContent.URL+addToURL} quote={SharedContent.FB}>
					<FacebookIcon size={32} round={true} />
				</FacebookShareButton>
			</span>
			<span>
				<TwitterShareButton url={SharedContent.URL+addToURL} title={SharedContent.SHORT_MESSAGE}>
					<TwitterIcon size={32} round={true} />
				</TwitterShareButton>
			</span>
			<span>
				<LineShareButton url={SharedContent.URL+addToURL} title={SharedContent.TEXT}>
					<LineIcon size={32} round={true} />
				</LineShareButton>
			</span>
			<span>
				<WhatsappShareButton url={SharedContent.URL+addToURL} title={SharedContent.TEXT}>
					<WhatsappIcon size={32} round={true} />
				</WhatsappShareButton>
			</span>
			<span>
				<LinkedinShareButton url={SharedContent.URL+addToURL} title={SharedContent.TEXT}>
					<LinkedinIcon size={32} round={true} />
				</LinkedinShareButton>
			</span>
			<span>
				<InstapaperShareButton url={SharedContent.URL+addToURL} title={SharedContent.TEXT}>
					<InstapaperIcon size={32} round={true} />
				</InstapaperShareButton>
			</span>
			<span>
				<RedditShareButton url={SharedContent.URL+addToURL} title={SharedContent.TEXT}>
					<RedditIcon size={32} round={true} />
				</RedditShareButton>
			</span>
			<span>
				<WeiboShareButton url={SharedContent.URL+addToURL} title={SharedContent.WEIBO}>
					<WeiboIcon size={32} round={true} />
				</WeiboShareButton>
			</span>
		</div>
	);
};

export default SharedButtons;
