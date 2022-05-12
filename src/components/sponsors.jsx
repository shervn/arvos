export const Sponsors = (props) => {
  return (
    <div id='sponsors' className='text-center'>
      <div className='container-fluid'>
          <h2>Sponsors</h2>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-2 col-sm-4'>
                    <a href={d.link}><img src={d.img} alt='...' className='sponsor-img' /></a>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}