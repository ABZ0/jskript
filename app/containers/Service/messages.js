/*
 * Service Messages
 *
 * This contains all the text for the Service container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Service';

export default defineMessages({
  learn: {
    id: `${scope}.learn`,
    defaultMessage: 'Learn more',
  },
  mobileTitle: {
    id: `${scope}.mobileTitle`,
    defaultMessage: 'MOBILE-FRIENDLY',
  },
  mobileSubtitle: {
    id: `${scope}.mobileTitle`,
    defaultMessage:
      'A responsive design makes your website accessible to all users, regardless of their device.',
  },
  ecommerceTitle: {
    id: `${scope}.ecommerceTitle`,
    defaultMessage: 'ECOMMERCE',
  },
  ecommerceSubtitle: {
    id: `${scope}.ecommerceSubtitle`,
    defaultMessage:
      'Integration of eCommerce platforms, payment gateways, custom template and more.',
  },
  designTitle: {
    id: `${scope}.designTitle`,
    defaultMessage: 'DESIGN + DEVELOPMENT',
  },
  designSubtitle: {
    id: `${scope}.designSubtitle`,
    defaultMessage:
      'Clean, modern designs - optimized for performance, search engines, and converting users to customers.',
  },
  contentTitle: {
    id: `${scope}.contentTitle`,
    defaultMessage: 'CONTENT MANAGEMENT',
  },
  contentSubtitle: {
    id: `${scope}.contentSubtitle`,
    defaultMessage:
      'User friendly content management system. Easily update content without knowing how to code.',
  },
  auditTitle: {
    id: `${scope}.auditTitle`,
    defaultMessage: 'WEBSITE AUDIT',
  },
  auditSubtitle: {
    id: `${scope}.auditSubtitle`,
    defaultMessage:
      'Looking to improve your page performance, SEO, or user experience? Request a free audit.',
  },
  analyticTitle: {
    id: `${scope}.analyticTitle`,
    defaultMessage: 'ANALYTICS',
  },
  analyticSubtitle: {
    id: `${scope}.analyticSubtitle`,
    defaultMessage:
      'Get insights into who is browsing your site so that you can make smarter business decisions.',
  },
});
