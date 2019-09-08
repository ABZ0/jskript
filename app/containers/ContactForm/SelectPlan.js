import React from 'react';
import PropTypes from 'prop-types';
import {
  Select,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputBase,
} from '@material-ui/core';

export default function SelectPlan({ field, form, ...other }) {
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <React.Fragment>
      <FormControl variant="outlined" fullWidth>
        <InputLabel ref={inputLabel} htmlFor="outlined-plan">
          Plan (Optional)
        </InputLabel>
        <Select
          native
          required={field.required}
          input={
            <OutlinedInput
              labelWidth={labelWidth}
              name="plan"
              id="outlined-plan"
            />
          }
          variant="outlined"
          label={field.label}
          name={field.name}
          value={field.value}
          onChange={description =>
            description &&
            form.setFieldValue(field.name, description.target.value, true)
          }
          {...other}
        />
      </FormControl>
    </React.Fragment>
  );
}

SelectPlan.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
};
