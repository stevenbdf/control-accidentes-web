import PropTypes from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function SwitchLabels({ state, setState }) {
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
        label="Resumen general"
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

SwitchLabels.propTypes = {
  state: PropTypes.instanceOf(Object).isRequired,
  setState: PropTypes.func.isRequired,
};
