import { Outlet } from 'react-router-dom';

import { NavigationBar, Footer } from '@components/layout';

import WhatsAppWidget from 'react-whatsapp-chat-widget';
import 'react-whatsapp-chat-widget/index.css';

import logo from '@images/logo/kk-primetech.png';

const DATA = {
  chatMessage: (
    <>
      Dobrý deň 👋
      <br />
      Ako Vám vieme pomôcť?
      <br />
      <br />
      Hello 👋
      <br />
      How can we help you?
    </>
  ),
  messageBoxTxt: 'Hi Team, is there any related service available ?'
};

const LandingLayout = ({ Page, ...rest }) => {
  let { className } = rest;

  return (
    <div className={`landing-layout__c layout ${className}`}>
      <NavigationBar />

      {Page && <Page />}
      <Outlet />

      <WhatsAppWidget
        //				phoneNo="919 884 098 840"
        phoneNo='421949527322'
        position='right'
        widgetWidth='350px'
        widgetWidthMobile='260px'
        autoOpen={false}
        autoOpenTimer={5000}
        headerTitle='KK PrimeTech'
        headerCaption='Online'
        chatPersonName='KK PrimeTech'
        chatMessage={DATA.chatMessage}
        messageBox={true}
        messageBoxTxt={DATA.messageBoxTxt}
        iconSize='40'
        iconColor='white'
        iconBgColor='#25D366'
        headerIcon={logo}
        headerIconColor='pink'
        headerTxtColor='#FFF'
        headerBgColor='#128C7E'
        bodyBgColor='#fff4e7'
        footerBgColor='#075E54'
        btnBgColor='#128C7E'
        btnTxtColor='#FFF'
        btnTxt='Start Chat'
      />
      <Footer />
    </div>
  );
};

export default LandingLayout;
