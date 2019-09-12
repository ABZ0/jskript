/*
 * Pricing Messages
 *
 * This contains all the text for the Pricing container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Pricing';

export default defineMessages({
  choose: {
    id: `${scope}.choose`,
    defaultMessage: 'choose',
  },
  quote: {
    id: `${scope}.quote`,
    defaultMessage: 'request quote',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'PRICING PER BUILD',
  },
  audit: {
    id: `${scope}.audit`,
    defaultMessage: 'Website Audit',
  },
  development: {
    id: `${scope}.development`,
    defaultMessage: 'Development',
  },
  cm: {
    id: `${scope}.cm`,
    defaultMessage: 'Content Management',
  },
  design: {
    id: `${scope}.design`,
    defaultMessage: 'Design',
  },
  backups: {
    id: `${scope}.backups`,
    defaultMessage: 'Backups',
  },
  seo: {
    id: `${scope}.seo`,
    defaultMessage: 'SEO',
  },
  maintenance: {
    id: `${scope}.maintenance`,
    defaultMessage: 'Maintenance Agreement',
  },
  ecommerce: {
    id: `${scope}.ecommerce`,
    defaultMessage: 'eCommerce',
  },
  mail: {
    id: `${scope}.mail`,
    defaultMessage: 'Email Setup',
  },
  hosting: {
    id: `${scope}.hosting`,
    defaultMessage: 'Hosting',
  },
  note: {
    id: `${scope}.note`,
    defaultMessage:
      '* Premium package is a more complicated order and the prices vary by a large margin so it is best to decide on the cost with the customer in person.',
  },
});
