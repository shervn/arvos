import React from 'react'

export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container-fluid'>
        <div className='section-title'>
          <h2>Organizers</h2>
        </div>
        <div id='row' className="row justify-content-center container-fluid">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4 team-header'>
                    <img src={d.img} alt='...' className='team-img' />
                    <div className='caption'>
                      <h4 className="invitename">{d.name}</h4>
                      <p className="inviteuni">{d.job} <br/> <line></line> <b>{d.country}</b></p>
                    </div>
                  {/* </div> */}
                </div>))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
