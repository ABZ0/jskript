/*
 * Portfolio Messages
 *
 * This contains all the text for the Portfolio container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Portfolio';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'OUR LATEST WORK',
  },
  preview: {
    id: `${scope}.preview`,
    defaultMessage: 'preview',
  },
  visit: {
    id: `${scope}.visit`,
    defaultMessage: 'visit',
  },
  projectTitle: {
    id: `${scope}.projectTitle`,
    defaultMessage: 'Project Zero',
  },
  projectSubtitle: {
    id: `${scope}.projectSubtitle`,
    defaultMessage:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec scelerisque nibh, vitae dignissim nisi. Nullam velit mi, ullamcorper bibendum laoreet eu, luctus sed tortor.',
  },
});
