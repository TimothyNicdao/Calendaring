import React, { Component } from 'react';
import { Form, Icon } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Vevents from '../vevents';
import Ics from '../ics';
import fileDownload from 'js-file-download';


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
      end: new Date(),  
      priority:'',
      location:'',
  }

  
  handleChange = (e, {name, value}) => {
    this.setState({ [name]: value })
  }

  handleDateStartChange = (date) => {
    this.setState({ 'start': date })
  }

  handleDateEndChange = (date) => {
    this.setState({ 'end': date })
  }

  buildDate = (date) => {
    let year = date.getYear() + 1900;
    let month = date.getMonth() + 1  > 9 ? date.getMonth() +1  : '0' + (date.getMonth() + 1);
    let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
    let buildDate = `${year}${month}${day}`;
    return buildDate;
  }
  

  handleSubmit = () => {
    let {classification, latitude, longtitude, location, priority, summary, start, end} = this.state; 
    start = this.buildDate(start);
    end = this.buildDate(end);
    let icsEvent = [new Vevents(classification, latitude, longtitude, location, priority, summary, start, end)];
    let icsCalendar = new Ics(icsEvent);
    let calendar = icsCalendar.build();
    console.log(this.state);
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
            onChange={this.handleDateStartChange} 
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
            readOnly
          />
          <Icon>
            <DatePicker 
            selected={this.state.date} 
            onChange={this.handleDateEndChange} 
            name={end}
          />
          </Icon>
        </Form.Group>
        <Form.Input 
          label='Priority' 
          placeholder='Priority: 1-10' 
          width={2}
          onChange={this.handleChange}
          name='priority'
        />
        <Form.Input 
          label='Location' 
          placeholder='Location' 
          width={2}
          onChange={this.handleChange}
          name='location'
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