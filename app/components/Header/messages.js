/*
 * Header Messages
 *
 * This contains all the text for the Header component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Header';

export default defineMessages({
  services: {
    id: `${scope}.services`,
    defaultMessage: 'SERVICES',
  },
  portfolio: {
    id: `${scope}.portfolio`,
    defaultMessage: 'PORTFOLIO',
  },
  pricing: {
    id: `${scope}.pricing`,
    defaultMessage: 'PRICING',
  },
});
