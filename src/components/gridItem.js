import React from 'react';
import Link from 'gatsby-link';

const gridItem = ({ post }) => {
	return (
		<div className="grid--item" key={post.id}>
			<img src={post.content.thumbnail} alt="" />
			<div className="card--controls">
				<Link to={post.full_slug}>Category</Link>
				<Link to={post.full_slug}>
					<h2>{post.content.title}</h2>
				</Link>
				<p>{post.content.summary}</p>
			</div>
			<style jsx>{`
				p {
					color: red;
				}
				img {
					width: 100%;
					max-height: 220px;
				}
			`}</style>
		</div>
	);
};

export default gridItem;
