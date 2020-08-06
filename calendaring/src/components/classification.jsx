import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Classification(props) {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Classification</InputLabel>
        <Select
          id='classification-select'
          native
          value={props.value}
          name='classification'
          onChange={(e) => props.onChange(e)}
        >
            {props.options.map((item) =>(
                <option key={item.value}  value={item.value} > {item.value}</option>      
            ))}        
        </Select>
      </FormControl>
    </div>
  );
}
