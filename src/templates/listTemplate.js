import React, { Component } from 'react';

import BlogGrid from '../components/blogGrid';

export class listTemplate extends Component {
	constructor(props) {
		super(props);
		const list = props.pathContext.myData.map((item) => item.node);
		const posts = list.map((item) => {
			try {
				item.content = item.content ? JSON.parse(item.content) : null;
			} catch (err) {
				item.content = '';
			}
			return item;
		});

		this.state = { posts };
	}
	render() {
		const { posts } = this.state;
		return (
			<div>
				<BlogGrid posts={posts} />
			</div>
		);
	}
}

export default listTemplate;

// let story = Object.assign({}, props.pathContext.story);
