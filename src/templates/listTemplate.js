import React, { Component } from 'react';

export class listTemplate extends Component {
	constructor(props) {
		super(props);
		const list = props.pathContext.myData;
		this.state = { posts: list };
	}
	render() {
		const { posts } = this.state;
		return (
			<div>
				{posts &&
					posts.map((post) => (
						<div className="post--item" key={post.node.id}>
							<h2>{post.node.title}</h2>
							<p>{post.node.content}</p>
						</div>
					))}
				<p>list template</p>
			</div>
		);
	}
}

export default listTemplate;
