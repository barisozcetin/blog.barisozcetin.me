// import React from 'react';
// import Components from './components.js';

// const Page = (props) => (
// 	<div>
// 		{props.blok.body &&
// 			props.blok.body.map((blok) => React.createElement(Components[blok.component], { key: blok._uid, blok: blok }))}
// 	</div>
// );

// export default Page;

import React, { Component } from 'react';
import Components from './components.js';

export class Post extends Component {
	state = {
		content: ''
	};
	componentDidMount() {
		//console.log(this.props);
		// this.setState({ content: this.props.blok.content });
		// this.setState(
		// 	(prev) => ({ content: this.props.blok.content }),
		// 	() => {
		// 		this.refs.test.innerHTML = this.state.content;
		// 	}
		// );
		// this.refs.test.innerHTML = 'Hello';
	}
	render() {
		console.log(this.props);
		return (
			<div className="post-grid">
				<div className="post-header">
					<h1>{this.props.blok.title}</h1>
					<div className="social-buttons">
						<button className="social-button btn btn-lg btn-primary">
							<i className="fab fa-facebook-f" />
						</button>
						<button className="social-button btn btn-lg btn-primary">
							<i className="fab fa-twitter" />
						</button>
						<button className="social-button btn btn-lg btn-primary">
							<i className="fab fa-linkedin-in" />
						</button>
					</div>
				</div>
				<div className="post-image">
					<img
						src={this.props.blok.image ? this.props.blok.image.url : '/error.jpg'}
						alt={this.props.blok.title}
						className="img-responsive"
					/>
				</div>
				<div className="post-body">
					<pre ref="test" className="test">
						{this.props.blok.content}
					</pre>
				</div>
				<style jsx>{`
					.social-buttons {
						display: grid;
						grid-template-columns: repeat(auto-fill, minmax(100px, 150px));
						grid-gap: 10px;
						justify-content: space-between;
						margin-top: 2rem;
						margin-bottom: 2rem;
					}
					img {
						max-height: 480px;
					}
					.test {
						word-wrap: break-word;
					}
				`}</style>
			</div>
		);
	}
}

export default Post;
