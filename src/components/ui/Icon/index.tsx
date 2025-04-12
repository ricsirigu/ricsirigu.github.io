import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLaptopCode,
  faBug,
  faUserSecret,
  faUniversity,
  faMapMarkerAlt,
  faPhone,
  faPaperPlane,
  faBuildingShield,
} from '@fortawesome/free-solid-svg-icons';
import {
  faXTwitter,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

/* add any additional icon to the library */
library.add(faXTwitter, faLinkedin, faGithub, faLaptopCode, faBug, faUserSecret, faUniversity, faMapMarkerAlt, faPhone, faPaperPlane, faBuildingShield);

export type IconProps = FontAwesomeIconProps['icon'];

const Icon: React.FC<FontAwesomeIconProps> = ({ ...props }) => {
  if(props.icon.includes('brand')){
    return <FontAwesomeIcon {...props} icon={['fab', props.icon.replace('brand-', '')]}/>
  }
  else {
    return <FontAwesomeIcon {...props} />
  }
}

export default Icon;
