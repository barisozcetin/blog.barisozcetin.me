import React, { Component } from 'react';

import BlogGrid from '../components/blogGrid';
import SideBar from '../components/sideBar';

export class listTemplate extends Component {
	constructor(props) {
		super(props);
		const list = props.pathContext.myData.map((item) => item.node);
		console.log(list);
		const posts = list
			.map((item) => {
				// console.log(typeof item.content);
				try {
					item.content = item.content ? JSON.parse(item.content) : null;
				} catch (err) {
					// console.log(err);
					// console.log(item);
					// item.content = '';
				}
				return item;
			})
			.sort((a, b) => b.published_at > a.published_at);

		this.state = { posts };
	}

	render() {
		const { posts = [] } = this.state;
		return (
			<div className="main-grid pt-2 mt-2">
				<BlogGrid posts={posts} />
				<SideBar />
				<style jsx>{`
					.main-grid {
						display: grid;
					}
					@media only screen and (min-width: 1024px) {
						.main-grid {
							grid-template-columns: 3fr 1fr;
							grid-gap: 40px;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default listTemplate;

// let story = Object.assign({}, props.pathContext.story);
