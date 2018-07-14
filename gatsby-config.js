const token = require('./local-config');
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	siteMetadata: {
		title: 'Blog - Baris Ozcetin'
	},
	plugins: [
		{
			resolve: 'gatsby-source-storyblok',
			options: {
				accessToken: process.env.accessToken,
				homeSlug: 'blog',
				version: 'draft'
			}
		},
		'gatsby-plugin-react-helmet',
		`gatsby-plugin-styled-jsx`
	]
};
