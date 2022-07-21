import React from 'react';
import s from './Post.module.css';

const Post = () => {
	return (
		<div className={s.item}>
			<img
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxSHvVFzW-lTwbSThX_--UHW5mP08bN2labw&usqp=CAU"
				alt=""
			/>
			new post 1
			<div>
				<span>like</span>
			</div>
		</div>
	);
};
export default Post;
