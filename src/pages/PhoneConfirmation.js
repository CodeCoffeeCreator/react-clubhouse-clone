import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import style from '../style/phoneConfirm.module.css';

export default function PhoneConfirmation() {
  const [value, setValue] = useState();

  return (
    <div className={style.phoneConfirmContainer}>
      <h1>Enter your phone</h1>
      <PhoneInput />
      <p>
        By entering your number, you're agreeing to our{' '}
        <span>Terms of Service and Privacy Policy. </span>
        Thanks!
      </p>
    </div>
  );
}
