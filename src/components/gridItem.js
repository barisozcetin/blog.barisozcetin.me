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
					<h3 className="card--category card-subtitle text-blue">{post.content.category}</h3>
				</Link>
				<Link to={post.full_slug}>
					<h1 className="text-dark card-title h1">{post.content.title}</h1>
				</Link>
				<div className="social-buttons">
					<button className="social-button btn btn-lg btn-facebook text-light">
						<i className="fab fa-facebook-f" />
					</button>
					<button className="social-button btn btn-lg btn-twitter text-light">
						<i className="fab fa-twitter" />
					</button>
					<button className="social-button btn btn-lg btn-linkedin text-light">
						<i className="fab fa-linkedin-in" />
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
