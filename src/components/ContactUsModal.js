import React, { useEffect, useState, useRef } from "react";

import Icon from "./utility/Icon.js";
import ImageBanner from "./media/ImageBanner.js";
import SectionHeading from "./text/SectionHeading.js";
import FullwidthHeading from "./text/FullwidthHeading.js";

import "./../assets/css/components/contactusmodal.css";

const ContactUsModal = (props) => {
	let { houseModel } = props;

    const [modalVisible, setModalVisible] = useState(false);
    const [noticesVisible, setNoticesVisible] = useState(false);
    const [activeNotice, setActiveNotice] = useState("");
	const noticesTimerRef = useRef(null);

    const [fieldValidity, setFieldValidity] = useState({
    	firstName: true,
    	lastName: true,
    	email: true,
    	mobilePhone: true,
    	subject: true,
    	message: true,
    });

    const errorMessages = {
    	EMPTY_FIELD: 'Vyplňte $',
    	EMAIL_INVALID: 'Email je v nesprávnom formáte',
    }

    const fieldTranslations = {
    	firstName: 'meno',
    	lastName: 'priezvisko',
    	email: 'email',
    	mobilePhone: 'tel. číslo',
    	subject: 'predmet správy',
    	message: 'správu',
    }

	const showModal = () => {
		setModalVisible(true);
	}

	const closeModal = () => {
		setModalVisible(false);
	}

	const toggleModal = () => {
		setModalVisible(!modalVisible);
	}

	const addNotices = (field, errorCode) => {
		switch (errorCode) {
		  	case 'EMPTY_FIELD':
				setActiveNotice(errorMessages['EMPTY_FIELD'].replace('$', fieldTranslations[field]));
		    	break;
		  	case 'EMAIL_INVALID':
				setActiveNotice(errorMessages['EMAIL_INVALID']);
		    	break;		    	
		}
		showNotices();
	}

	const showNotices = () => {
		clearTimeout(noticesTimerRef.current);
		setNoticesVisible(true);

		noticesTimerRef.current = setTimeout(() => {
			setNoticesVisible(false);
		}, 8000)
	}

	const validateFields = (fields) => {
	    let validity = {
			firstName: true,
			lastName: true,
			email: true,
			mobilePhone: true,
			subject: true,
			message: true,
	    };
	    let allValid = true;

		for (const field in fields) {
			if (!fields[field]) {
				validity[field] = false;
				addNotices(field, 'EMPTY_FIELD');
				allValid = false;
			}  

			if (field == 'email') {
				if (!fields[field].includes('@')) {
					validity[field] = false;
					addNotices(field, 'EMAIL_INVALID');
					allValid = false;
				};
			}
		}

		setFieldValidity(validity);

		return allValid;
	}

  	const handleSubmit = async (e) => {
    	event.preventDefault();

    	const { firstName, lastName, email, mobilePhone, subject, message } = e.target.elements;
	    let details = {
			firstName: firstName.value,
			lastName: lastName.value,
			email: email.value,
			mobilePhone: mobilePhone.value,
			subject: subject.value,
			message: message.value,
	    };

    	var isValid = validateFields(details);
    	if (!isValid) return;

        let response = await fetch("https://www.kinokuke.sk/api/send-email", {
	      method: "POST",
	      headers: {
	        "Content-Type": "application/json;charset=utf-8",
	      },
	      body: JSON.stringify(details),
	    });

	    let result = await response.json();
  	}

	return (
		<dialog className="contact-us-modal__container section">
			<Icon icon="email-circle" onClick={toggleModal} className="contact-us-modal__open" />

			<div className={`contact-us-modal__form-wrapper ${modalVisible ? 'visible' :''}`}>
				<div className="contact-us-modal__form-background" onClick={toggleModal}>
				</div>

				<div className={`contact-us-modal__notices ${noticesVisible ? 'visible' :''}`}>
					{activeNotice}
				</div>

				<SectionHeading heading="Napíšte nám" className="contact-us-modal__heading">
					<Icon icon="x-mark-oval" className="contact-us-modal__close" onClick={toggleModal}/>
				</SectionHeading>

				<form className={`contact-us-modal__form`}
					onSubmit={handleSubmit}
				>
					<fieldset className="contact-us-modal__form-personal-info">
				        <label>
				          <input name="firstName" className={`${!fieldValidity['firstName'] ? 'invalid' :'valid'}`} type="text" placeholder="meno" />
				        </label>
				        <label>
				          <input name="lastName" className={`${!fieldValidity['lastName'] ? 'invalid' :''}`} type="text" placeholder="priezvisko"  />
				        </label>	        
				        <label>
				          <input name="email" className={`${!fieldValidity['email'] ? 'invalid' :''}`} type="text" placeholder="email"  />
				        </label>	        
				        <label>
				          <input name="mobilePhone" className={`${!fieldValidity['mobilePhone'] ? 'invalid' :''}`} type="text"  placeholder="tel. číslo" />
				        </label>
					</fieldset>
					<fieldset className="contact-us-modal__form-message">
				        <label>
				          	<input name="subject" className={`${!fieldValidity['subject'] ? 'invalid' :''}`} type="text" placeholder="predmet" value={`Záujem - ${houseModel ? houseModel :'Miami'}`} />
				        </label>
				          	<textarea name="message" className={`${!fieldValidity['message'] ? 'invalid' :''}`} type="text" placeholder="správa" />
			        	<input type="submit" value="poslať" />
					</fieldset>
		      	</form>
			</div>
		</dialog>
	)
}

export default ContactUsModal;