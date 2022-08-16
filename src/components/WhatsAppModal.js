import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import Icon from "./Icon.js";
import SectionHeading from "./SectionHeading.js";
import HeadingUnderline from "./HeadingUnderline.js";
import SectionSubheading from "./SectionSubheading.js";

import "./../assets/css/components/whatsappmodal.css";

const WhatsAppModal = (props) => {
	let { className } = props;

	const openWhatsApp = () => {
	}

  	const handleSubmit = async (e) => {
    	alert('Submit');
    	event.preventDefault();

    	const { message } = e.target.elements;
	    let details = {
			message: message.value,
	    };
	}

	return (
		<div className={`whats-app-modal__container ${className}`}>
			<Icon icon="email-circle" className="whats-app-modal__icon" onClick={openWhatsApp}/>

			<div className={`whats-app-modal__popup ${className}`}>
				<form className={`contact-us-modal__form `} onSubmit={handleSubmit}>
			        <label>
			          <input name="message" className={``} type="text" placeholder="message"  />
			        </label>

		        	<input type="submit" value="poslať" />
		      	</form>
			</div>
		</div>

	)
}

export default WhatsAppModal;