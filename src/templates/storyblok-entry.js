import React from 'react';
import Components from '../components/components.js';
import Sidebar from '../components/sideBar';

class StoryblokEntry extends React.Component {
	constructor(props) {
		super(props);
		let story = Object.assign({}, props.pathContext.story);
		story.content = JSON.parse(story.content);
		this.state = { story: story };
	}

	render() {
		let content = this.state.story.content;
		// console.log(content);
		let dateTime = this.state.story.published_at;
		return (
			<div className="main-grid pt-2 mt-2">
				{React.createElement(Components[content.component], {
					key: content._uid,
					blok: content,
					dateTime
				})}{' '}
				<Sidebar />{' '}
				<style jsx>{`
					.main-grid {
						display: grid;
					}
					@media only screen and (min-width: 480px) {
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

export default StoryblokEntry;
