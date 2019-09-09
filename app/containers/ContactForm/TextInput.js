import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

export default function TextInput({ field, form, ...other }) {
  const currentError = form.errors[field.name];
  return (
    <TextField
      inputProps={{ 'aria-label': 'input field' }}
      required={field.required}
      variant="outlined"
      label={field.label}
      name={field.name}
      type={field.type}
      value={field.value}
      helperText={currentError}
      error={Boolean(currentError)}
      onError={(_, error) => form.setFieldError(field.name, error)}
      onChange={description =>
        description &&
        form.setFieldValue(field.name, description.target.value, true)
      }
      {...other}
    />
  );
}

TextInput.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
};
