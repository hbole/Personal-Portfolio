import React from 'react'

const SocialFooter = () => {
  return (
    <div className="flex flex-col gap-2 fixed bottom-8 left-8 lg:flex xs:hidden">
      <a href='https://www.linkedin.com/in/harshitbole/' target='_blank'>
        <i className="fa-brands fa-linkedin text-white text-4xl"></i>
      </a>
      <a href='https://github.com/hbole' target='_blank'>
        <i className="fa-brands fa-square-github text-white text-4xl"></i>
      </a>
    </div>
  )
}

export default SocialFooter