/**
 *
 * ContactForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Form, Field, Formik } from 'formik';
import { object, string } from 'yup';

import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import messages from './messages';
import TextInput from './TextInput';
import SelectPlan from './SelectPlan';

const initialValues = {
  email: '',
  plan: '',
  message: '',
};

const validationSchema = object().shape({
  email: string()
    .email('Please enter a valid email address.')
    .required('Please enter your email address.'),
  message: string().required('Please enter your message.'),
});

const useStyles = makeStyles(theme => ({
  rightIcon: {
    marginLeft: theme.spacing(1),
    fontSize: 20,
  },
}));

export function ContactForm({ onSubmitForm }) {
  const classes = useStyles();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur
      validateOnChange={false}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        resetForm();
        setSubmitting(false);
        onSubmitForm(values);
      }}
      render={({ isSubmitting }) => (
        <Form noValidate>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Field
                label="Email"
                type="text"
                name="email"
                fullWidth
                required
                component={TextInput}
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                // label="Plan"
                name="plan"
                fullWidth
                component={SelectPlan}
              >
                <option value="" />
                <option value={1}>Basic</option>
                <option value={2}>Standard</option>
                <option value={3}>Premium</option>
              </Field>
            </Grid>
            <Grid item xs={12}>
              <Field
                type="textarea"
                multiline
                rows={6}
                name="message"
                required
                label="Message"
                placeholder="Tell us about your project..."
                fullWidth
                component={TextInput}
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                disabled={isSubmitting}
              >
                Send
                <SendIcon className={classes.rightIcon} />
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    />
  );
}

ContactForm.propTypes = {};

export default ContactForm;
