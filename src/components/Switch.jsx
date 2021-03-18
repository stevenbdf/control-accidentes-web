import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function SwitchLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row className="flex justify-between">
      <FormControlLabel
        control={(
          <Switch
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            color="primary"
          />
        )}
        label="Graficos"
      />
      <FormControlLabel
        control={(
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        )}
        label="Multimedia"
      />
      <FormControlLabel
        control={(
          <Switch
            checked={state.checkedC}
            onChange={handleChange}
            name="checkedC"
            color="primary"
          />
        )}
        label="Graficos"
      />
    </FormGroup>
  );
}
