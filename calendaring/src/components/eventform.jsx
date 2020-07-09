import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


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
  console.log(e);
 
  this.setState({ [name]: value })
  }



  render() { 
    const{classification, latitude, longtitude, summary, start, end, priority, location} = this.state;

    return (  
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
        <Form.Input 
          label='Start' 
          placeholder='StartDate' 
          width={2}
          value={start}
          onChange={this.handleChange}
        />
        <Form.Input 
          label='EndDate' 
          placeholder='End' 
          width={2}
        />
        <Form.Input 
          label='Priority' 
          placeholder='Priority' 
          width={2}
        />
        <Form.Input 
          label='Location' 
          placeholder='Location' 
          width={2}
        />
        <DatePicker 
          selected={this.state.date} 
          onChange={this.handleChange} 
          name={start}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}
 
export default EventForm;