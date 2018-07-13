import React from 'react';
import Link from 'gatsby-link';

const Header = ({ siteTitle }) => (
	<nav className="navbar-container">
		<section className="">
			<Link to="/">
				<div className="form-group has-icon-left navbar--logo text-center">
					<img
						src="https://res.cloudinary.com/dydyt6wbt/image/upload/v1531524115/favicon-256.png"
						alt=""
						className="img-responsive form-inline"
					/>
					<span className="form-inline">blog.barisozcetin.me</span>
				</div>
			</Link>
		</section>
		<section className="navbar--links text-justify text-center">
			<Link to="/">Main</Link>
			<Link to="/">Main</Link>
		</section>
		<style jsx>{`
			.navbar-container {
				display: grid;
			}
			.navbar--logo {
				display: flex;
			}
			@media only screen and (min-width: 480px) {
				.navbar-container {
					grid-template-columns: 1fr 1fr;
					grid-gap: 100px;
					height: 140px;
					padding-top: 20px;
					padding-bottom: 20px;
				}
			}
			section {
				display: grid;
				align-content: center;
				grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
				justify-items: center;
			}
			img {
				max-height: 80px;
			}
		`}</style>
	</nav>
);

export default Header;
