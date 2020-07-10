import React, { Component } from 'react';
import { Form, Icon } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Vevents from '../vevents';
import Ics from '../ics';
import fileDownload from 'js-file-download';


const options = [
  { key: 'm', text: 'Malee', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const classificatication = [
  {text: 'Public', value:'PUBLIC'},
  {text: 'Private', value:'PRIVATE'}
]

class EventForm extends Component {

  // constructor(props){
  //   super(props);

  //   this.state= {
  //     classification:'PUBLIC',
  //     geo: {
  //       latitude: '',
  //       longtitude: '' 
  //     },
  //     summary:'',
  //     start:'',
  //     end:'',
  //     priority:'PRIORITY',
  //     location:'LOCATION',
  //   };
  // }

  state = {
      classification:'PUBLIC',
      latitude: '',
      longtitude: '' ,
      summary:'',
      start: new Date(),
      end:'',  
      priority:'PRIORITY',
      location:'LOCATION',
  }

  
  handleChange = (e, {name, value}) => {
    this.setState({ [name]: value })
  }

  handleDateChange = (date) => {
    console.log(date);
    this.setState({ 'start': date })
  }

  handleSubmit = () => {
    const {classification, latitude, longtitude, location, priority, summary, start, end} = this.state; 
    let icsEvent = [new Vevents(classification, latitude, longtitude, location, priority, summary, start, end)];
    let icsCalendar = new Ics(icsEvent);
    let calendar = icsCalendar.build();
    fileDownload(calendar, 'Calendar.ics');
  }

  render() { 
    const{classification, latitude, longtitude, summary, start, end, priority, location} = this.state;

    return (  
      <React.Fragment>
      <Form method="get" action="../App.js">
        <Form.Select
          label='Classification'
          options={classificatication}
          placeholder='Classification'
          value={classification}
          width={2}
          name='classification'
          onChange={this.handleChange}
        />
        <Form.Input 
          inline 
          label='Latitude' 
          placeholder='Latitude' 
          value={latitude}
          name='latitude'
          onChange={this.handleChange}
        />
        <Form.Input 
          inline 
          label='Longtitude' 
          placeholder='Longtitude' 
          value={longtitude}
          name='longtitude'
          onChange={this.handleChange}
        />
        <Form.Input 
          inline 
          label='Summary' 
          value={summary}
          onChange={this.handleChange}
          name='summary'
        />
        <Form.Group inline>
          <Form.Input 
            readOnly
            label='Start' 
            placeholder='StartDate' 
            width={2}
            value={start}
          />
          <Icon>
            <DatePicker 
            selected={this.state.date} 
            onChange={this.handleDateChange} 
            name={start}
          />
          </Icon>
        </Form.Group>
        <Form.Group inline>
          <Form.Input 
            label='EndDate' 
            placeholder='EndDate' 
            width={2}
            value={end}
            onChange={this.handleChange}
          />
          <Icon>
            <DatePicker 
            selected={this.state.date} 
            onChange={this.handleChange} 
            name={start}
          />
          </Icon>
        </Form.Group>
        <Form.Input 
          label='Priority' 
          placeholder='Priority: 1-10' 
          width={2}
        />
        <Form.Input 
          label='Location' 
          placeholder='Location' 
          width={2}
        />
      </Form>
      <button
      onClick={this.handleSubmit}
      >
       Click to download file
      </button>
    </React.Fragment>
    );
  }
}
 
export default EventForm;