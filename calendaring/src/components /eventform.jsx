import React, { Component } from 'react';

class EventForm extends Component {
    state = {
        classification:'PUBLIC',
        geo:'GEO:' + latitude + ',' + longtitude,
        summary:'SUMMARY:' + summary,
        start:'DTSTART,VALUE=DATE:' + start,
        end:'DTEND,VALUE=DATE:' + end,
        priority:'PRIORITY:' + priority,
        location:'LOCATION:' + location,
        ending:'END:VEVENT',
      }
    render() { 
        return (  
          <button className="ui button">Click here to submit</button>
        );
    }
}
 
export default EventForm;