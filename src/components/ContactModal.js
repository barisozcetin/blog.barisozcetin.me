import React, { Component } from 'react';

class ContactModal extends Component {
	state = {
		name: '',
		email: '',
		message: '',
		formEmailSent: false
	};

	onChange = (e) => {
		// e.persist();
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		const { name, email, message } = this.state;
		if (email.trim === '' || message.trim() === '') return false;
		const { REACT_APP_EMAILJS_RECEIVER: receiverEmail, REACT_APP_EMAILJS_TEMPLATEID: template } = process.env;
		this.sendMail(template, name, email, receiverEmail, message);

		this.setState({
			formSubmitted: true
		});
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
				this.setState({ formEmailSent: true });
			})
			.catch((err) => console.error('Failed to send message. Error: ', err));
	}

	closeHandler = (e) => {
		if (e.target.name === 'modal' || e.target.name === 'close' || e.target.id === 'contact-modal')
			this.props.handleClose(e);
	};

	render() {
		const { show } = this.props;
		const showHideClassName = show ? 'modal display-block' : 'modal display-none';
		const sendButton = this.state.formEmailSent ? (
			<button className="contact__submit" type="submit" disabled style={{ color: 'green', fontSize: '1.5rem' }}>
				✔
			</button>
		) : (
			<button className="contact__submit" type="submit">
				Send
			</button>
		);
		return (
			<div className={showHideClassName} id="contact-modal" onClick={this.closeHandler} name="modal">
				<section className="modal-main" onClick={() => 1 + 2}>
					<p style={{ textAlign: 'center', paddingBottom: '15px' }}>
						You can send an email to <strong style={{ fontWeight: 'bold' }}>barisozcetin@gmail.com </strong>or contact
						with form below
					</p>
					<form method="POST" onSubmit={this.onSubmit} className="contact__form" style={{ marginTop: '5px' }}>
						<input type="text" name="name" placeholder="Your name" value={this.state.name} onChange={this.onChange} />
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
					<button
						name="close"
						className="modal__close"
						style={{ '--text-color': '#ffffff' }}
						onClick={this.closeHandler}
					>
						✖
					</button>
				</section>
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

						.display-block {
							display: block;
						}

						.display-none {
							display: none;
						}
						.contact__form {
							display: grid;
							grid-gap: 6px;
							padding-top: 10px;
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

export default ContactModal;