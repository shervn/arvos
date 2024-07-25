import React from 'react'
import ReactDOM from 'react-dom'


export const Speakers = (props) => {
  return (
    <div id='speakers'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Speakers</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <div className='speakers'>
                    <div className='speakers-image'>
                      <img src={d.img} alt='' />{' '}
                    </div>
                    <div className='speakers-content'>
                      <p>{d.text}</p>
                      <div className='speakers-meta'>{d.name}</div>
                      <a href={d.link} class="link-dark">[Page]</a>
                      <h6>{d.affiliation}</h6>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
