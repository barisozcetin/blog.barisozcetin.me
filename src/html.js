import React from 'react';

export default class HTML extends React.Component {
	componentDidMount() {
		emailjs.init('%REACT_APP_EMAILJS_USERID%');
	}
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
					<script type="text/javascript" src="https://cdn.emailjs.com/sdk/2.1.0/email.min.js" />

					{/* <script type="text/javascript">(function(){emailjs.init('%REACT_APP_EMAILJS_USERID%')})();</script> */}
				</body>
			</html>
		);
	}
}
