import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Classification extends Component {

    render() {
        
      let options = this.props.options;

      return ( 
        <Select
        label={this.props.label}
        value={this.props.value}
        onChange={this.props.onChange}
        name='Classification'
        >
       {options.map((item) =>(
            <MenuItem key={item.value} > {item.value}</MenuItem>      
        ))}
      </Select>
      );
    }
}
 
export default Classification;