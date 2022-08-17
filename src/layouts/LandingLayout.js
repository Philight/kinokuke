import React from "react";

import NavigationBar from "../components/layout/NavigationBar.js";
import Footer from "../components/layout/Footer.js";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

import kinokukeLogo from "../assets/images/kinokuke-logo.png";

const LandingLayout = ({children}) => {
//	let { className, description } = props;

	return (
		<div>
			<NavigationBar />
			{children}
{/*
			<WhatsAppModal />
*/}
			<WhatsAppWidget
/*				
				phoneNo="919 884 098 840"
*/
				phoneNo="421949527322"
				position="right"
				widgetWidth="350px"
				widgetWidthMobile="260px"
				autoOpen={false}
				autoOpenTimer={5000}
				messageBox={true}
				messageBoxTxt="Hi Team, is there any related service available ?"
				iconSize="40"
				iconColor="white"
				iconBgColor="#25D366"

				headerIcon={kinokukeLogo}
				headerIconColor="pink"
				headerTxtColor="#FFF"
/*				
				headerBgColor="var(--main-color)"
*/
				headerBgColor="#128C7E"
				headerTitle="Kino Kuke"
				headerCaption="Online"

				bodyBgColor="#fff4e7"
				footerBgColor="#075E54"
				btnBgColor="#128C7E"
				btnTxtColor="#FFF"
				btnTxt="Start Chat"
				chatPersonName="Kino Kuke"
				chatMessage={<>Dobrý deň 👋<br />Ako Vám vieme pomôcť?<br /><br />Hello 👋<br />How can we help you?</>}
			/>
			<Footer />
		</div>
	)
}

export default LandingLayout;