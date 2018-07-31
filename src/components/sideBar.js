import React from 'react';

const sideBar = () => {
	return (
		<div className="sidebar--container">
			<hr />
			<div className="form-group text-center subscribe-container">
				<p>You can subscribe to my mail list and stay up to date with my posts.</p>
				<input type="text" name="email" id="" className="form-input mb-2" placeholder="Email Address" disabled />
				<button type="submit" className="btn btn-dark btn-block" disabled>
					SUBSCRIBE
				</button>
				<span className="coming">COMING SOON</span>
			</div>
			<div className="btn-group btn-group-block">
				<a href="https://www.facebook.com" className="s-circle btn-lg btn-social">
					<i className="fab fa-facebook-f" />
				</a>
				<a className="s-circle btn-lg btn-social" href="https://www.twitter.com/baris_ozcetin">
					<i className="fab fa-twitter" />
				</a>

				<a className="s-circle btn-lg btn-social" href="https://www.linkedin.com/in/baris-ozcetin/">
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
				.subscribe-container {
					position: relative;
				}
				.coming {
					position: absolute;
					top: 40px;
					border: red 8px solid;
					color: red;
					transform: rotate(345deg);
					font-size: 1.5rem;
					font-weight: bold;
					width: 90%;
					height: 40%;
					align-self: center;
					justify-self: center;
					display: grid;
					justify-content: center;
					align-content: center;
				}
				@media only screen and (min-width: 1024px) {
					.sidebar--container {
						padding-top: 150px;
					}
					hr {
						display: none;
					}
				}
			`}</style>
		</div>
	);
};

export default sideBar;
