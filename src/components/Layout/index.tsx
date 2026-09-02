import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyles from 'assets/styles/globalStyles';
import * as Styled from './styles';

interface Props {
  children: React.ReactNode;
  currentPath: string;
}

const Layout: React.FC<Props> = ({ children, currentPath }) => {
  return (
    <>
      <GlobalStyles />
      <Styled.Layout>
        <Header siteTitle="Riccardo Sirigu" currentPath={currentPath} />
        <div>
          {children}
          {/* <Newsletter /> */}
          <Footer />
        </div>
      </Styled.Layout>
    </>
  );
};

export default Layout;
