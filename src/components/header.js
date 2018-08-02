import React, { Component } from 'react';
import Link from 'gatsby-link';
import ContactModal from './ContactModal';
import ModalContact from './ModalContact';

class Header extends Component {
	state = {
		modalOpen: false
	};
	componentDidMount() {
		emailjs.init(process.env.REACT_APP_EMAILJS_USERID);
	}
	toggleModal = (e) => {
		e.preventDefault();
		e.stopPropagation();
		this.setState((prevState) => ({ modalOpen: !prevState.modalOpen }));
	};
	render() {
		return (
			<nav className="navbar-container">
				<ModalContact show={this.state.modalOpen} handleClose={this.toggleModal} />
				<section className="navbar--left">
					<Link to="/">
						<div className="navbar--logo text-center">
							<img
								src="https://res.cloudinary.com/dydyt6wbt/image/upload/v1531524115/favicon-256.png"
								alt=""
								className="img-responsive"
							/>
							<span className="logo--link">blog.barisozcetin.me</span>
						</div>
					</Link>
				</section>
				<div className="spacer">
					<hr />
				</div>
				<section className="navbar--links">
					<button to="/" disabled id="subscribe" className="disabled disabled-link">
						<span className="text-dark">subscribe</span>
					</button>
					<a role="button" onClick={this.toggleModal}>
						<span className="text-dark">contact</span>
					</a>
					<a href="https://www.barisozcetin.me" className="text-dark">
						barisozcetin.me
					</a>
				</section>
				<style jsx>{`
					#subscribe {
						background: none;
						border: none;
					}
					a {
						cursor: pointer;
					}
					.navbar-container {
						display: grid;
						//border: 2px solid red;
						margin-bottom: 20px;
						// grid-template-rows: auto auto;
						// grid-template-columns: 1fr;
						margin: 0 auto;
						max-width: 1200px;
						padding: 10px 1.0875rem 1.45rem;
					}
					.navbar--left {
						justify-items: start;
					}
					.navbar--logo {
						display: grid;
						grid-template-columns: auto auto;
						grid-gap: 10px;
						align-items: center;
					}
					.logo--link {
						color: black;
						font-weight: 300;
					}
					.navbar--links {
						grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
						grid-gap: 10px;
						justify-items: start;
					}
					hr {
						margin: 10px;
						border-color: black;
					}
					.disabled-link {
						cursor: not-allowed;
					}

					@media only screen and (min-width: 1024px) {
						.navbar-container {
							grid-template-rows: 1fr;
							grid-template-columns: 2fr 1fr;
							height: 140px;
							padding-top: 20px;
							padding-bottom: 20px;
						}
						.spacer {
							display: none;
						}
					}
					section {
						display: grid;
						align-content: center;
						grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
						// justify-items: center;
					}
					img {
						max-height: 80px;
					}
				`}</style>
			</nav>
		);
	}
}

export default Header;
