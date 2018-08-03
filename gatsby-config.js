//const token = require('./local-config');
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

const localConfig = require('./local-config');
const analyticsConfig = require('./analytics-config');

module.exports = {
	siteMetadata: {
		title: 'Blog - Baris Ozcetin'
	},
	plugins: [
		{
			resolve: 'gatsby-source-storyblok',
			options: {
				accessToken: localConfig.accessToken,
				homeSlug: 'blog',
				version: 'draft'
			}
		},
		'gatsby-plugin-react-helmet',
		`gatsby-plugin-styled-jsx`,
		// Comment the line below if you don't want google analytics.
		analyticsConfig
	]
};
