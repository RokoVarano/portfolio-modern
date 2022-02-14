import React from 'react';

type Props = {}

const PhoneMenu = (props: Props) => {
  return (
    <ul className=''>
        <li>About Me</li>
        <li>Projects</li>
        <li>Certifications</li>
        {/* <li>Referrals</li> */}
        <li>Contact Me</li>
        <li>Resume</li>
    </ul>
  )
}

export default PhoneMenu