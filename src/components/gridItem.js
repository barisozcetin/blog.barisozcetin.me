import React from 'react';
import Link from 'gatsby-link';

const gridItem = ({ post }) => {
	return (
		<div className="grid--item" key={post.id}>
			<img src={post.content.thumbnail} alt="" />
			<div className="card--controls">
				<Link to={post.full_slug}>
					<h3 className="card--category">Category</h3>
				</Link>
				<Link to={post.full_slug}>
					<h2 className="">{post.content.title}</h2>
				</Link>
				<p>{post.content.summary}</p>
			</div>
			<style jsx>{``}</style>
		</div>
	);
};

export default gridItem;
