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
		// console.log(this.props);
		let postDate = new Date(this.props.dateTime);
		// console.log()
		return (
			<div className="post-grid">
				<div className="post-header">
					<h1>{this.props.blok.title}</h1>
					<time dateTime={postDate}>{postDate.toDateString()}</time>

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
				<div className="post-image">
					<img
						src={this.props.blok.image ? this.props.blok.image.url : '/error.jpg'}
						alt={this.props.blok.title}
						className="img-responsive"
					/>
				</div>
				<div className="post-body">
					<div dangerouslySetInnerHTML={{ __html: this.props.blok.content }} className="content" />
				</div>
				<style jsx>{`
					.social-buttons {
						display: grid;
						grid-template-columns: repeat(auto-fill, minmax(60px, 120px));
						grid-gap: 5px;
						justify-content: space-between;
						margin-top: 2rem;
						margin-bottom: 2rem;
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

					img {
						max-height: 480px;
						width: 100%;
						object-fit: cover;
					}
					.content {
						word-wrap: break-word;
						border: 1px dotted blue;
						padding: 20px;
						line-height: 2;
					}
					.content {
						white-space: pre-wrap; /* Since CSS 2.1 */
						white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
						white-space: -pre-wrap; /* Opera 4-6 */
						white-space: -o-pre-wrap; /* Opera 7 */
						word-wrap: break-word; /* Internet Explorer 5.5+ */
					}
					.image-container {
						border: 1px solid red;
					}
					img {
						margin: auto;
					}
				`}</style>
			</div>
		);
	}
}

export default Post;
