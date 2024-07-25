import React from 'react'
import ReactDOM from 'react-dom'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = () => {
  return (
    <div id='footer'>
    <div className='container text-center'>
      <p>
        For more details please contact ali.nasseri[at]tum.de
      </p>
      {/* <p>
        &copy; 2020 Issaaf Kattan React Land Page Template. Design by{' '}
        <a href='http://www.templatewire.com' rel='nofollow'>
          TemplateWire
        </a>
      </p> */}
    </div>
    </div>
  )
}
