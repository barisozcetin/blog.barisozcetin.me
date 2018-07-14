import React from 'react';

const sideBar = () => {
	return (
		<div>
			<div className="form-group">
				<p>You can subscribe to my mail list and stay up to date with my posts</p>
				<input type="text" name="email" id="" className="form-input mb-2" placeholder="Email Address" />
				<button type="submit" className="btn btn-dark btn-block">
					SUBSCRIBE
				</button>
			</div>
		</div>
	);
};

export default sideBar;
