import React from 'react'

export const Clinicans = (props) => {
  return (
    <div id='board' className='text-center'>
      <div className='container-fluid'>
        <div >
          <h2>Advisory Board</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4 col-sm-4 clinicans'>
                    <img src={d.img} alt='...' className='clinicans-img' />
                    <div className='caption'>
                      <h4 className="invitename">{d.name}</h4>
                      <p className="inviteuni"> <a href={d.link} class="link-dark">[Page]</a></p>
                      <p className="inviteuni">{d.affiliation}</p>
                    </div>
                  {/* </div> */}
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
