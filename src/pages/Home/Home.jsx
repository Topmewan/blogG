import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostCard } from '../../components';
import { fetchPosts } from '../../feature/reducers/posts/posts.actions';
import styles from './Home.module.scss';

export const Home = () => {
	const { posts, isLoading } = useSelector((state) => state.posts);
	console.log(posts);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	return (
		<div className={styles.home}>
			<div className={styles.container}>
				<div className={styles.left}>
					{isLoading ? (
						<h1>Loading...</h1>
					) : (
						<>
							{posts.map((post) => (
								<PostCard key={post._id} post={post} />
							))}
						</>
					)}
				</div>
				<div className={styles.right}></div>
			</div>
		</div>
	);
};
