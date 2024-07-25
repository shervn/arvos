import React from 'react'
import ReactDOM from 'react-dom'

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h5>IROS 2024 Workshop</h5>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <h3>{props.data ? props.data.date : 'Loading'}</h3>
                <h4>{props.data ? props.data.location : 'Loading'}</h4>
                <a
                  href='#About'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
