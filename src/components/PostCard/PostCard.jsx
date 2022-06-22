import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import styles from './PostCard.module.scss';

export const convertTimestamp = (timestamp) => {
	moment.locale('ru');
	return moment(timestamp).format('LL');
};

export const PostCard = ({ post }) => {
	return (
		<div className={styles.card}>
			<div className={styles.top}></div>
			<div className={styles.footer}>
				<div className={styles.header}>
					<div
						className={styles.avatar}
						style={{
							backgroundImage: `url(${
								post?.user?.avatarUrl ??
								'https://html5css.ru/howto/img_avatar.png'
							})`,
						}}
					/>
					<div className={styles.main}>
						<h3>{post?.user?.fullName}</h3>
						<span>{convertTimestamp(post?.createdAt)}</span>
					</div>
				</div>

				<div className={styles.info}>
					<h1 className={styles.title}>{post?.title}</h1>
					<div className={styles.tags}>
						{post?.tags?.map((tag, idx) => (
							<span key={idx}>{tag}</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
