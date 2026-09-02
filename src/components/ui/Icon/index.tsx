import React from 'react';

import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faLaptopCode,
  faBug,
  faUserSecret,
  faUniversity,
  faMapMarkerAlt,
  faPhone,
  faPaperPlane,
  faBuildingShield
} from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

const icons: Record<string, IconDefinition> = {
  'brand-github': faGithub,
  'brand-linkedin': faLinkedin,
  'brand-x-twitter': faXTwitter,
  'building-shield': faBuildingShield,
  bug: faBug,
  'laptop-code': faLaptopCode,
  'map-marker-alt': faMapMarkerAlt,
  'paper-plane': faPaperPlane,
  phone: faPhone,
  university: faUniversity,
  'user-secret': faUserSecret
};

export type IconProps = FontAwesomeIconProps['icon'];

const Icon: React.FC<FontAwesomeIconProps> = ({ ...props }) => {
  if (typeof props.icon === 'string' && icons[props.icon]) {
    return <FontAwesomeIcon {...props} icon={icons[props.icon]} />;
  }

  return <FontAwesomeIcon {...props} />;
};

export default Icon;
