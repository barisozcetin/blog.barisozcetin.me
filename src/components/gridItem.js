import React from 'react';
import Link from 'gatsby-link';

const gridItem = ({ post, dateTime }) => {
	let date = new Date(dateTime);
	return (
		<div className="card" key={post.id}>
			<div className="card-image">
				<img src={post.content.image ? post.content.image.url : '/error.jpg'} alt="" className="img-responsive" />
			</div>
			<div className="card-header">
				<Link to={post.full_slug}>
					<h3 className="card--category card-subtitle text-blue">{post.content.category}</h3>
				</Link>
				<Link to={post.full_slug}>
					<h2 className="text-dark card-title h2">{post.content.title}</h2>
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
				<time className="centered text-right" dateTime={date}>
					{date.toDateString()}
				</time>
			</div>
			<div className="card-body">
				<p>{post.content.summary}</p>
			</div>
			<style jsx>{`
				.card {
					height: max-content;
				}
				.social-buttons {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
					grid-gap: 10px;
					justify-content: space-between;
				}

				.btn-facebook {
					background-color: #3b5a99;
				}

				.btn-twitter {
					background-color: rgb(37, 168, 224);
				}

				.btn-linkedin {
					background-color: #0d7bb7;
				}

				.text-blue {
					color: #209cee;
				}
				a:hover {
					text-decoration: none;
				}
				time {
					font-weight: bold;
					padding-top: 10px;
				}
			`}</style>
		</div>
	);
};

export default gridItem;
