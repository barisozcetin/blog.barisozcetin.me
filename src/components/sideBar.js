import React from 'react';

const sideBar = () => {
	return (
		<div className="sidebar--container">
			<div className="form-group text-center">
				<p>You can subscribe to my mail list and stay up to date with my posts. -TODO-</p>
				<input type="text" name="email" id="" className="form-input mb-2" placeholder="Email Address" />
				<button type="submit" className="btn btn-dark btn-block">
					SUBSCRIBE
				</button>
			</div>
			<div className="btn-group btn-group-block">
				<a href="https://www.facebook.com" className="s-circle btn-lg btn-social">
					<i className="fab fa-facebook-f" />
				</a>
				<a className="s-circle btn-lg btn-social" href="https://www.twitter.com">
					<i className="fab fa-twitter" />
				</a>

				<a className="s-circle btn-lg btn-social" href="htps://www.linkedin.com">
					<i className="fab fa-linkedin-in" />
				</a>

				<a className="s-circle btn-lg btn-social" href="https://github.com/barisozcetin/">
					<i className="fab fa-github" />
				</a>
			</div>
			<style jsx>{`
				.s-circle {
					border: 1px black solid;
					color: white;
					width: 50px;
					height: 50px;
					background-color: black;
				}
				.btn-social {
					align-items: center;
					display: flex;
					justify-content: center;
				}
				.btn-group {
					justify-content: space-around;
				}
				@media only screen and (min-width: 1024px) {
					.sidebar--container {
						padding-top: 150px;
					}
				}
			`}</style>
		</div>
	);
};

export default sideBar;
