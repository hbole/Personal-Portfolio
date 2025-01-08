import React from 'react'
import Navbar from './Navbar'
import SocialFooter from './SocialFooter'

const Layout = ({ children }) => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="lg:my-16 lg:p-16 xs:my-16 xs:p-12">
          {children}
        </div>
        <SocialFooter />
      </div>
    </>
  )
}

export default Layout