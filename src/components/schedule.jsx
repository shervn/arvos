import React from 'react'

export const Schedule = (props) => {
  return (
    <div id='schedule'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Schedule</h2>
        </div>
        <div class="table-responsive-sm">
 <table class="table  table-striped table-hover">
  
  <thead table-dark>
    <tr>
    <th colspan="3" class="text-center">Morning Sesession I</th>
     </tr>
   </thead>
   <tbody>
   {props.data.Schedule1 ? props.data.Schedule1.map((d, i) => (
    <tr>
  {d.affiliation !== "row" ? (
    <>
      <th className="col-md-2" scope="row">{d.timeslot}</th>
      <td>{d.speaker}</td>
      <td>{d.affiliation}</td>
    </>
  ) : (
    <>
      <th scope="row">{d.timeslot}</th>
      <th colspan="2" ><strong>{d.speaker}</strong></th>
    </>
  )}
</tr>
      ))
    : "loading"}
   </tbody>
   <thead >
    <tr>
       <th colspan="3" class="text-center">Morning Sesession II</th>
     </tr>
   </thead>
   <tbody>
   {props.data.Schedule2 ? props.data.Schedule2.map((d, i) => (
      <tr>
      {d.affiliation !== "row" ? (
        <>
          <th className="col-md-2" scope="row">{d.timeslot}</th>
          <td>{d.speaker}</td>
          <td>{d.affiliation}</td>
        </>
      ) : (
        <>
          <th scope="row">{d.timeslot}</th>
          <th colspan="2" ><strong>{d.speaker}</strong></th>
        </>
      )}
    </tr>
      ))
    : "loading"}
   </tbody>
</table>
</div>
      </div>
      
    </div>
  );
};

