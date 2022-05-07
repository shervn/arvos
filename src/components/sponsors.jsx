export const Sponsors = (props) => {
  return (
    <div id='sponsors' className='text-center'>
      <div className='container-fluid'>
          <h2>Sponsors</h2>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-1 col-sm-4'>
                    <img src={d.img} alt='...' className='sponsor-img' />
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}