import { useState, useRef } from 'react';

import { Icon, Layer } from '@components/graphic';
import { HeadingWithBackground } from '@components/text';
import { ENV } from '@data';

const NOTICE_MESSAGES = {
  error: {
    EMPTY_FIELD: 'Vyplňte $',
    EMAIL_INVALID: 'Email je v nesprávnom formáte',
    INTERNAL_ERROR: 'Nepodarilo sa poslať správu. Skúste znova'
  },
  success: {
    MESSAGE_SENT: 'Správa bola poslaná. Čoskoro sa Vám ozveme'
  }
};

const fieldTranslations = {
  firstName: 'meno',
  lastName: 'priezvisko',
  email: 'email',
  mobilePhone: 'tel. číslo',
  subject: 'predmet správy',
  message: 'správu'
};

const ContactUsModal = (props) => {
  let { houseModel } = props;

  const [ modalVisible, setModalVisible ] = useState(false);
  const [ noticesVisible, setNoticesVisible ] = useState(false);
  const [ activeNotice, setActiveNotice ] = useState('');
  const noticesTimerRef = useRef(null);

  const [ fieldValidity, setFieldValidity ] = useState({
    firstName: true,
    lastName: true,
    email: true,
    mobilePhone: true,
    subject: true,
    message: true
  });

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const showNotices = () => {
    clearTimeout(noticesTimerRef.current);
    setNoticesVisible(true);

    noticesTimerRef.current = setTimeout(() => {
      setNoticesVisible(false);
    }, 8000);
  };

  const addNotices = (field, errorCode) => {
    switch (errorCode) {
    case 'EMPTY_FIELD':
      setActiveNotice(NOTICE_MESSAGES.error[errorCode].replace('$', fieldTranslations[field]));
      break;
    case 'EMAIL_INVALID':
    case 'INTERNAL_ERROR':
      setActiveNotice(NOTICE_MESSAGES.error[errorCode]);
      break;
    case 'MESSAGE_SENT':
      setActiveNotice(NOTICE_MESSAGES.success[errorCode]);
      break;
    default:
      break;
    }
    showNotices();
  };

  const validateFields = (fields) => {
    let validity = {
      firstName: true,
      lastName: true,
      email: true,
      mobilePhone: true,
      subject: true,
      message: true
    };
    let allValid = true;

    for (const field in fields) {
      if (fields[field]) {
        if (!fields[field]) {
          validity[field] = false;
          addNotices(field, 'EMPTY_FIELD');
          allValid = false;
        }

        if (field === 'email') {
          if (!fields[field].includes('@')) {
            validity[field] = false;
            addNotices(field, 'EMAIL_INVALID');
            allValid = false;
          }
        }
      }
    }

    setFieldValidity(validity);

    return allValid;
  };

  const handleSubmit = async (e) => {
    event.preventDefault();

    const { firstName, lastName, email, mobilePhone, subject, message } = e.target.elements;
    let details = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      mobilePhone: mobilePhone.value,
      subject: subject.value,
      message: message.value
    };

    let isValid = validateFields(details);
    if (!isValid) {
      return;
    }

    let response = await fetch(ENV.API_POST_SEND_EMAIL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details)
    });
    console.log(response);

    let result = await response.json();
    console.log(result);
    if (result.status === 200) {
      addNotices(null, 'MESSAGE_SENT');
    } else {
      addNotices(null, 'INTERNAL_ERROR');
    }
  };

  return (
    <dialog className='contact-us-modal__c section'>
      <Icon icon='email-circle' onClick={toggleModal} className='contact-us-modal__open' />

      <div
        className={`contact-us-modal__form-wrapper fill-parent f-col f-center ${
          modalVisible ? 'visible' : ''
        }`}
      >
        <Layer className='contact-us-modal__form-background' onClick={toggleModal} />

        <div className={`contact-us-modal__notices ${noticesVisible ? 'visible' : ''}`}>
          {activeNotice}
        </div>

        <div className='contact-us-modal__heading'>
          <HeadingWithBackground heading='Napíšte nám' />
          <Icon icon='x-mark-oval' className='contact-us-modal__close' onClick={toggleModal} />
        </div>

        <form className={`contact-us-modal__form f-col`} onSubmit={handleSubmit}>
          <fieldset className='contact-us-modal__form-personal-info'>
            <label>
              <input
                name='firstName'
                className={`${!fieldValidity.firstName ? 'invalid' : 'valid'}`}
                type='text'
                placeholder='meno'
              />
            </label>
            <label>
              <input
                name='lastName'
                className={`${!fieldValidity.lastName ? 'invalid' : ''}`}
                type='text'
                placeholder='priezvisko'
              />
            </label>
            <label>
              <input
                name='email'
                className={`${!fieldValidity.email ? 'invalid' : ''}`}
                type='text'
                placeholder='email'
              />
            </label>
            <label>
              <input
                name='mobilePhone'
                className={`${!fieldValidity.mobilePhone ? 'invalid' : ''}`}
                type='text'
                placeholder='tel. číslo'
              />
            </label>
          </fieldset>
          <fieldset className='contact-us-modal__form-message'>
            <label>
              <input
                name='subject'
                className={`${!fieldValidity.subject ? 'invalid' : ''}`}
                type='text'
                placeholder='predmet'
                value={`Záujem - ${houseModel ? houseModel : 'Miami'}`}
              />
            </label>
            <textarea
              name='message'
              className={`${!fieldValidity.message ? 'invalid' : ''}`}
              type='text'
              placeholder='správa'
            />
            <input type='submit' value='poslať' />
          </fieldset>
        </form>
      </div>
    </dialog>
  );
};

export default ContactUsModal;
