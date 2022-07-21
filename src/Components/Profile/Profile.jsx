import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
	return (
		<div className={s.content}>
			<img src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg" alt="" />
			<div>ava</div>
			<MyPosts />
		</div>
	);
};
export default Profile;
