/*
 * ContactForm Messages
 *
 * This contains all the text for the ContactForm container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ContactForm';

export default defineMessages({
  contact: {
    id: `${scope}.contact`,
    defaultMessage: 'Get in touch',
  },
  basic: {
    id: `${scope}.basic`,
    defaultMessage: 'Basic',
  },
  standard: {
    id: `${scope}.standard`,
    defaultMessage: 'Standard',
  },
  premium: {
    id: `${scope}.premium`,
    defaultMessage: 'Premium',
  },
});
