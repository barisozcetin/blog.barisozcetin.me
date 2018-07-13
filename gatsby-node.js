const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators;

	return new Promise((resolve, reject) => {
		const storyblokEntry = path.resolve('src/templates/storyblok-entry.js');
		const listTemplate = path.resolve('src/templates/listTemplate.js');

		resolve(
			graphql(
				`{
          allStoryblokEntry(filter: {is_startpage: {eq: false}}) {
            edges {
              node {
                id
                name
                created_at
                published_at
                uuid
                slug
                full_slug
                content
                is_startpage
                parent_id
                group_id
              }
            }
          }
        }
        `
			).then((result) => {
				if (result.errors) {
					console.log(result.errors);
					reject(result.errors);
				}

				const entries = result.data.allStoryblokEntry.edges;
				entries.forEach((entry, index) => {
					createPage({
						path: `/${entry.node.full_slug}/`,
						component: storyblokEntry,
						context: {
							story: entry.node
						}
					});
				});
				//	console.log(entries);
				createPage({
					path: `/a`,
					component: listTemplate,
					context: {
						myData: entries
					}
				});
			})
		);
	});
};
