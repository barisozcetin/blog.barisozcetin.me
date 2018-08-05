import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
// import './index.css';

const Layout = ({ children, data }) => (
	<div>
		<Helmet
			title={data.site.siteMetadata.title}
			meta={[ { name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' } ]}
		/>
		<Header siteTitle={data.site.siteMetadata.title} />
		<div className="app__content">{children()}</div>

		<style jsx>
			{`
				.app__content {
					margin: 0 auto;
					max-width: 1200px;
					padding-right: 5px;
					padding-left: 5px;
					padding-top: 0;
				}
				@media screen and (min-width: 340px) {
					padding-right: 10px;
					padding-left: 10px;
				}
			`}
		</style>
	</div>
);

Layout.propTypes = {
	children: PropTypes.func
};

export default Layout;

export const query = graphql`
	query SiteTitleQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
