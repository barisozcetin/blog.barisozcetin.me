import React from 'react';
import GridItem from './gridItem';

const blogGrid = ({ posts }) => {
	return (
		<div className="blog--grid">
			{posts.map((post) => <GridItem post={post} key={post.id} />)}
			<style jsx>{`
				.blog--grid {
					display: grid;
				}
				@media only screen and (min-width: 480px) {
					.blog--grid {
						grid-template-columns: 1fr 1fr 1fr;
						grid-gap: 20px;
					}
				}
			`}</style>
		</div>
	);
};

export default blogGrid;