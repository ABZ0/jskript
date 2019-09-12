/**
 *
 * ContactForm
 *
 */

import React from 'react';
import { Form, Field, Formik } from 'formik';
import { object, string } from 'yup';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';

import { FormattedMessage } from 'react-intl';
import TextInput from './TextInput';
import SelectPlan from './SelectPlan';
import messages from './messages';

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
  contactTitle: {
    textAlign: 'center',
    fontSize: '34px',
    fontWeight: 700,
    margin: theme.spacing(0, 0, 5, 0),
  },
}));

export function ContactForm() {
  const classes = useStyles();
  const onSubmitForm = () => {};

  return (
    <React.Fragment>
      <h1 className={classes.contactTitle}>
        <FormattedMessage {...messages.contact} />
      </h1>
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
          <Form name="contact" method="POST" data-netlify="true" noValidate>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Field
                  aria-label="enter email"
                  label="Email"
                  type="text"
                  name="email"
                  fullWidth
                  required
                  component={TextInput}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  label="Plan"
                  name="plan"
                  fullWidth
                  component={SelectPlan}
                >
                  <option value="" />
                  <FormattedMessage {...messages.basic}>
                    {placeholder => <option value={1}>{placeholder}</option>}
                  </FormattedMessage>
                  <FormattedMessage {...messages.standard}>
                    {placeholder => <option value={2}>{placeholder}</option>}
                  </FormattedMessage>
                  <FormattedMessage {...messages.premium}>
                    {placeholder => <option value={2}>{placeholder}</option>}
                  </FormattedMessage>
                </Field>
              </Grid>
              <Grid item xs={12}>
                <Field
                  aria-label="type your message"
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
              <Grid item>
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
    </React.Fragment>
  );
}

ContactForm.propTypes = {};

export default ContactForm;
