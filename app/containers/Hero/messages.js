/*
 * Hero Messages
 *
 * This contains all the text for the Hero container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Hero';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'WEB DESIGN & MOBILE APP DEVELOPMENT',
  },
  subtitle: {
    id: `${scope}.subtitle`,
    defaultMessage: `Specializing in custom web and mobile app development. If you're
    a business seeking a web presence or looking to hire, contact us
    `,
  },
  contact: {
    id: `${scope}.contact`,
    defaultMessage: 'here.',
  },
  start: {
    id: `${scope}.start`,
    defaultMessage: 'Get started',
  },
});
