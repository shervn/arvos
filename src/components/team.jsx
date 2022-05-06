export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container-fluid'>
        <div className='col-md-8 col-md-offset-4 col-md-pull-2 section-title'>
          <h2>Organizers</h2>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className={i==0 ? 'col-md-2 col-sm-6 team col-md-offset-1' : 'col-md-2 col-sm-6 team'}>
                  {/* <div className='thumbnail'> */}
                    <img src={d.img} alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job} <br/> {d.country}</p>
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
