'use strict';

/**
 * app-name service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::app-name.app-name');
