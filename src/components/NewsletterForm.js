import React from "react";

//import "./../assets/css/components/headingblock.css";

const NewsletterForm = (props) => {
	let { heading, className } = props;

  	const handleSubmit = (event) => {
    	alert('Submit');
    	event.preventDefault();
  	}

	return (
  		<form className="newsletter-form__container" onSubmit={handleSubmit}>
	        <label>
	          <input name="firstName" className="" type="text" placeholder="meno" />
	        </label>
	        <label>
	          <input name="lastName" className="" type="text" placeholder="priezvisko"  />
	        </label>	        
	        <label>
	          <input name="email" className="" type="text" placeholder="email"  />
	        </label>	        
	        <label>
	          <input name="mobilePhone" className="" type="text"  placeholder="tel. číslo" />
	        </label>

	        <input type="submit" value="poslať" />

	        <p className="newsletter-form__disclaimer">
	        	By providing your contact information and clicking submit, you consent to receive periodic emails, phone calls, text messages and other communications from us or made on our behalf, which may also be done through automatic telephone dialing systems or an artificial or prerecorded voice. Your consent herein also applies to any future registration on national or state Do Not Call lists. You also are directing and permitting us to share such data with the masterplan developer for the community in which you’ve indicated an interest, if applicable. For mobile phones, standard text message and data charges apply. Your consent is not a condition to purchase. Consult our Privacy Policy for additional information, including unsubscribe options.
	        	<br /><br />
				For details on what personal information we collect and for what purposes, and your privacy rights and how to exercise them, including how to exercise a “do not sell” opt-out, visit nwhm.com/ccpa or contact us at 1-833-459-0189.
			</p>
      	</form>
	)
}

export default NewsletterForm;