import React, { Component } from 'react';
import { Form, Icon } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Vevents from '../vevents';
import Ics from '../ics';
import fileDownload from 'js-file-download';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Alert from '@material-ui/lab/Alert';
import Classification from './classification.jsx'
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

const classificatication = [
  {text: 'Public', value:'PUBLIC'},
  {text: 'Private', value:'PRIVATE'}
]

const classificatication2 = [
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
      errorToggle: false,
      error: 'Noneee'
  }

  
  handleChange = (e, {name, value}) => {
    console.log('Called');
    console.log(e.target);
    console.log(e.target);
    console.log(value);
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

    if (this.formComplete() === true){
      console.log('12');
      let {classification, latitude, longtitude, location, priority, summary, start, end} = this.state; 
      start = this.buildDate(start);
      end = this.buildDate(end);
      let icsEvent = [new Vevents(classification, latitude, longtitude, location, priority, summary, start, end)];
      let icsCalendar = new Ics(icsEvent);
      let calendar = icsCalendar.build();
      fileDownload(calendar, 'Calendar.ics');
    }
    else{
      console.log('123');
      this.setState({errorToggle: true});
    }
  }


  formComplete = () =>{

    for (let val of Object.keys(this.state) ){
      console.log(val);
      if (this.state[val] === ''){
        console.log('Here in my garage');
        this.setState({error: val});
        return false;
      }
    }
    return true;
  }

  formReset = () => {
    console.log('FormReset');
    this.setState({errorToggle: false});
  }

  render() { 
    const{classification, latitude, longtitude, summary, start, end, priority, location, errorToggle, error} = this.state;
    
    if(errorToggle === true){
      console.log('Error Toggle');
      return (
      <Alert onClose={this.formReset}>{error} is missing. Please complete the form</Alert>
      )
    }

    return (  
      <React.Fragment>
      <Container maxWidth="md">
        <Classification
          label='classification'
          options={classificatication}
          value={classification}
          onChange={this.handleChange}
        />
        <TextField 
          id="standard-basic" 
          label='Latitude'  
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
      <Button
        className = 'Center'
        variant="contained"
        color="primary"
        size="large"
        startIcon={<SaveIcon />}
        onClick={this.handleSubmit}
      >
        Download
      </Button>
      </Container>
    </React.Fragment>
    );
  }
}
 
export default EventForm;
