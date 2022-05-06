import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
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
