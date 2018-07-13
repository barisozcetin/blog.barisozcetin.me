import React from 'react';

export default class HTML extends React.Component {
	render() {
		return (
			<html lang="en">
				<head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					{this.props.headComponents}
					<link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css" />
					<script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js" />
				</head>
				<body>
					<div id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
					{this.props.postBodyComponents}
				</body>
			</html>
		);
	}
}
