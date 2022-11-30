import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div>
			my posts
			<div>new post</div>
			<div className={s.posts}>
				<Post message="Hi, how are you" likesCount="10" />
				<Post message="It's my first post" likesCount="15" />
				<Post />
			</div>
		</div>
	);
};
export default MyPosts;
