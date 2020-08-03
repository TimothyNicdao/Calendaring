import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const formStyle = {
    minWidth: 1,
    margin: 200,
  };


class Classification extends Component {

    render() {
    
      let options = this.props.options;

      return ( 

      <FormControl className={formStyle}>
        <InputLabel id="demo-controlled-open-select-label">Classification</InputLabel>
        <Select
          labelId="Classification" 
          id="Classification"
          name='classification'
          autoWidth={true}
          label="classification"
          defaultValue='Public'
          value={this.props.value}
          fullWidth={true}
          onChange={(e) => this.props.onChange(e, {name: e.target.name, value: e.target.value})}
          >
            {options.map((item) =>(
                <MenuItem key={item.value}  value={item.value} > {item.value}</MenuItem>      
            ))}
        </Select>
      </FormControl>
      );
    }
}
 
export default Classification;