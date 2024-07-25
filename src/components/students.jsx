import React from 'react'
import ReactDOM from 'react-dom'

export const Students = (props) => {
  return (
    <div id='students' className='text-center'>
      <div className='container-fluid'>
        <div className='section-title text-center'>
          <h2>Student Organization</h2>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className={i==0 ? 'col-md-2 col-sm-6 team col-md-offset-1' : 'col-md-2 col-sm-6 team'}>
                    <img src={d.image} alt='...' className='students-img' />
                    {/* <div className='caption'> */}
                      <h4>{d.name}</h4>
                    {/* </div> */}
                  {/* </div> */}
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
