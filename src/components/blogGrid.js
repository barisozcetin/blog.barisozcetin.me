import React from 'react';
import GridItem from './gridItem';

const blogGrid = ({ posts }) => {
	return (
		<div className="blog--grid">
			{posts && posts.map((post) => <GridItem post={post} key={post.id} dateTime={post.published_at} />)}
			<style jsx>{`
				.blog--grid {
					display: grid;
					justify-content: space-between;
					grid-template-columns: 1fr;
				}
				@media only screen and (min-width: 1024px) {
					.blog--grid {
						grid-template-columns: 1fr 1fr;
						grid-gap: 20px;
					}
				}
			`}</style>
		</div>
	);
};

export default blogGrid;
