import { useState } from 'react';
import Proptypes from 'prop-types';
import Radio from '@material-ui/core/Radio';

export default function RadioButtons({ value }) {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      />
    </div>
  );
}

RadioButtons.propTypes = {
  value: Proptypes.string.isRequired,
};
