module.exports = {
	siteMetadata: {
		title: 'Blog - Baris Ozcetin'
	},
	plugins: [
		{
			resolve: 'gatsby-source-storyblok',
			options: {
				accessToken: 'Dkyf4n3gCs1BJbvlRLhLUQtt',
				homeSlug: 'blog',
				version: 'draft'
			}
		},
		'gatsby-plugin-react-helmet',
		`gatsby-plugin-styled-jsx`
	]
};
