export const Clinicans = (props) => {
  return (
    <div id='clinicans' className='text-center'>
      <div className='container-fluid'>
        <div className='col-md-8 col-md-offset-4 col-md-pull-2 section-title'>
          <h2>Clinicans</h2>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4 col-sm-6 clinicans'>
                  {/* <div className='thumbnail'> */}
                    <img src={d.img} alt='...' className='clinicans-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.affiliation}</p>
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
