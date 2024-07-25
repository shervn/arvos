import React from 'react'
import ReactDOM from 'react-dom'

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            ARVOS 2024
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>

            </li>
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            {/* <li>
              <a href='#news' className='page-scroll'>
                News
              </a>
            </li> */}
            <li>
              <a href='#team' className='page-scroll'>
                Organizers
              </a>
            </li>
            <li>
              <a href='#speakers' className='page-scroll'>
                Speakers
              </a>
            </li>
            <li>
              <a href='#board' className='page-scroll'>
                Advisory Board
              </a>
            </li>
            {/* <li>
              <a href='#schedule' className='page-scroll'>
                Schedule
              </a>
            </li>
            <li>
              <a href='#posters' className='page-scroll'>
                Posters
              </a>
            </li>
            <li>
              <a href='#sponsors' className='page-scroll'>
                Sponsors
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}
