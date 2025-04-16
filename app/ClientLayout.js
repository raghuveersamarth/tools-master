'use client';

import PageLoader from './components/PageLoader.jsx';
import Navbar from './Navbar/page';
import Sessionwrapper from './components/sessionwrapper';

export default function ClientLayout({ children }) {
  return (
    <>
      <Sessionwrapper>
      <PageLoader />
        <Navbar />
        {children}
      </Sessionwrapper>
    </>
  );
}
