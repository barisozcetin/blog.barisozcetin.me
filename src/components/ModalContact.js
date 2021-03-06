import React, { Component } from 'react';

export class ModalContact extends Component {
	state = {
		name: '',
		email: '',
		message: '',
		formEmailSent: false,
		loading: false
	};

	onChange = (e) => {
		// e.persist();
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		const { name, email, message } = this.state;
		if (email.trim === '' || message.trim() === '') return false;
		this.setState({ loading: true });
		const { REACT_APP_EMAILJS_RECEIVER: receiverEmail, REACT_APP_EMAILJS_TEMPLATEID: template } = process.env;
		this.sendMail(template, name, email, receiverEmail, message);
	};

	sendMail(templateId, name, email, receiverEmail, message) {
		// console.log(name, email, message);
		window.emailjs
			.send('mailjet', templateId, {
				name,
				email,
				receiverEmail,
				message
			})
			.then((res) => {
				this.setState({ formEmailSent: true, loading: false });
			})
			.catch((err) => console.error('Failed to send message. Error: ', err));
	}

	closeHandler = (e) => {
		this.setState({
			name: '',
			email: '',
			message: '',
			formEmailSent: false,
			loading: false
		});
		this.props.handleClose(e);
	};

	render() {
		const { show } = this.props;
		const showClass = show ? 'active' : '';
		const buttonClass = this.state.loading ? 'btn contact__submit loading' : 'btn contact__submit';
		const sendButton = this.state.formEmailSent ? (
			<button
				className={buttonClass + ' disabled'}
				type="submit"
				disabled
				style={{ color: 'green', fontSize: '1.5rem' }}
			>
				✔
			</button>
		) : (
			<button className={buttonClass} type="submit">
				Send
			</button>
		);
		return (
			<div className={`modal ${showClass}`} id="modal-id">
				<a className="modal-overlay" aria-label="Close" onClick={this.closeHandler} />
				<div className="modal-container">
					<div className="modal-body">
						<div className="content">
							<p style={{ textAlign: 'center' }}>
								You can send an email to <strong style={{ fontWeight: 'bold' }}>barisozcetin@gmail.com </strong>or
								contact with form below
							</p>
							<form method="POST" onSubmit={this.onSubmit} className="contact__form" style={{ paddingTop: '10px' }}>
								<input
									type="text"
									name="name"
									placeholder="Your name"
									value={this.state.name}
									onChange={this.onChange}
									autoFocus
								/>
								<input
									type="email"
									name="email"
									placeholder="Your email"
									required
									value={this.state.email}
									onChange={this.onChange}
								/>
								<textarea
									name="message"
									placeholder="Your message"
									required
									value={this.state.message}
									onChange={this.onChange}
									rows={5}
								/>
								{sendButton}
							</form>
						</div>
					</div>
					<button
						name="close"
						className="modal__close"
						style={{ '--text-color': '#ffffff' }}
						onClick={this.closeHandler}
					>
						✖
					</button>
				</div>
				<style jsx>
					{`
						modal {
							position: fixed;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							background: rgba(0, 0, 0, 0.6);
							z-index: 50;
						}

						.modal-main {
							position: fixed;
							background: #ebf2ff;
							width: 80%;
							height: auto;
							top: 50%;
							left: 50%;
							transform: translate(-50%, -50%);
							display: grid;
							grid-template-rows: auto 1fr;
							max-height: 80vh;
							z-index: 69;
							padding: 15px;
						}

						.modal__close {
							position: absolute;
							right: 5px;
							top: 5px;
							border: none;
							background: none;
							cursor: pointer;
						}
						.modal-container {
							position: relative;
						}

						.display-block {
							display: block;
						}

						.display-none {
							display: none;
						}
						.contact__form {
							display: grid;
							grid-gap: 6px;
						}
						.contact__submit {
							cursor: pointer;
							outline: none;
							height: 2rem;
							font-weight: bolder;
							border-radius: 6px;
							background: #fdfeef;
							background: -webkit-gradient(linear, left top, left bottom, from(#fdfeef), to(#b1b2a7));
							background: -moz-linear-gradient(top, #fdfeef, #b1b2a7);
							background: linear-gradient(to bottom, #fdfeef, #b1b2a7);
							text-shadow: #ffffff 1px 1px 1px;
						}

						@media screen and (min-width: 768px) {
							.modal-main {
								width: 40%;
								padding: 30px;
							}
						}

						@media screen and (min-width: 1024px) {
							.modal-main {
								width: 20%;
								padding: 30px;
							}
						}
					`}
				</style>
			</div>
		);
	}
}

export default ModalContact;
