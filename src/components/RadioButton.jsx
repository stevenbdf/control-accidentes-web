import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function RadioButtons({value}) {
  const [selectedValue, setSelectedValue] = React.useState(value);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value={"a"}
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      /> 
    </div>
  );
}