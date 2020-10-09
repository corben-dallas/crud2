import React from 'react';
import Moment from 'react-moment';

const Post = ({content, created}) => {
	return (
		<div>
			<div>
				<span>Content</span>
				<p>{content}</p>
				<span>Created</span>
				<p>
					<Moment date={created} />
				</p>
			</div>
		</div>
	)
}

export default Post
