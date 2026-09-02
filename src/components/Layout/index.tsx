import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      <AnimatePresence mode="wait">
        <Styled.Layout>
          <Header siteTitle="Riccardo Sirigu" currentPath={currentPath} />
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            {children}
            {/* <Newsletter /> */}
            <Footer />
          </motion.div>
        </Styled.Layout>
      </AnimatePresence>
    </>
  );
};

export default Layout;
