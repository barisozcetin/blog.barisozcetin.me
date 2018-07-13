import React, { Component } from 'react';

import BlogGrid from '../components/blogGrid';
import SideBar from '../components/sideBar';

export class listTemplate extends Component {
	constructor(props) {
		super(props);
		const list = props.pathContext.myData.map((item) => item.node);
		const posts = list
			.map((item) => {
				try {
					item.content = item.content ? JSON.parse(item.content) : null;
				} catch (err) {
					item.content = '';
				}
				return item;
			})
			.reverse();

		this.state = { posts };
	}
	render() {
		const { posts } = this.state;
		return (
			<div className="main-grid">
				<BlogGrid posts={posts} />
				<SideBar />
				<style jsx>{`
					.main-grid {
						display: grid;
					}
					@media only screen and (min-width: 480px) {
						.main-grid {
							grid-template-columns: 3fr 1fr;
							grid-gap: 25px;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default listTemplate;

// let story = Object.assign({}, props.pathContext.story);
