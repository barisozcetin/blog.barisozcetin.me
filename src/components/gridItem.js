import React from 'react';
import Link from 'gatsby-link';

const gridItem = ({ post }) => {
	return (
		<div className="card" key={post.id}>
			<div className="card-image">
				<img src={post.content.thumbnail} alt="" className="img-responsive" />
			</div>
			<div className="card-header">
				<Link to={post.full_slug}>
					<h3 className="card--category card-subtitle text-primary">{post.content.category}</h3>
				</Link>
				<Link to={post.full_slug}>
					<h2 className="text-dark card-title h2">{post.content.title}</h2>
				</Link>
				<div className="social-buttons">
					<button className="social-button btn btn-lg btn-primary">
						<i className="fab fa-facebook" />
					</button>
					<button className="social-button btn btn-lg btn-primary">
						<i className="fab fa-twitter" />
					</button>
					<button className="social-button btn btn-lg btn-primary">
						<i className="fab fa-linkedin" />
					</button>
				</div>
			</div>
			<div className="card-body">
				<p>{post.content.summary}</p>
			</div>
			<style jsx>{`
				.social-buttons {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
					grid-gap: 10px;
					justify-content: space-between;
				}
			`}</style>
		</div>
	);
};

export default gridItem;
