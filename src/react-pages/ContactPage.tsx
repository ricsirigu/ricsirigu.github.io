import React from 'react';

import Layout from 'components/Layout';
import ContactInfo from 'components/ContactInfo';

interface Props {
  contacts: React.ComponentProps<typeof ContactInfo>['contacts'];
  currentPath: string;
  sectionTitle: React.ComponentProps<typeof ContactInfo>['sectionTitle'];
}

const ContactPage: React.FC<Props> = ({ contacts, currentPath, sectionTitle }) => {
  return (
    <Layout currentPath={currentPath}>
      <ContactInfo contacts={contacts} sectionTitle={sectionTitle} />
    </Layout>
  );
};

export default ContactPage;
