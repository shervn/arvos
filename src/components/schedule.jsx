import React from 'react'
import ReactDOM from 'react-dom'

const morning = ""

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
    <th colspan="2" class="text-center">Morning Sesession</th>
     </tr>
   </thead>
   <tbody>
   {props.data.Schedule1 ? props.data.Schedule1.map((d, i) => (
      <tr>
      <th class="col-md-2" scope="row">{d.timeslot}</th>
      <td>{d.speaker}</td>
    </tr>
      ))
    : "loading"}
   </tbody>
   <thead >
    <tr>
       <th colspan="2" class="text-center">Afternoon Sesession</th>
     </tr>
   </thead>
   <tbody>
   {props.data.Schedule2 ? props.data.Schedule2.map((d, i) => (
      <tr>
      <th class="col-md-2" scope="row">{d.timeslot}</th>
      <td >{d.speaker}</td>
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
