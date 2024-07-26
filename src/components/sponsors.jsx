import React from 'react'

export const Sponsors = (props) => {
  return (
    <div id='sponsors' className='text-center'>
      <div className='container-fluid'>
          {/* <h2>Sponsors</h2> */}
        <div id='row'>
    <hr class="bg-danger border-2 border-top border-danger" />

          <div className='col-md-1 col-sm-1'/>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-2 col-sm-2'>
                    <a href={d.link}><img src={d.img} alt='...' className={d.className} id={d.id} /></a>
                </div>
              ))
            : 'loading'}
          <div className='col-md-1 col-sm-1'/>
        </div>
    <hr class="bg-danger border-2 border-top border-danger" />

      </div>
      
    </div>
  )
}