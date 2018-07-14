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
				<button className="s-circle">
					<i className="fab fa-facebook-f" />
				</button>
				<button className="s-circle">
					<i className="fab fa-twitter" />
				</button>
				<button className="s-circle btn-lg">
					<i className="fab fa-linkedin-in" />
				</button>
				<button className="s-circle btn-lg">
					<i className="fab fa-github" />
				</button>
			</div>
			<style jsx>{`
				.s-circle {
					border: 1px black solid;
					color: white;
					width: 50px;
					height: 50px;
					background-color: black;
				}
				.btn-group {
					justify-content: space-between;
				}
				@media only screen and (min-width: 768px) {
					.sidebar--container {
						padding-top: 150px;
					}
				}
			`}</style>
		</div>
	);
};

export default sideBar;
